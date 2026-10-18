"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode, type KeyboardEvent } from "react";
const subscribe = () => () => {};

export function TabPanel({ items }: { items: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  const enhanced = useSyncExternalStore(subscribe, () => true, () => false);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowLeft") next = (index + items.length - 1) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault(); setActive(next); buttons.current[next]?.focus();
  }
  return <div className="story-tabs" data-enhanced={enhanced}><div className="story-tablist" role={enhanced ? "tablist" : undefined} aria-label="Illustrative examples">{items.map((item,index)=><button key={item.label} ref={node=>{buttons.current[index]=node;}} id={`${id}-tab-${index}`} role={enhanced ? "tab" : undefined} aria-selected={enhanced ? active===index : undefined} aria-controls={`${id}-panel-${index}`} tabIndex={enhanced && active!==index ? -1 : 0} onKeyDown={e=>navigate(e,index)} onClick={()=>setActive(index)} type="button">{item.label}</button>)}</div>{items.map((item,index)=><div className="story-tabpanel" key={item.label} role={enhanced ? "tabpanel" : undefined} id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={enhanced && active!==index} tabIndex={0}>{item.content}</div>)}</div>;
}

export function BriefFieldLayout({ labels, children }: { labels: string[]; children: ReactNode }) {
  const root=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const node=root.current;
    if (!node || !window.IntersectionObserver) return;
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){const rows=[...node.querySelectorAll('.decision-brief__row')];const index=rows.indexOf(entry.target);node.querySelectorAll('[data-field-label]').forEach((item,i)=>item.setAttribute('data-active',String(i===index)));}});
    },{rootMargin:'-20% 0px -45% 0px'});
    node.querySelectorAll('.decision-brief__row').forEach(row=>observer.observe(row));
    const keyboard=(e:globalThis.KeyboardEvent)=>{if(e.key==='Tab')node.dataset.keyboard='true';};
    const pointer=()=>{delete node.dataset.keyboard;};
    window.addEventListener('keydown',keyboard);window.addEventListener('pointerdown',pointer);
    return()=>{observer.disconnect();window.removeEventListener('keydown',keyboard);window.removeEventListener('pointerdown',pointer);};
  },[]);
  return <div className="brief-layout" ref={root}><div className="brief-index" aria-hidden="true">{labels.map((label,i)=><div key={label} data-field-label data-active={i===0}><span className="brief-index-dot"/>{label}</div>)}</div><div className="brief-content">{children}</div></div>;
}
