// src/components/SplashLayout.tsx
import { Outlet } from 'react-router-dom';

export default function SplashLayout() {
  return (
    <div className="splash-bg">
      <div className="splash-wrap">
        {/* หน้ากลุ่ม Splash (เช่น SplashStart) จะถูกเรนเดอร์ที่นี่ */}
        <Outlet />
      </div>
    </div>
  );
}
