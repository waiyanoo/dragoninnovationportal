/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly HANSKIN_BASE: string;
    readonly SUGARBEAR_BASE: string;
    readonly MONGDIES_BASE: string;
    readonly MONGDIES_RETAILER: string;
    readonly HANSKIN_RETAILER: string;
    readonly FIREBASE_API_KEY: string
    readonly FIREBASE_AUTH_DOMAIN: string
    readonly FIREBASE_PROJECT_ID: string
    readonly FIREBASE_CLIENT_EMAIL: string
    readonly FIREBASE_APP_ID: string
    readonly FIREBASE_STORAGE_BUCKET: string
    readonly FIREBASE_MEASUREMENT_ID: string
    readonly FIREBASE_STORAGE_PATH: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
