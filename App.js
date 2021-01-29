/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  LogBox
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from './src/screens/Chats/index';
import StatusScreen from './src/screens/Status/index';
import CallScreen from './src/screens/Calls/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TabView } from 'react-native-tab-view';
import { color } from 'react-native-reanimated';
import Call from './src/screens/Call/index';
import Chat from './src/screens/Chat/index';
import Calls from './src/screens/Calls/index';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Tab.Navigator  
    tabBarOptions={{
      activeTintColor: 'white',
      style: {
        backgroundColor: '#075E54',
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: 4,
      },
      labelStyle: {
        fontWeight: 'bold'
      },
      showIcon: true,
    }}
    >
     {/* <Tab.Screen name='Camera' component={ChatsScreen} 
    
     
     options={{
          tabBarIcon: ({ color }) => <Entypo name="camera" color={color} size={18} />,
          tabBarLabel: () => null,
          
          
        }}/> */}
      <Tab.Screen name='Chats' component={ChatsScreen}/>
      <Tab.Screen name='Status' component={StatusScreen}/>
      <Tab.Screen name='Calls' component={Calls}/>

    </Tab.Navigator>
  )
}
function TabsNav() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#075E54',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: 'green',
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'white',
        fontSize:19
      }
    }}>
      <Stack.Screen
        name="Root"
        component={MainNavigator}
        options={{
          title: "WhatsApp",

          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={StatusScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
      />
       <Stack.Screen
        name="call"
        component={Call}
        options={() => ({
          headerShown:false,
          
        })}
      />
      <Stack.Screen name="NotFound" component={CallScreen}  options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}

export default function App () {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
    <TabsNav/>
  </NavigationContainer>
  )
}



