import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import MainScreen from './src/screens/MainScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';

const Stack = createNativeStackNavigator();




 const  App = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
       name="Singup" 
       component={SignupScreen} 
       options={{ headerShown: false }}
      
      />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Track Detail" component={TrackDetailScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
    
  );
}


export default () => {

  return(
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  )

}