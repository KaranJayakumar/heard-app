import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/authContext';
import AppNav from './src/navigation/appNav';
export default function App() {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <AppNav />
            </SafeAreaProvider>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
});
