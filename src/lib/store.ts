export type Wish = { name:string; subject?:string; message:string; ts:number }
export type Stage = { id:number; title:string; date:string; photos:string[]; credits:string }

const LS_WISHES = 'wishes';
const LS_THEME  = 'theme';
const LS_LAST   = 'lastSubmit';
const LS_STAGES = 'stages';

export const getTheme = (): 'angel'|'devil' => {
  try {
    const v = typeof localStorage !== 'undefined' ? localStorage.getItem(LS_THEME) : null;
    return (v === 'devil' ? 'devil' : 'angel');
  } catch { return 'angel'; }
};

export const setTheme = (t:'angel'|'devil') => {
  try { if (typeof localStorage !== 'undefined') localStorage.setItem(LS_THEME, t); } catch {}
};

export const getWishes = ():Wish[] => {
  try { return JSON.parse(localStorage.getItem(LS_WISHES) || '[]'); } catch { return []; }
};
export const setWishes = (w:Wish[]) => { try { localStorage.setItem(LS_WISHES, JSON.stringify(w)); } catch {} };

export const getStages = ():Stage[] => {
  try {
    return JSON.parse(localStorage.getItem(LS_STAGES) || JSON.stringify([
      {id:1,title:'Stage 1 — Debut',date:'2023-03-01',photos:['',''],credits:'© BlueFox'},
      {id:2,title:'Stage 2 — Rising',date:'2023-05-09',photos:[''],credits:'© BlueFox'},
      {id:3,title:'Stage 3 — Shine',date:'2023-10-21',photos:[''],credits:'© BlueFox'}
    ]));
  } catch { return []; }
};
export const setStages = (s:Stage[]) => { try { localStorage.setItem(LS_STAGES, JSON.stringify(s)); } catch {} };

export const getLastSubmit = ()=> { try { return +(localStorage.getItem(LS_LAST) || 0); } catch { return 0; } };
export const setLastSubmit = (ts:number)=> { try { localStorage.setItem(LS_LAST, String(ts)); } catch {} };

export const BADWORDS = ['fuck','shit','เหี้ย','สัส','ควาย','ควย'];
export const clean = (t:string)=> BADWORDS.reduce((s,w)=> s.replace(new RegExp(w,'gi'), '*'.repeat(Math.min(3,w.length))), t);
