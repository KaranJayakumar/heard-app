// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA6k5dEeGQW0UgFSyO_D8gW-kmjvSa7Ufo",
    authDomain: "heard-app-bf3bc.firebaseapp.com",
    projectId: "heard-app-bf3bc",
    storageBucket: "heard-app-bf3bc.appspot.com",
    messagingSenderId: "387864527423",
    appId: "1:387864527423:web:cc02f2423267896e7bae8a",
    measurementId: "G-0CR4WEGGFV"
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage) // Corrected usage of getReactNativePersistence
});

