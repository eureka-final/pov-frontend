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
        target: 'https://nid.naver.com/oauth2.0/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver\/token/, ''),
        secure: true,
      },
      '/api/naver/userInfo': {
        target: 'https://openapi.naver.com/v1/nid/me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver\/userInfo/, ''),
        secure: true,
      },

      /* Google OAuth */
      '/api/google/userInfo': {
        target: 'https://www.googleapis.com/oauth2/v3/userinfo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/google\/userInfo/, ''),
        secure: true,
      },
    },
  },
});

// /api/auth/login
