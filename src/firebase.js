import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBmWbgi3Fu1_dBmKhyEykDEmp1hC2mo5jk",
    authDomain: "charlymania-97734.firebaseapp.com",
    projectId: "charlymania-97734",
    storageBucket: "charlymania-97734.appspot.com",
    messagingSenderId: "330759509194",
    appId: "1:330759509194:web:d4dd1ec071c1308479d033",
    measurementId: "G-3PM6HPEMJL"
};

const app = initializeApp(firebaseConfig);     
export const db = getFirestore(app)

