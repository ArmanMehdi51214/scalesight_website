import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const forbidden=/fishwife|alec|understatement/i;
const failures=[];
const check=(label,text)=>{if(forbidden.test(text)) failures.push(label);};
const files=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);
const images=files('public').filter(f=>/\.(png|jpe?g|webp|avif|svg)$/i.test(f));
const ocr=spawnSync('tesseract',['--version'],{encoding:'utf8'}).status===0;
for(const file of images){
 check('Image filename: '+file,file);
 const bytes=fs.readFileSync(file);
 check('Image metadata/content: '+file,bytes.toString('utf8'));
 if(ocr&&!file.endsWith('.svg')){
  const result=spawnSync('tesseract',[file,'stdout'],{encoding:'utf8'});
  if(result.status!==0) failures.push('OCR failed: '+file); else check('Image OCR: '+file,result.stdout);
 }
}
for(const file of ['docs/content-manifest.json','docs/approved-extras.json','docs/decision-image.json','lib/site-metadata.ts',...files('app').filter(f=>/\.(tsx|ts)$/.test(f)),...files('components').filter(f=>/\.(tsx|ts)$/.test(f))]){
 check('Copy, alt text or metadata: '+file,fs.readFileSync(file,'utf8'));
}
const provenance=JSON.parse(fs.readFileSync('docs/decision-image.json','utf8'));
const digest=createHash('sha256').update(fs.readFileSync(provenance.file)).digest('hex');
if(digest!==provenance.sha256)failures.push('Decision image differs from reviewed capture');
if(!provenance.text.includes('Illustrative · synthetic data')) failures.push('Missing synthetic-data disclosure');
console.log(`Brand check: ${failures.length} failures; ${images.length} images; OCR ${ocr?'enabled':'unavailable (DOM text, image bytes/metadata and reviewed capture hash checked)'}.`);
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
