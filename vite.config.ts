// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 5174, // ใช้พอร์ตอื่นได้อัตโนมัติ
    strictPort: false,                       // ถ้าซ้ำ ให้สลับพอร์ตทันที
    allowedHosts: true,                      // อนุญาตโดเมนจาก tunnel

    // HMR ให้ตามโดเมนที่ผู้ใช้เปิด (เช่น trycloudflare)
    hmr: {
      protocol: 'wss',
      clientPort: 443,
      // ไม่ระบุ host -> ใช้ window.location.hostname อัตโนมัติ
    },
  },
})
