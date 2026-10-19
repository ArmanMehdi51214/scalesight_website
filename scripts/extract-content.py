import re,json,subprocess,hashlib
from pathlib import Path
pdf=Path('docs/ScaleSight_Website_Revamp_Developer_Brief_Wahib.pdf')
raw=subprocess.check_output(['pdftotext','-raw',str(pdf),'-'],text=True)
norm=lambda s: re.sub(r'\s+',' ',s).strip()
full=norm(raw)
# All copy is extracted from the PDF, never from application code.
def exact(s):
 assert s in full,s
 return s
sections={}
for match in re.finditer(r'(?m)^([HWPEARC]\d\d) / [^\n]+\n',raw):
 end=re.search(r'(?m)^(?:[HWPEARC]\d\d / |Wahib:|SCALESIGHT /|Reusable sample)',raw[match.end():])
 text=raw[match.end():match.end()+end.start()] if end else raw[match.end():]
 sections[match[1]]=text.split('\f')[0].strip()
# Remove only document scaffolding, not publishable copy.
scaffold=['CATEGORY LINE','H1','SUBHEAD','SUPPORT','BUTTONS','FOUR STEPS','TEXT LINK','INTRO','OWNERSHIP LINE','DISCLOSURE','CARDS','HERO CTA','BODY','DATA ACCESS NOTE','CTA','FIT EXAMPLES','DELIVERABLE CARDS','SUBMIT BUTTON','PRIVACY MICROCOPY','Card title Copy','Card Copy','Step Publishable copy','Input group Customer-facing explanation','Week Copy / proposed delivery milestone']
for k,v in sections.items():
 sections[k]=norm('\n'.join(l for l in v.splitlines() if l not in scaffold))
def make(id,starts,kind='editorial',cut=None):
 s=sections[id]
 if cut:s=s.split(cut)[0].strip()
 blocks=[]
 for i,start in enumerate(starts):
  a=s.index(start)
  b=s.index(starts[i+1],a+len(start)) if i+1<len(starts) else len(s)
  value=s[a:b].strip()
  href=None
  if ' → /' in value:value,href=value.split(' → ',1)
  blocks.append({'text':exact(value),**({'href':href} if href else {})})
 return {'id':id,'kind':kind,'blocks':blocks}
r={}
r['/']=[
make('H01',['FOR GROWING','CPG ·','Before the','We connect','Data science','See an illustrative','Explore the'],'hero'),
make('H02',['A signal','A retail','Is this','One flavor','Should total','One channel','Should you'],'cards'),
make('H03',['We maintain','Agree the','Investigate what','Compare practical','Bring your','See how'],'steps'),
make('H04',['A weekly','See what'],'brief',cut='Render the sample'),
make('H05',['More analytical','For teams','Add bandwidth','For lean','Get maintained','For a specific','Scope a focused','We maintain'],'audiences'),
make('H06',['See the reasoning','Illustrative examples','Supply timing','Launch demand','Size-level'],'links'),
make('H07',['Test the','Choose a buy','Explore the'],'cta'),
make('H08',['Do we need','We start','Who makes','Your team','Do you work','Yes.'],'faq'),
make('H09',['Have an','Bring us','Talk through'],'cta')]
r['/how-we-work']=[
make('W01',['From a','ScaleSight works','Talk through'],'hero'),
make('W02',['Start with','01 Choose','Agree the upcoming','02 Agree','Start with relevant','03 Investigate','Check availability','04 Compare','Compare practical','05 Review','Apply planning','06 Maintain','Refresh the'],'process'),
make('W03',['Forecasts create','A demand']),make('W04',['See an illustrative'],'link'),
make('W05',['Use the data','Demand','Sales and','Stock and','Available and','Operating constraints','Lead times','Commercial context','Promotions,','We agree'],'inputs'),
make('W06',['A clear','ScaleSight maintains']),
make('W07',['Can you','Yes.','Is every','No.','What if','We identify','Will you','Your team'],'faq'),make('W08',['Have an','Talk it'],'cta')]
r['/30-day-planning-pilot']=[
make('P01',['30-DAY','Test the','Choose one','Talk through'],'hero'),
make('P02',['A useful','A strong','An upcoming','A buying','A supply'],'fit'),
make('P03',['Four weeks','1 / Scope','Agree the decision','2 / Establish','Prepare and','3 / Compare','Investigate the','4 / Review','Review the'],'timeline'),
make('P04',['What the','A decision-specific','A shared','Maintained analysis','Forecasts,','Reviewed decision','What changed','A final','A record'],'deliverables'),
make('P05',['Who does','ScaleSight','Your team','Frame the','Provide relevant','Investigate signals','Validate lead','Prepare and','Review the'],'roles'),
make('P06',['Judge the','Did the']),make('P07',['Continue when','After the']),
make('P08',['How long','The proposed','What does','We confirm','How much','We agree','Do we need','No single','Do you replace','ScaleSight adds','Do you guarantee','We assess','What happens if','We review the limitation','What happens after','We review the work'],'faq'),
make('P09',['Have a buy','Talk through'],'cta')]
r['/examples']=[make('E01',['See how','These are'],'hero'),make('E02',['What a'],'brief')]
for id,starts in [('E03',['When supply','CPG /','Evidence to','Options to','Decision output:','Open illustrative']),('E04',['Is the','Food /','Evidence to','Options to','Decision output:','Open illustrative']),('E05',['Which size','Apparel /','Evidence to','Options to','Decision output:','Open illustrative'])]:
 r['/examples'].append(make(id,starts,'example',cut='Candidate demo:'))
