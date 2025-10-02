// src/pages/Create.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createWish } from '../lib/wishes'

export default function Create(){
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    try {
      setLoading(true)
      await createWish({ author, message })
      setAuthor(''); setMessage('')
      nav('/wishes') // ไปหน้ารายการ
    } catch (err:any) {
      alert(err.message ?? 'บันทึกไม่สำเร็จ')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container">
      <h1 className="title">เขียนคำอวยพร</h1>

      <div className="panel">
        <form className="form" onSubmit={onSubmit}>
          <label className="form-label" htmlFor="name">ชื่อผู้ส่ง</label>
          <input
            id="name"
            className="input"
            placeholder="เช่น เพื่อนเอ"
            value={author}
            onChange={e=>setAuthor(e.target.value)}
            maxLength={80}
            required
          />

          <label className="form-label" htmlFor="text">ข้อความ</label>
          <textarea
            id="text"
            className="textarea"
            placeholder="สุขสันต์วันเกิด..."
            value={message}
            onChange={e=>setMessage(e.target.value)}
            rows={5}
            maxLength={500}
            required
          />

          <div className="stack-btn">
            <button className="btn btn-lg" type="submit" disabled={loading}>
              {loading ? 'กำลังบันทึก...' : 'ส่งคำอวยพร'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
