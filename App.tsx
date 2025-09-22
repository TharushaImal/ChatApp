import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/Splash';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import { ThemeProvider } from './src/theme/ThemeProvider';

export type RootStack = {
  SplashScreen: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ animation: "fade", }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
