import firebase from "firebase/compat/app";
import {getStorage} from "firebase/storage"
import {getAnalytics} from "firebase/analytics"
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_API_ID,

  measurementId: process.env.REACT_APP_MEASUREMENT_ID

  // apiKey: "AIzaSyCrbOaONrNWMoUSTmCiMpNAqsENPqxRTX0",

  // authDomain: "let-s-camp-35f60.firebaseapp.com",

  // projectId: "let-s-camp-35f60",

  // storageBucket: "let-s-camp-35f60.appspot.com",

  // messagingSenderId: "410016850781",

  // appId: "1:410016850781:web:cf1e2adc934d7dbdaa3eb4",

  // measurementId: "G-QV3EM1CQJR"

};
const app = firebase.initializeApp(firebaseConfig);

export default app;
export const firebaseInstance = firebase;
export const storageService = getStorage(app);
export const analytics = getAnalytics(app);
