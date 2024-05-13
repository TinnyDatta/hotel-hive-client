import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    // user creation
    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
    return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            const userEmail = user?.email || user?.email;
            const loggedUser = {email: userEmail}
         console.log(user)
             if (user) {
               setUser(user);
               }
             setLoading(false);
            //  token
             if(user){
                
              axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials : true})
              .then(res => {
                console.log('token response',res.data);
              })
             }
             else{
              axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
              })
              .then(res=> {
                console.log(res.data)
              })
             }
           });
           return () => {
             unSubscribe();
           }
     }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        logout,
        updateUserProfile,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;