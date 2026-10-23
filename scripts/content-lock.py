"""Rendered HTML contract. Run against a running Next server; no dependencies."""
import json,os,re,sys,urllib.request
from html.parser import HTMLParser
from pathlib import Path
m=json.loads(Path('docs/content-manifest.json').read_text())
contactEmail=os.environ.get('NEXT_PUBLIC_CONTACT_EMAIL','arman@scalesight.org')
base=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:3100'
compact=lambda s:re.sub(r'\s+','',s)
class Page(HTMLParser):
 def __init__(self):super().__init__();self.skip=0;self.text=[];self.ids=[];self.body=False;self.sections={};self.sectionStack=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='body':self.body=True
  if t in ['script','style','nextjs-portal']:self.skip+=1
  if 'data-section' in a:self.ids.append(a['data-section']);self.sections[a['data-section']]=[]
  if t=='section':self.sectionStack.append(a.get('data-section',self.sectionStack[-1] if self.sectionStack else None))
 def handle_endtag(self,t):
  if t=='section' and self.sectionStack:self.sectionStack.pop()
  if t in ['script','style','nextjs-portal']:self.skip-=1
 def handle_data(self,s):
  if self.body and not self.skip:
   self.text.append(s)
   if self.sectionStack and self.sectionStack[-1]:self.sections[self.sectionStack[-1]].append(s)
def strings(value):
 if isinstance(value,str):return [value]
 if isinstance(value,dict):return [s for v in value.values() for s in strings(v)]
 if isinstance(value,list):return [s for v in value for s in strings(v)]
 return []
brief=[m['sampleBrief']['disclosure'],m['sampleBrief']['context']]+[x for f in m['sampleBrief']['fields'] for x in f.values()]+[m['sampleBrief']['ownerLabel'],m['sampleBrief']['owner']]
failures=[]
for route,sections in m['routes'].items():
 guide=m.get('pageGuides',{}).get(route)
 guideCopy=([guide['label']]+[l['text'] for l in guide['links']]) if guide else []
 p=Page();html=urllib.request.urlopen(base+route).read().decode();html=re.sub(r'<div aria-hidden="true"[^>]*>.*?</div>', '', html);p.feed(html)
 text=compact(' '.join(p.text));pos=0
 for section in sections:
  for b in section['blocks']:
   if section['kind']=='booking' or (section['kind']=='example' and b['text']=='Open illustrative workspace'):continue
   at=text.find(compact(b['text']),pos)
   if at<0:failures.append(f"{route} {section['id']} missing/out of order: {b['text'][:90]}")
   else:pos=at+len(compact(b['text']))
 for section in sections:
  if section['kind'] in ['form','booking']:continue
  expectedCopy=[b['text'] for b in section['blocks'] if not(section['kind']=='example' and b['text']=='Open illustrative workspace')]
  if section['kind']=='email':expectedCopy += [contactEmail]
  if section['kind']=='hero' and guide:expectedCopy=[guide['label']]+expectedCopy+[l['text'] for l in guide['links']]
  if section['id']=='H01':expectedCopy += strings(m['heroPreview'])
  if section['kind'] in ['brief','deliverables']:expectedCopy += brief
  if section['kind']=='example':expectedCopy += [m['sampleBrief']['disclosure']]
  actual=compact(' '.join(p.sections.get(section['id'],[])))
  if actual!=compact(' '.join(expectedCopy)):failures.append(f"{route} {section['id']} exact section copy differs (extra, duplicated, missing or reordered text)")
 expected=[s['id'] for s in sections]
 if p.ids!=expected:failures.append(f'{route} section IDs: {p.ids}; expected {expected}')
 allowed=[contactEmail]+guideCopy+strings(m.get('heroPreview',{}))+m['approved']+m['accessibilityAndValidation']+brief+[b['text'] for s in sections for b in s['blocks']]
 remaining=text
 for s in sorted(set(allowed),key=lambda s:len(compact(s)),reverse=True):remaining=remaining.replace(compact(s),'')
 if remaining:failures.append(f'{route} unapproved text: {remaining[:2000]}')
 if route in ['/','/examples','/30-day-planning-pilot']:
  for s in brief:
   if compact(s) not in text:failures.append(f'{route} missing brief content: {s}')
 print(f'{route}: inspected {len(sections)} sections')
print('\n'.join(failures))
print(f'Content lock: {len(failures)} differences')
sys.exit(bool(failures))
