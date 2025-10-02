// src/pages/WishDetail.tsx
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getWish, type Wish } from "../lib/wishes";

export default function WishDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [wish, setWish] = useState<Wish | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    if (!id) { nav("/wishes", { replace: true }); return; }
    (async () => {
      try {
        const data = await getWish(id);
        if (!alive) return;
        if (!data) nav("/wishes", { replace: true });
        else { setWish(data); setLoading(false); }
      } catch { nav("/wishes", { replace: true }); }
    })();
    return () => { alive = false; };
  }, [id, nav]);

  if (loading) {
    return (
      <section className="container narrow center" style={{ paddingBottom: 24 }}>
        <div className="muted">กำลังโหลด…</div>
      </section>
    );
  }
  if (!wish) return null;

  return (
    <section className="container narrow center" style={{ paddingBottom: 24 }}>
      <div className="wish-big">
        <p className="wish-big-text">{wish.message || "—"}</p>
        <div className="wish-author">ชื่อผู้ส่ง: {wish.author || "Anonymous"}</div>
      </div>

      <div className="stack-btn">
        <Link className="btn btn-lg" to="/wishes">คำอวยพร</Link>
        <Link className="btn btn-lg btn-navy" to="/home">หน้าแรก</Link>
      </div>
    </section>
  );
}
