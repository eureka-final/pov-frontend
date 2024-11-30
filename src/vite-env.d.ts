/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_SECRET_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }