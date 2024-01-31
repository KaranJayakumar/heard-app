import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebaseSetup/firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const auth = firebaseAuth;

    const login = async (username, password) => {
        console.log(username);

        try {
            setIsLoading(true);
            const result = await signInWithEmailAndPassword(auth, username, password);
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
            const response = await createUserWithEmailAndPassword(auth, username, password);
        } catch (e) {
            console.log("Error during registration");
            console.log(e);
        }

    }


    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        setIsLoading(false);
    }, [user])

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}
export const AuthContext = createContext();
