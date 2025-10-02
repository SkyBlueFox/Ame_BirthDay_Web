// src/pages/SplashStart.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTheme, setTheme } from "../lib/store";

export default function SplashStart() {
  const navigate = useNavigate();
  const [theme, setThemeState] = useState<"angel" | "devil">(getTheme());

  // ให้ Splash page ใช้ data-theme เหมือน Layout (กรณีหน้า Splash ถูกเปิดเดี่ยว)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme); // เก็บลง localStorage (lib/store)
  }, [theme]);

  return (
    <div style={{ minHeight: "100dvh", background: "var(--page-bg)" }}>
      {/* ใช้ theme-switch แบบเดียวกับ Layout (ตำแหน่ง fixed ขวาบน) */}
      <div style={{ position: "fixed", top: 12, right: 12, zIndex: 40 }}>
        <div
          id="themeSwitch"
          className="theme-switch focus-ring"
          role="switch"
          aria-checked={theme === "angel"}
          tabIndex={0}
          onClick={() => setThemeState(theme === "angel" ? "devil" : "angel")}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              setThemeState(theme === "angel" ? "devil" : "angel");
            }
          }}
          aria-label="สลับธีม"
        >
          <div className="theme-knob">{theme === "angel" ? "☼" : "☾"}</div>
        </div>
      </div>

      {/* คอนเทนต์กึ่งกลาง */}
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        {/* Hero box */}
        <div className="hero-card" style={{ maxWidth: 360, width: "100%", marginBottom: 12 }}>
          <h1 className="hero-title center">
            Happy <br />
            Birthday <span className="year">2025</span>
          </h1>
        </div>

        {/* Chip / name */}
        <div className="chip-lg" style={{ maxWidth: 360 }}>
          Ame Sora! Sora!
        </div>

        {/* ปุ่มเริ่มต้น — ให้กึ่งกลางแนวตั้ง/แนวนอน */}
        <button
          className="btn-start"
          style={{
            width: 300,
            maxWidth: "90vw",
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => navigate("/home")}
        >
          เริ่มต้น
        </button>
      </div>
    </div>
  );
}
