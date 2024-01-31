import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
export const AuthContext = createContext();
import { firebaseAuth } from "../firebaseSetup/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const auth = firebaseAuth;
    const login = async (username, password) => {
        console.log(username);
        try {
            setIsLoading(true);
            const result = signInWithEmailAndPassword(auth, username, password);
            setUser(username);
            setIsLoading(false);
        } catch (e) {
            console.log("Error during Login Authentication");
            console.log(e);
        }
    }
    const logout = async () => {
        setIsLoading(true);
        try {
            setIsLoading(true);
            firebaseAuth.signOut()
            setUser(null);
            console.log("Signed Out")
        } catch (e) {
            console.log("Error while Signing Out");
            console.log(e)
        }

        setIsLoading(false);
    }

    const register = async (username, password) => {
        try {
            const response = createUserWithEmailAndPassword(auth, username, password);
        } catch (e) {
            console.log("Error during registration");
            console.log(e);
        }
    }

    const checkAuth = async () => {
        try {
            setIsLoading(true);
            const auth = firebaseAuth.onAuthStateChanged(firebaseAuth, (user) => {
                if (user) {
                    setUser(user);
                }
            });
            setIsLoading(false);
        }
        catch (e) {
            console.log("Error during checking if Logged In.");
            console.log(e);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}


