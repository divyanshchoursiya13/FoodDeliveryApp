import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeHeadNavbar = () => {
  return (
    <>
    <View style={styles.container}>
    <Entypo name="dots-three-vertical" size={30} color="black" style={styles.icons} />

    <View style={styles.containers}>
        <Text style={styles.headtext}>Food App</Text>
        {/* <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" /> */}
    </View>

    <Feather name="user" size={30} color="black" style={styles.icons} />
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#CBD6D1',
        elevation: 20,
        marginTop: 0,
        borderRadius: 20,
    },
    containers: {
        flexDirection: 'row',
        marginLeft: '5px',
       alignItems: 'center',
    },

    icons: {
        color: 'black'
    },

})




export default HomeHeadNavbar