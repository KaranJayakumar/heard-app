import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
export const AuthContext = createContext();
const API_URL = "https://api.developbetterapps.com/";
import axios from "axios";
export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [authState, setAuthState] = useState({
        token: null,
        authState: null,
    });
    const login = async (username, password) => {
        console.log(username);
        try {
            setIsLoading(true);
            const result = await axios.post(`${API_URL}/auth`, { username, password });
            setAuthState({
                token: result.data.token,
                authenticated: true,
            })
            axios.defaults.headers.common['Auth'] = 'Bearer ${result.data.token}';
            await SecureStore.setItemAsync('USER_TOKEN', 'jaksdlf');
            setIsLoading(false);
        } catch (e) {
            console.log("Error during Login Authentication");
            console.log(e);
        }
    }
    const logout = async () => {
        setIsLoading(true);
        setAuthState({
            token: null,
            authenticated: null,
        })
        axios.defaults.headers.common['Auth'] = '';
        await SecureStore.deleteItemAsync('USER_TOKEN');
        setIsLoading(false);
    }

    const register = async (username, password) => {
        try {
            return await axios.post('${API_URL}/users', { username, password });
        } catch (e) {
            console.log("Error during registration");
            console.log(e);
        }
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let storedUserToken = await SecureStore.getItemAsync('USER_TOKEN');
            if (storedUserToken) {
                axios.defaults.headers.common['Auth'] = 'Bearer ${result.data.token}';
                setAuthState({
                    token: storedUserToken,
                    authenticated: true,
                });
            }
            else {
                return;
            }
        }
        catch (e) {
            console.log("Error during checking if Logged In.");
            console.log(e);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider value={{ authState, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}


