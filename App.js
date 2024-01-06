import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './src/screens/launch'
import Background from './src/components/background'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Launch" component={Launch} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
});
