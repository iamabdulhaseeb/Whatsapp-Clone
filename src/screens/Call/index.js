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
  View,
  Text,
  Platform,
  ImageBackground,
  Pressable
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
export const App = props => {
    const img = props.route.params.image;
    const name = props.route.params.name;
  return (
     <View style={{flex:1}}>
          <ImageBackground 
       source={{uri:img}}
       style={{
        width:'100%',
        height:'100%',
        
        
       }}
       imageStyle={{
           resizeMode:'cover'
       }}
       resizeMethod='resize'
       >
       <View style={{
           width:'100%',
           height:'20%',
           backgroundColor:'#075E54'
       }}>
          <SafeAreaView>
              <View style={{flexDirection:'row',width:'70%',justifyContent:'space-between'}}>
              <TouchableOpacity onPress={() => {
                     props.navigation.pop()
                 }}
                 style={{
                     margin:4,
                     left:6
                 }}
                 >
                 <Entypo name='chevron-down' color='white' size={30}/>

                 </TouchableOpacity>
              <View style={{flexDirection:'row',alignSelf:'center'}}>
              <FontAwesome name='lock' color='darkgrey' size={20} style={{right:3}}/>
                  <Text style={{color:'darkgrey',margin:2,fontSize:14,fontWeight:'bold'}}>Eng-to-end encrypted</Text>
              </View>
              </View>
           
                 
           
          <Text style={{fontSize:30,color:'white',textAlign:'center',padding:10}}>{name}</Text>
          <Text style={{fontSize:20,color:'white',textAlign:'center',paddingBottom:10}}>Ringing</Text>
          </SafeAreaView>
          
       </View>
       <View style={{  width:'100%',
           height:'10%',
           backgroundColor:'#075E54',
           position:'absolute',
           bottom:0}}> 
          <Pressable
          onPress={() => {
              props.navigation.pop();
          }}
          style={{
               width:60,
               height:60,
               borderWidth:1,
               borderColor:'red',
               backgroundColor:'red',
               justifyContent:'center',
               alignItems:'center',
               borderRadius:60/2,
               alignSelf:'center',
               bottom:80
               
           }}>
               <MaterialIcons name='call-end' size={30} color='white'/>
           </Pressable>
          </View>
        
       <View style={{
           width:'100%',
           height:'10%',
           backgroundColor:'#075E54',
           position:'absolute',
           bottom:0,
           justifyContent:'space-around',
           alignItems:'center',
           flexDirection:'row',
           padding:5
       }}> 
       <TouchableOpacity>
           <Ionicons name='volume-medium' size={30} color='white'/>
       </TouchableOpacity>
       <TouchableOpacity>
           <Ionicons name='videocam' size={30} color='white' style={{opacity:0.3}}/>
       </TouchableOpacity>
       <TouchableOpacity>
           <MaterialCommunityIcons name='microphone-off' size={30} color='white'/>
       </TouchableOpacity>
       </View>
       </ImageBackground>

     </View>
  )
}



export default App;
