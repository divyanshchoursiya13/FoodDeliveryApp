import React from 'react'
import { StyleSheet,Text,View,ScrollView } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons';
const Cards = () => {
  return (
    <>
      <View style={styles.conatiner} >
        <Text style={styles.head}>Popular Food Items</Text>


        
    </View>
    </>
  )
}

const styles=StyleSheet.create({
  conatiner: {
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#ffff",
    // alignItems: 'center',
    width: '95%',
    margin: 5,
  },

  head: {
    color: '#D35400',
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: '#D35400',
    borderBottomWidth: 1,
  },
})

export default Cards

