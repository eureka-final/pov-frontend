import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      'pov-design-system': 'pov-design-system/dist/index.js',
    },
  },
  server: {
    proxy: {
      /* Server */
      '/pov': {
        target: 'https://www.point-of-views.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pov/, ''),
        secure: true,
      },

      /* Naver OAuth */
      '/api/naver/token': {
        target: 'https://nid.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver\/token/, '/oauth2.0/token'),
        secure: true,
      },
      '/api/naver/userInfo': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver\/userInfo/, '/v1/nid/me'),
        secure: true,
      },
    },
  },
});

// /api/auth/login
