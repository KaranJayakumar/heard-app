import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://verhvxcfkezyjuxzhran.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcmh2eGNma2V6eWp1eHpocmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NDU3OTUsImV4cCI6MjAyMjMyMTc5NX0.-vSvHGHVzVc653NRSaofqJHZWlgWrN6VuZ7ioWY7sXY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})
