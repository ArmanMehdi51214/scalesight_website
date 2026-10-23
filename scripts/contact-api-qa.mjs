import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
// Exercise the real handler, with outbound delivery replaced by a local test double.
const source=ts.transpileModule(fs.readFileSync('app/api/contact/route.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function handler({stub=false,approved=true,destination='https://delivery.example.test/contact',delivery='ok',production=false}={}){
 const module={exports:{}};const sent=[];
 vm.runInNewContext(source,{exports:module.exports,module,require:()=>({siteConfig:{notificationDestination:destination}}),process:{env:{NODE_ENV:production?'production':'development',CONTACT_SUBMISSION_MODE:stub?'stub':'',PRIVACY_NOTICE_APPROVED:approved?'true':''}},Request,Response,URL,TextEncoder,AbortSignal,console:{error:()=>{}},fetch:async(url,options)=>{sent.push({url,body:JSON.parse(options.body)});if(delivery==='throw')throw new Error('test delivery failed');return new Response('',{status:delivery==='ok'?200:503});}});
 return {post:module.exports.POST,sent};
}
const valid={name:'Site QA',email:'QA@EXAMPLE.COM',brand:'Example Brand',website:'example.com',role:'Founder',channels:['Retail','invalid'],decision:'Local test only',intent:'partner'};
const request=(body=valid,headers={})=>new Request('http://localhost/api/contact',{method:'POST',headers:{'content-type':'application/json','idempotency-key':crypto.randomUUID(),...headers},body:typeof body==='string'?body:JSON.stringify(body)});
const checks={};
let h=handler({stub:true});checks.validStub=(await h.post(request())).status===200&&h.sent.length===0;
h=handler();checks.deliveryAccepted=(await h.post(request())).status===200&&h.sent.length===1&&h.sent[0].body.email==='qa@example.com'&&h.sent[0].body.website==='https://example.com/'&&h.sent[0].body.channels.length===1;
h=handler();checks.invalidFields=(await h.post(request({}))).status===422&&h.sent.length===0;
h=handler();checks.invalidJSON=(await h.post(request('{'))).status===400&&h.sent.length===0;
h=handler();checks.honeypot=(await h.post(request({...valid,companyFax:'spam'}))).status===400&&h.sent.length===0;
h=handler();checks.origin=(await h.post(request(valid,{origin:'https://untrusted.example'}))).status===403&&h.sent.length===0;
h=handler({approved:false});checks.requiresApproval=(await h.post(request())).status===503&&h.sent.length===0;
h=handler({destination:''});const key=crypto.randomUUID();checks.missingDestination=(await h.post(request(valid,{'idempotency-key':key}))).status===503&&h.sent.length===0;
checks.unavailableCanRetry=(await h.post(request(valid,{'idempotency-key':key}))).status===503;
h=handler({delivery:'throw'});const failedKey=crypto.randomUUID();checks.failedDelivery=(await h.post(request(valid,{'idempotency-key':failedKey}))).status===502;
checks.failedDeliveryCanRetry=(await h.post(request(valid,{'idempotency-key':failedKey}))).status===502;
h=handler({stub:true,production:true,approved:false});checks.productionRejectsStub=(await h.post(request())).status===503;
h=handler({stub:true});const duplicateKey=crypto.randomUUID();await h.post(request(valid,{'idempotency-key':duplicateKey}));checks.rejectsDuplicate=(await h.post(request(valid,{'idempotency-key':duplicateKey}))).status===409;
h=handler({stub:true});for(let i=0;i<5;i++)await h.post(request());checks.rateLimit=(await h.post(request())).status===429;
h=handler();checks.oversized=(await h.post(request('x'.repeat(20001)))).status===413;
console.log(JSON.stringify(checks,null,2));assert(Object.values(checks).every(Boolean));
