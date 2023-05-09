import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
export default function CourseContent({course}) {
  return (
    <View style={{marginTop:10}}>
      <Text style={{fontWeight:'bold',
    fontSize:16}}>Course Content</Text>
    <FlatList
    style={{marginTop:10}}
    data={course?.Topic}
    renderItem={({item,index})=>(
        <View style={{display:'flex',
        flexDirection:'row',backgroundColor:Colors.white,marginBottom:5
        ,padding:13,alignItems:'center',borderRadius:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,
        color:Colors.gray,marginRight:20}}>{index+1}</Text>
            <Text style={{fontSize:15,fontWeight:'bold'}}>
                {item.Topic?item.Topic:item.name}</Text>
            <Ionicons name="play-circle" size={24}
            style={{position:'absolute',right:10,}}
             color={Colors.primary} />
        </View>
    )}
    />
    </View>
  )
}