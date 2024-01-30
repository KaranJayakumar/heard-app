import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Launch from '../screens/launch';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Launch" component={Launch} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
export default AuthStack;
