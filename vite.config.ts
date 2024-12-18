import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
// import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // mkcert(),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   // devOptions: {
    //   //   enabled: true, // 개발 환경에서 서비스 워커 활성화
    //   // },
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    //   manifest: {
    //     name: 'pov',
    //     short_name: 'pov',
    //     theme_color: '#333036',
    //     icons: [
    //       {
    //         src: 'pwa-64x64.png',
    //         sizes: '64x64',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any',
    //       },
    //       {
    //         src: 'maskable-icon-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'maskable',
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      'pov-design-system': 'pov-design-system/dist/index.js',
    },
  },
  server: {
    /* HTTPS */
    // https: {
    //   key: './localhost+1-key.pem',
    //   cert: './localhost+1.pem',
    // },
    proxy: {
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
