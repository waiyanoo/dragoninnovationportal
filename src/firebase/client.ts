import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

const environment: ImportMetaEnv = import.meta.env;

const firebaseConfig = {
    apiKey: environment.FIREBASE_API_KEY,
    authDomain: environment.FIREBASE_AUTH_DOMAIN,
    projectId: environment.FIREBASE_PROJECT_ID,
    storageBucket: environment.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: environment.FIREBASE_MEASUREMENT_ID,
    appId: environment.FIREBASE_APP_ID,
};


export const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp, environment.FIREBASE_STORAGE_PATH);
const dataRef = ref(storage, 'data/data.json');
const hanskinUrlRef = ref (storage, 'data/HanskinProductList.json');
const mondiesUrlRef = ref(storage, 'data/MongdiesProductList.json');
const hanskinRetailerRef = ref (storage, 'data/HanskinRetailers.json');
const mongdiesRetailerRef = ref (storage, 'data/MongdiesRetailers.json');

export const data_url: string = await getDownloadURL(dataRef)
    .then( (url: string) => {
        return  url.toString()

    })
    .catch((error): string => {
        console.log("error", error)
        return ''
    });


export const hanskin_product_url: string = await getDownloadURL(hanskinUrlRef)
    .then((url: string) => {
        return url.toString();
    })
    .catch((error): string => {
        console.log("error", error)
        return ''
    });

export const mongdies_product_url: string = await getDownloadURL(mondiesUrlRef)
    .then((url: string) => {
        return url.toString();
    })
    .catch((error): string => {
        console.log("error", error)
        return ''
    });

export const hanskin_retailer_url: string = await getDownloadURL(hanskinRetailerRef)
    .then((url: string) => {
        return url.toString();
    })
    .catch((error): string => {
        console.log("error", error)
        return ''
    });
export const mongdies_retailer_url: string = await getDownloadURL(mongdiesRetailerRef)
    .then((url: string) => {
        return url.toString();
    })
    .catch((error): string => {
        console.log("error", error)
        return ''
    });
