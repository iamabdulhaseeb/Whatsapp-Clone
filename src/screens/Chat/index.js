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
  ImageBackground,
  Text,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const App = props => {
    console.log(props);
    const img = props.route.params.image;
    const name = props.route.params.name;
    props.navigation.setOptions({
        title:null,
        headerLeft:() => {
            return(
                <View style={{flexDirection:'row',justifyContent:'center'}}> 
                    <TouchableOpacity onPress={() => {
                        props.navigation.pop();
                    }}
                    style={{
                        flexDirection:'row'
                    }}
                    >
                        <Ionicons
                        name='arrow-back'
                        color='white'
                        size={30}
                        />
                <Image source={{
                uri:img
             }}
             style={{
                 width:35,
                 height:35,
                 borderWidth:1,
                 borderColor:'transparent',
                 borderRadius:35/2,
                 bottom:3,
                 left:5
             }}
             />
            </TouchableOpacity>
             <Text style={{fontSize:18,color:'white',fontWeight:'bold',padding:5,left:10,bottom:3}}>{name}</Text>
           </View>
            )
        },
        headerRight:() => {
           return (
            <View style={{flexDirection:'row',width:80,justifyContent:'center'}}>
         <View style={{width:100,justifyContent:'center',flexDirection:'row'}}>
         <TouchableOpacity>
               <FontAwesome
               name='video-camera'
               color='white'
               size={20}
               style={{right:20}}
               />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => {
               props.navigation.navigate('call',{
                   image:img,
                   name:name
               })
           }}
           > 
               <FontAwesome
               name='phone'
               color='white'
               size={20}
               style={{right:8}}
               />
           </TouchableOpacity>
           <TouchableOpacity>
               <Entypo
               name='dots-three-vertical'
               size={20}
               color='white'
               />
           </TouchableOpacity>
         </View>
       </View>
           )
        }
    })
  return (
    <View style={{flex:1}}> 
         <ScrollView contentContainerStyle={{flexGrow:1}}>
       <ImageBackground
       source={{
           uri:'https://fsa.zobj.net/crop.php?r=Y7XpYTU5wXAZHT1I-HGkqNiqY1umyP2ahrm8H1akctM1u5gRfs35OOglkZ8Cj3zonzO0Gh7mBcZ3bi5czNKnkuqe-F1E1iJjTvnOB1d5p2o59NL3le93Wd6fOMo-lSfWf-IgvhxkJdQv8RSV'
       }}
       style={{
           width:'100%',
           height:'100%'
       }}
       >
            <View style={{flex:1}}>
       <View style={{flexDirection:'row',position:'absolute',bottom:10,alignSelf:'center',width:'100%',left:10}}>
       <View style={{
             width:'82%',
             height:50,
             borderWidth:1,
             borderColor:'white',
             backgroundColor:'white',
             borderRadius:30,
             shadowColor: 'grey',
             shadowOffset: { width: 0, height: 1 },
             shadowOpacity: 0.5,
             shadowRadius: 2, 
             flexDirection:'row',
             justifyContent:'space-between'
             
         }}> 
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{justifyContent:'center',top:10,left:5}}>
             <Entypo name='emoji-happy' size={25} color='grey'/>
         </TouchableOpacity>
             <TextInput
             placeholder='Type a message'
             style={{
                 paddingLeft:10,
                 fontSize:18,
                 bottom:3
             }}
             />
        </View>
        <View style={{flexDirection:'row',top:15,right:15}}>
            <TouchableOpacity style={{right:5}}>
                <FontAwesome name='paperclip' size={25} color='grey'/>
            </TouchableOpacity>
            <TouchableOpacity style={{left:2}}>
                <FontAwesome name='camera' size={22} color='grey'/>
            </TouchableOpacity>
        </View>
         </View>
         <TouchableOpacity style={{
             width:50,
             height:50,
             borderWidth:1,
             borderColor:'#075E54',
             backgroundColor:'#075E54',
             borderRadius:50/2,
             justifyContent:'center',
             alignItems:'center',
             left:5
         }}>
         <MaterialCommunityIcons name='microphone' size={30} color='white'/>
         </TouchableOpacity>
       </View>
     </View>
       </ImageBackground>
     </ScrollView>
    
    </View>
  )
  
}




export default App;
