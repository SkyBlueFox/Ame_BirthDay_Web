// src/pages/Wishes.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { listWishes, Wish, countWishes } from "../lib/wishes";

const PAGE = 10;

export default function Wishes() {
  const [items, setItems] = useState<Wish[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const sentinel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // โหลดแรก
    const init = listWishes(0, PAGE);
    setItems(init);
    setOffset(init.length);
    setHasMore(init.length < countWishes());
  }, []);

  useEffect(() => {
    // infinite scroll
    if (!sentinel.current) return;
    const io = new IntersectionObserver((entries) => {
      const e = entries[0];
      if (e.isIntersecting && hasMore) {
        const next = listWishes(offset, PAGE);
        setItems((prev) => [...prev, ...next]);
        setOffset((o) => o + next.length);
        setHasMore(offset + next.length < countWishes());
      }
    }, { rootMargin: '200px 0px' });

    io.observe(sentinel.current);
    return () => io.disconnect();
  }, [offset, hasMore]);

  return (
    <section className="container">
      <h1 className="title">คำอวยพร</h1>

      <div className="wish-grid">
        {items.length === 0 && (
          <div className="muted" style={{ textAlign: 'center', padding: 24 }}>
            ยังไม่มีคำอวยพร ลองเขียนอันแรกได้เลย ✦
          </div>
        )}

        {items.map(w => (
          <Link to={`/wish/${w.id}`} key={w.id} className="wish-card">
            <div className="wish-sender">{w.name || "ผู้ส่ง"}</div>
            <div className="wish-msg">{w.message || "—"}</div>
          </Link>
        ))}
      </div>

      {/* sentinel สำหรับโหลดเพิ่มเมื่อเลื่อนถึงท้าย */}
      <div ref={sentinel} />

      {/* ปุ่มเขียนคำอวยพร ติดล่าง */}
      <div className="sticky-cta">
        <Link to="/create" className="btn w-full">เขียนคำอวยพร</Link>
      </div>
    </section>
  );
}