r['/examples'] += [make('E06',['The workspace'],'note'),make('E07',['Bring us','Talk through'],'cta')]
# Page 9 BUILD prescribes a question and short output on each Home card; reuse exact E03-E05 copy.
home_cards=r['/'][5]['blocks'][:2]
for card,example in zip(r['/'][5]['blocks'][2:],r['/examples'][2:5]):
 home_cards.extend([card,example['blocks'][0],example['blocks'][4]])
r['/'][5]['blocks']=home_cards
r['/about']=[make('A01',['I started'],'hero'),make('A02',['I’m Arman','ScaleSight brings','Larger brands'],'narrative'),make('A03',['Start with','Make the','Check supply','Keep ownership'],'principles'),make('A04',['Arman Mehdi','Founder,'],'signature'),make('A05',['What commitment','Talk through'],'cta')]
r['/partners']=[make('R01',['Add analytical','ScaleSight can'],'hero'),make('R02',['For advisors','A focused']),make('R03',['A clear','You contribute']),make('R04',['Agree a','Define roles','Scope the','Review the'],'list'),make('R05',['Delivery is'],'note'),make('R06',['Discuss a'],'cta')]
r['/contact']=[make('C01',['Bring us','Tell us'],'hero'),make('C02',['Discuss the','Check the','Agree whether'],'list'),make('C03',['Start with'],'form',cut='Field / required?'),make('C04',['Choose a'],'booking'),make('C05',['Prefer email'],'email')]
# Reusable brief labels are explicitly prescribed on PDF p9; values are p10.
labels=['What changed','What we checked','Recommended action','Quantity and timing','Cash and service trade-off','Assumptions and next signal']
values=['Flavor A sold 1,200 units over four weeks; B sold 800. B was unavailable for six days.','Total sales, availability, repeat orders, incoming supply and shared run capacity. A faster observed rate alone does not establish incremental demand.','Investigate B availability before increasing total volume. Compare an unchanged total run with a revised mix.','Compare 6,000 units at 3,000 A / 3,000 B with 3,600 A / 2,400 B before the next slot is committed.','At an assumed $2 unit cost, both total $12,000 in product cost. Timing, packaging, freight and lost-sales risk still require review.','Synthetic figures; equal unit costs assumed. Recheck B after seven in-stock days and validate MOQ, committed stock and lead time.']
brief={'disclosure':exact('Illustrative · synthetic data'),'context':exact('Synthetic beverage example. Next production slot: 12 November. Decision owner: Brand operations.'),'fields':[{'label':exact(l),'value':exact(v)} for l,v in zip(labels,values)],'ownerLabel':'Decision owner','owner':exact('Brand operations')}
# Explicit PDF-required UI wording and semantic accessibility affordances.
approved=['How we work','Examples','30-day pilot','About','Talk through a decision','ScaleSight helps growing consumer brands turn demand, inventory and incoming supply into reviewed recommendations on quantity, timing and cash.','Service','Illustrative examples','Company','Partners','Contact','Legal','Privacy','Analysis maintained by ScaleSight. Decisions made with the client.','Lahore, Pakistan','Name','Work email','Brand or company','Website','Your role','Sales channels','DTC','Retail','Wholesale','Marketplace','Other','What decision is coming up?','What support does your client need?','Send planning enquiry','We use these details to respond to your enquiry. Read our Privacy Notice.','Sending…','Enter a valid email address.','Thanks - your enquiry has been received. You can now choose a time for a conversation.','We could not send your enquiry. Please try again or email us directly.','Your enquiry has been received. The booking calendar is unavailable here. Open the booking page or email us to arrange a time.','Meeting booked']
manifest={'source':pdf.name,'sha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'extraction':'pdftotext -raw; whitespace normalized only. COPY and explicitly prescribed UI labels; BUILD prose excluded. Demo links remain conditional on configuration and approval.','routes':r,'sampleBrief':brief,'approved':approved,'accessibilityAndValidation':['Skip to main content','*','Please check the following:','Enter your name.','Enter your email address.','Enter your company.','Enter your brand or company.','Enter a valid website address.'],'placeholders':[exact(s) for s in ['e.g. Sam Lee','e.g. sam@brand.com','e.g. Your brand','e.g. brand.com','e.g. Founder or Operations lead','e.g. Next production run, timing and the choice you are weighing.']]}
Path('docs/content-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
