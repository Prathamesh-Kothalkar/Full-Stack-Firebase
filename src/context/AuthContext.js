"use client";

import { createContext, useContext, useEffect, useState } from "react";
import firebaseApp from "@/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp)
export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <h1>Loading...</h1> : children}
        </AuthContext.Provider>
    );
};
