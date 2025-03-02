import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCx4xO9ddLkzi6rB_GAb0U5sqjmPV576f4",
    authDomain: "globalprofitplatform43.firebaseapp.com",
    projectId: "globalprofitplatform43",
    storageBucket: "globalprofitplatform43.appspot.com",
    messagingSenderId: "821561182342",
    appId: "1:821561182342:web:8d09c5bc109efccd63e907",
    measurementId: "G-SNFRHGG5VL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, auth, storage, analytics };