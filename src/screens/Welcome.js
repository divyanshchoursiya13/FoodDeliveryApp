import React from 'react'
import {StyleSheet, View,Text, Image } from 'react-native'
import backgroundimage from '../../assets/backgroundimage.jpg'

const Welcome = () => {
  return (
    <View style={StyleSheet.container}>
        <Text>Welcome Screen</Text>
        <View style={StyleSheet.bgimage}>
            <Image source={backgroundimage} />
        </View>
    </View>
  )
}












const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bgimage:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Welcome