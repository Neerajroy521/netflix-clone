



import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth, signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCMdudvn3SLSxtiZrBYgXNgwfgfHEkTug4",
    authDomain: "netflix-clone-bf83f.firebaseapp.com",
    projectId: "netflix-clone-bf83f",
    storageBucket: "netflix-clone-bf83f.firebasestorage.app",
    messagingSenderId: "26892981392",
    appId: "1:26892981392:web:139d06951e6551079c3415"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })

    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }

}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signUp, logout }; 