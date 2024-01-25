import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const CreateAuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, observeUser => {
            console.log("Im observing now on", observeUser);
            setUser(observeUser)
            setLoading(false)
        })
        return () => {
         unSubscribe()
        }
    },[])
    // Observer end
    
    const contextAuthInfo = { user, createUser, loginUser, logOut, loading }
    return (
        <CreateAuthContext.Provider value={contextAuthInfo}>
            {children}
        </CreateAuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;