import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from './src/screens/launch'
import Login from './src/screens/login';
import SignUp from './src/screens/signUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const MyTheme = {
    dark: true,
    colors: {
        primary: '#23FF39',
        background: '#080B19',
        card: 'rgb(255, 255, 255)',
        text: '#F4F4F4',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Launch" component={Launch} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
});
