// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home/Home'
import MyProfile from './src/screens/ProfileScreens/MyProfile'

import More from './src/screens/More/More';
import Settings from './src/screens/More/Settings';

import {
  Home_Active,
  Home_Inactive,
  Profile_Active,
  Profile_Inactive
} from './src/Assets/Images/Index';




const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MyProfile" component={MyProfile} />
    </HomeStack.Navigator>
  );
}

const MoreStack = createStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
      <MoreStack.Screen name="Settings" component={Settings} />
    </MoreStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
