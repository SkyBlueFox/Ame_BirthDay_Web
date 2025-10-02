// src/pages/About.tsx
import profileImg from '../assets/profile/profile.jpg';
import profileImgDevil from '../assets/profile/profile2.jpg';

function IconFacebook(){ return (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.7V12h2.7V9.8c0-2.7 1.6-4.2 4-4.2 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12z"/></svg>
);}
function IconInstagram(){ return (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
);}
function IconX(){ return (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h4.7l5 6.6L18.9 3H21l-7.2 8.7L21.5 21h-4.7l-5.4-7.1L5.1 21H3l7.9-9.6L3 3z"/></svg>
);}
function IconTiktok(){ return (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3h2.4c.3 1.9 1.6 3.4 3.5 3.8v2.3a6.7 6.7 0 0 1-3.7-1.1v6.4c0 8.1-12 7.8-12-.6 0-3.2 2.7-5.8 6-5a3.7 3.7 0 0 0-3.5 3.7c0 4 6.3 4.2 6.3-.6V3z"/></svg>
);}

export default function About() {
  return (
    <section className="container" style={{ paddingBottom: 24 }}>
      <h1 className="title">เกี่ยวกับ เอมี่</h1>

      <div className="about-card">
        <h2 className="about-heading">Ame Sora! Sora!</h2>

        <div className="about-avatar-wrap"> </div>
<div className="about-avatar-wrap">
  {/* ปกติ */}
  <img src={profileImg} alt="โปรไฟล์เอมี่" className="about-avatar-img normal" loading="lazy" />
  {/* ธีม devil */}
  <img src={profileImgDevil} alt="โปรไฟล์เอมี่ (devil)" className="about-avatar-img devil" loading="lazy" />
</div>


        <div className="about-fields">
          <div className="about-row">
            <div className="about-label">ชื่อเล่น :</div>
            <div className="about-value">เอมี่</div>
          </div>

          <div className="about-row">
            <div className="about-label">ชื่อ :</div>
            <div className="about-value">อรปรียา ธีระหิรัญกิจ</div>
          </div>

          <div className="about-row">
            <div className="about-label">วันเกิด :</div>
            <div className="about-value">09/10</div>
          </div>

          <div className="about-row">
            <div className="about-label">ของที่ชอบ :</div>
            <div className="about-value">มิฟฟี่, เต้น, หม่าล่า</div>
          </div>

          <div className="about-row">
            <div className="about-label">ช่องทางการติดตาม :</div>
            <div className="about-value">
              <div className="socials">
                <a href="https://www.facebook.com/share/1D5DTGuM1k/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn"><IconFacebook/></a>
                <a href="https://www.instagram.com/ame.sorasora" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn"><IconInstagram/></a>
                <a href="https://x.com/ame_sorasora" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-btn"><IconX/></a>
                <a href="https://www.tiktok.com/@ameaun" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="social-btn"><IconTiktok/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
