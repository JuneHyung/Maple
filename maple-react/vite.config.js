// vite.config.js
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";
import { defineConfig } from "vite";
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip'
    }),
    // visualizer({
    //   filename: './visualize.html',
    //   open: true
    // })
  ],
  optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },
  server: {
    port: 3000, // 기본 포트 번호 설정
    strictPort: false, // 포트 충돌 시 다음 포트로 이동
    open: false, // 서버 시작 시 브라우저 자동으로 열기
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    minify: 'esbuild', // 'esbuild' 사용
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  esbuild: {
    minify: true, // esbuild로 minify 수행
    treeShaking: true,
    drop: ['console', 'debugger'], // 콘솔 로그와 디버거 제거
  }
});