// src/pages/WishDetail.tsx
import { Link, useParams, useNavigate } from "react-router-dom";
import { getWish } from "../lib/wishes";

export default function WishDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const wish = id ? getWish(id) : undefined;

  if (!wish) {
    nav("/wishes", { replace: true });
    return null;
  }

  return (
    <section className="container narrow center" style={{ paddingBottom: 24 }}>
      <div className="wish-big">
        <p className="wish-big-text">{wish.message || "—"}</p>
        <div className="wish-author">ชื่อผู้ส่ง: {wish.name || "ผู้ส่ง"}</div>
      </div>

      {/* ปุ่มบนหน้านี้: กลับไป "หน้าคำอวยพรทั้งหมด" และ "หน้าแรก" */}
      <div className="stack-btn">
        <Link className="btn btn-lg" to="/wishes">
          คำอวยพร
        </Link>
        <Link className="btn btn-lg btn-navy" to="/home">
          หน้าแรก
        </Link>
      </div>
    </section>
  );
}
