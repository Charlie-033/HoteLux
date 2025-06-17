import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase/firebase.config';


const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user)
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = async(userProfile) => {
        if(!auth.currentUser) return;
        try{
            setLoading(true);
        await updateProfile(auth.currentUser, userProfile);
        await auth.currentUser.reload();
        return auth.currentUser;
        }
        finally{
            setLoading(false);
        }
    }
    
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    const userInfo = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        loginUser,
        logOut,
        googleSignIn,
        updateUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;