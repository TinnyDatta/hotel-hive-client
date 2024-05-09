import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // user creation
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
         console.log(user)
             if (user) {
               setUser(user);
               }
            //  setLoading(false);
             
           });
           return () => {
             unSubscribe();
           }
     }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;