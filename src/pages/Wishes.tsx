// src/pages/Wishes.tsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchWishes, subscribeWishes, type Wish } from '../lib/wishes'

export default function Wishes(){
  const [items, setItems] = useState<Wish[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let unsub = () => {}
    ;(async () => {
      try {
        const data = await fetchWishes()
        setItems(data)
        unsub = subscribeWishes((w) => setItems(prev => [w, ...prev]))
      } catch (err:any) {
        setError(err.message ?? 'โหลดรายการไม่สำเร็จ')
      } finally {
        setLoading(false)
      }
    })()
    return () => { unsub() }
  }, [])

  if (loading) return <section className="container"><div className="muted">กำลังโหลด…</div></section>
  if (error) return <section className="container"><div className="muted">{error}</div></section>

  return (
    <>
      <section className="container" style={{ paddingBottom: 96 }}>
        <h1 className="title">คำอวยพรทั้งหมด</h1>

        <div className="wish-grid">
          {items.map(w => (
            <article key={w.id} className="wish-card">
              <div className="wish-sender">{w.author}</div>
              <div className="wish-msg">{w.message}</div>
              <div className="muted" style={{marginTop:8, fontSize:12}}>
                {new Date(w.created_at).toLocaleString()}
              </div>
            </article>
          ))}
          {items.length===0 && <div className="muted">ยังไม่มีคำอวยพร</div>}
        </div>
      </section>

      {/* CTA ติดล่าง */}
      <div className="sticky-cta">
        <Link to="/create" className="btn focus-ring w-full">เขียนคำอวยพร</Link>
      </div>
    </>
  )
}
