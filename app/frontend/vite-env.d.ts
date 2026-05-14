/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URI: string;
  readonly VITE_ACCUWEATHER_ICON_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
