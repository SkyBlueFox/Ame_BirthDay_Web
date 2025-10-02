export const fmt = (ts:number)=> {
  const d = new Date(ts)
  return d.toLocaleString('th-TH',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'short'})
}
