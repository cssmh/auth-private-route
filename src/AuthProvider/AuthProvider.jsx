import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

export const CreateAuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, observeUser => {
            console.log("Im observing now on", observeUser);
            setUser(observeUser)
        })
        return () => {
         unSubscribe()
        }
    },[])
    // Observer end
    
    const contextAuthInfo = { user, createUser, loginUser }
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