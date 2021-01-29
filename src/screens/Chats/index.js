/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
export const App = props => {
    const DATA = [
        {
            image:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name:'Abdul Samad',
            message:'Where did you reach',
            time:'00:32'
        },
        {
            image:'https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=328&q=80',
            name:'Abdul Haseeb',
            message:'I dont know man!',
            time:'01:10'
        },
        {
            image:'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name:'Abdul Manan',
            message:'How did you get it?',
            time:'10:32'
        },
        {
            image:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',
            name:'Muhammad Umair',
            message:'NO!currently Iam too busyy',
            time:'09:12'
        },
        {
            image:'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name:'Shahid Ali',
            message:'Know nothing bro!',
            time:'00:32'
        },
        {
            image:'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name:'Salman memon',
            message:'Cricket pay chalien?',
            time:'00:32'
        },
    ]
  return (
     <View style={{flex:1}}>
         <ScrollView contentContainerStyle={{flexGrow:1}}>
      <FlatList
      data={DATA}
      keyExtractor={item=>item}
      renderItem={itemData=>(
       <TouchableOpacity onPress={() => {
           props.navigation.navigate('chat',{
               image:itemData.item.image,
               name:itemData.item.name
           });
       }}>
            <View style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            borderWidth:0.3,
            borderColor:'transparent',
            borderBottomColor:'darkgrey'
        }}>
          <View style={{flexDirection:'row',}}>
          <View>
                <Image source={{
                    uri:itemData.item.image
                }}
                style={{
                    width:55,
                    height:55,
                    borderWidth:1,
                    borderColor:'transparent',
                    borderRadius:55/2
                }}
                />
            </View>
            <View style={{paddingHorizontal:20,paddingVertical:5}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{itemData.item.name}</Text>
                <Text style={{color:'grey',fontWeight:'500',paddingHorizontal:3,top:3}}>{itemData.item.message}</Text>
            </View>
          </View>
            <View>
                <Text style={{color:'grey',fontWeight:'500',paddingVertical:3}}>{itemData.item.time}</Text>
            </View>
 
        </View>
       </TouchableOpacity>
      )}
      />
      </ScrollView>
      <TouchableOpacity style={{
          width:55,
          height:55,
          borderWidth:1,
          borderColor:'#25D366',
          backgroundColor:'#25D366',
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          bottom:'10%',
          right:15,
          borderRadius:55/2
      }}>
          <MaterialIcons name='message' size={25} color='white'/>
      </TouchableOpacity>
     </View>
  )
}



export default App;
