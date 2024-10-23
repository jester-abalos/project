import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import AboutScreen from './app/screens/AboutScreen';
import HomeScreen from './app/screens/HomeScreen';
import BiologyScreen from './app/screens/biology';
import ChemistryScreen from './app/screens/chemistry';
import ComsciScreen from './app/screens/comsci';
import EarthsciScreen from './app/screens/Earthsci';
import PhysicsScreen from './app/screens/physics';
import PsychologyScreen from './app/screens/psychology';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Biology" component={BiologyScreen} />
        <Stack.Screen name="Chemistry" component={ChemistryScreen} />
        <Stack.Screen name="Comsci" component={ComsciScreen} />
        <Stack.Screen name="Earthsci" component={EarthsciScreen} />
        <Stack.Screen name="Physics" component={PhysicsScreen} />
        <Stack.Screen name="Psychology" component={PsychologyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
