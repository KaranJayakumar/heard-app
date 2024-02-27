import { createContext, useEffect, useState } from "react";
import { supabase } from "../backendSetup/supabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [session, setSession] = useState(null);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                throw error;
            }

            setSession(data.session);
        } catch (e) {
            console.error("Error during Login Authentication");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await supabase.auth.signOut();
            setSession(null);
            console.log("Signed Out");
        } catch (e) {
            console.error("Error while Signing Out");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (error) {
                throw error;
            }
            setSession(data.session);
        } catch (e) {
            console.error("Error during registration");
            console.error(e);
        }
    };

    useEffect(() => {
        const restoreSession = async () => {
            try {
                setIsLoading(true);
                const { data, error } = await supabase.auth.getSession();

                if (error) {
                    throw error;
                }

                if (data) {
                    setSession(data.session);
                }
            } catch (e) {
                console.error("Error restoring session");
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };

        restoreSession();

        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            if (event === "SIGNED_OUT") {
                setSession(null);
            }
        });

    }, []);

    return (
        <AuthContext.Provider value={{ session, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

