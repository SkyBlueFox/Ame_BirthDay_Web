import { NavLink, Outlet } from 'react-router-dom';
import { getTheme, setTheme } from '../lib/store';
import { useEffect, useState } from 'react';

export default function Layout() {
  const [theme, setThemeState] = useState<'angel' | 'devil'>(getTheme());
  const [open, setOpen] = useState(false);

  // apply theme to <html data-theme="...">
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setTheme(theme);
  }, [theme]);

  // hide sticky CTA when drawer open
  useEffect(() => {
    const el = document.documentElement;
    if (open) el.classList.add('has-drawer');
    else el.classList.remove('has-drawer');
    return () => el.classList.remove('has-drawer');
  }, [open]);

  return (
    <div className="app">
      <header className="nav" role="banner">
        <button
          aria-label="เมนู"
          className="btn-small btn-ghost focus-ring"
          style={{ width: 44, padding: 0 }}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <div className="top-title">Ame Birthday 2025</div>
        <div className="spacer" />

        {/* Theme switch (ขวาบน, ลูกบิดเลื่อนสุด) */}
        <div
          id="themeSwitch"
          className="theme-switch focus-ring"
          role="switch"
          aria-checked={theme === 'angel'}
          tabIndex={0}
          onClick={() => setThemeState(theme === 'angel' ? 'devil' : 'angel')}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              setThemeState(theme === 'angel' ? 'devil' : 'angel');
            }
          }}
          aria-label="สลับธีม"
        >
          <div className="theme-knob">{theme === 'angel' ? '☼' : '☾'}</div>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-overlay" onClick={() => setOpen(false)} />
          <nav className="drawer" aria-label="เมนูตัวเลือก">
            <div className="title" style={{ marginTop: 8, fontWeight: 800 }}>เมนู</div>
            <NavLink className="card focus-ring" to="/home"   onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink className="card focus-ring" to="/wishes" onClick={() => setOpen(false)}>Wishes</NavLink>
            <NavLink className="card focus-ring" to="/stages" onClick={() => setOpen(false)}>Stage Photo</NavLink>
            <NavLink className="card focus-ring" to="/about"  onClick={() => setOpen(false)}>About Ame</NavLink>
            {/* ไม่มีปุ่ม "เขียนคำอวยพร" ใน Drawer */}
          </nav>
        </>
      )}

      <main role="main">
        <Outlet />
      </main>
    </div>
  );
}
