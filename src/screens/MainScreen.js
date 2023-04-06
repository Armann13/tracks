import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';
import TrackListScreen from '../screens/TrackListScreen';




// tab barı gizlemyior şu false ona bak
const MainScreen = () => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
        <Tab.Screen 
        name="Track List" component={TrackListScreen}
        options={{ headerShown: false }} 
        />
        <Tab.Screen
        name="TrackCreate" 
        component={TrackCreateScreen} 
        options={{ headerShown: false }}
        />
        <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );

};


const styles = StyleSheet.create({


});



export default MainScreen;