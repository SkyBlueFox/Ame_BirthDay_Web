// src/pages/Create.tsx
import { FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { addWish } from "../lib/wishes";

export default function Create() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    // mock ส่ง
    setTimeout(() => {
      const wish = addWish(name, message);
      setSending(false);
      // ไปหน้าแสดงคำอวยพรที่เพิ่งส่ง
      nav(`/wish/${wish.id}`, { replace: true });
    }, 350);
  };

  return (
    <section className="container narrow">
      <div className="panel">
        <h1 className="title center">คำอวยพรของฉัน</h1>

        <form onSubmit={onSubmit} className="form">
          <label className="form-label">ชื่อ</label>
          <input
            className="input"
            type="text"
            maxLength={40}
            placeholder="ใส่ชื่อเล่น"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="form-label" style={{ marginTop: 12 }}>คำอวยพร</label>
          <textarea
            className="textarea"
            rows={8}
            maxLength={500}
            placeholder="พิมพ์คำอวยพรของคุณ…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="stack-btn">
            <button className="btn btn-lg" disabled={sending || !message.trim()}>
              {sending ? "กำลังส่ง…" : "ส่งคำอวยพร"}
            </button>

            <Link className="btn btn-lg btn-navy" to="/home">
              หน้าแรก
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
