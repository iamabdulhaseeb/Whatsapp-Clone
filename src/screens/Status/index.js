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
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
export const App = props => {
  const DATA = [
    {
        image:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        name:'Abdul Samad',
        message:'Where did you reach',
        time:'2 minutes ago'
    },
    {
        image:'https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=328&q=80',
        name:'Abdul Haseeb',
        message:'I dont know man!',
        time:'1 hr ago'
    },
    {
        image:'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        name:'Abdul Manan',
        message:'How did you get it?',
        time:'30 minutes ago'
    },

]
  return (
     <View style={{flex:1}}>
      <View style={{width:'100%',backgroundColor:'white',padding:10,flexDirection:'row',borderWidth:0.3,borderColor:'transparent',borderBottomColor:'darkgrey'}}>
       <View style={{justifyContent:'center',flexDirection:'row',top:5}}>
        
         <View style={{
           width:55,
           height:55,
           borderWidth:1,
           borderColor:'grey',
           backgroundColor:'grey',
           justifyContent:'flex-end',
           alignItems:'center',
           borderRadius:55/2
         }}>
           <FontAwesome
           name='user'
           size={45}
           style={{
             top:4
           }}
           color='white'
           />
         </View>
         <TouchableOpacity style={{alignSelf:'flex-end',position:'absolute',bottom:10,width:22,height:22,borderWidth:1,borderColor:'#25D366',backgroundColor:'#25D366',borderRadius:22/2,justifyContent:'center',alignItems:'center'}}>
           <Ionicons name='add' size={18} color='white' style={{fontWeight:'bold',textAlign:'center'}}/>
         </TouchableOpacity>
       </View>
       <View style={{padding:10,left:10,justifyContent:'center'}}>
         <Text style={{fontWeight:'500',fontSize:20}}>My Status</Text>
         <Text style={{color:'grey',fontSize:18}}>Tap to add status update</Text>
       </View>
      </View>
      <View style={{paddingVertical:10,paddingLeft:8}}>
        <Text style={{fontWeight:'bold',fontSize:14,color:'grey'}}>Recent Updates</Text>
      </View>
      <FlatList
      data={DATA}
      keyExtractor={item=>item}
      contentContainerStyle={{flexGrow:1,paddingBottom:30}}
      renderItem={itemData => (
        <View style={{width:'100%',margin:0.5,backgroundColor:'white',padding:10,flexDirection:'row',borderWidth:0.3,borderColor:'transparent',borderBottomColor:'darkgrey'}}>
        <View style={{justifyContent:'center',width:56,height:56,borderWidth:3,borderColor:'#25D366',borderRadius:56/2,alignItems:'center',padding:3,top:2}}>
          <Image
          source={{uri:itemData.item.image}}
          style={{width:55,height:55,borderWidth:3,borderColor:'transparent',borderRadius:55/2,padding:1}}
          />
       
        </View>
        <View style={{padding:10,left:10,justifyContent:'center'}}>
          <Text style={{fontWeight:'500',fontSize:18}}>{itemData.item.name}</Text>
          <Text style={{color:'grey',fontSize:16}}>{itemData.item.time}</Text>
        </View>
       </View>
      )}
      />

<View>
        <Text style={{fontWeight:'bold',fontSize:14,color:'grey'}}>Recent Updates</Text>
      </View>
    
     </View>
  )
}



export default App;
