// vite.config.js
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './visualize.html',
      open: true
    })
  ],
  optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },
  server: {
    port: 3000, // 기본 포트 번호 설정
    strictPort: false, // 포트 충돌 시 다음 포트로 이동
    open: true, // 서버 시작 시 브라우저 자동으로 열기
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  
});