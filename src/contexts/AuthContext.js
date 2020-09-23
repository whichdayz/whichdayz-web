import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
        console.log(currentUser);
    }, [currentUser]);

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};