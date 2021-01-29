/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  Pressable,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const App = props => {
  const DATA = [
    {
        image:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        name:'Abdul Samad',
        recieved:false,
        time:'Today, 19:23'
    },
    {
        image:'https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=328&q=80',
        name:'Abdul Haseeb',
        recieved:true,
        time:'yesterday, 19:23'
    },
    {
        image:'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        name:'Abdul Manan',
        recieved:true,
        time:'Today, 19:23'
    },
    {
        image:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
        name:'Muhammad Umair',
        recieved:false,
        time:'Today, 20:23'
    },
    {
        image:'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name:'Shahid Ali',
        recieved:false,
        time:'Today, 21:23'
    },
    {
        image:'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name:'Salman memon',
        recieved:false,
        time:'Today, 13:23'
    },
]
  return (
     <View style={{flex:1}}>
     {
       DATA.map(item => {
         return(
          <View style={{width:'100%',height:60,margin:5,flexDirection:'row',justifyContent:'space-between',padding:10}}>
         <View style={{flexDirection:'row'}}>

          <Image source={{uri:item.image}} style={{width:50,height:50,borderWidth:1,borderColor:'transparent',borderRadius:50/2}}/>
  
  <View>

    <Text style={{fontSize:16,fontWeight:'bold',margin:5,left:3}}>{item.name}</Text>

    <View style={{flexDirection:'row'}}> 

      <MaterialCommunityIcons style={{left:7}} name={item.recieved ? 'call-received' : 'call-made'} color={item.recieved ? 'red' : '#0bda51'} size={18}/>

    <Text style={{left:10,color:'grey'}}>{item.time}</Text>
    </View>
    
  </View>
           </View>
  
         <Pressable onPress={() => {
           props.navigation.navigate('call',{
            image:item.image,
            name:item.name
           })
         }}>
         <FontAwesome name='phone' color='#075E54' size={23} style={{
             margin:8
          }}/>
         </Pressable>
        </View>
  
         )
       })
     }
  


     </View>
  )
}



export default App;
