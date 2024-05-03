import { StyleSheet,Text,View,StatusBar,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNavbar from '../components/HomeHeadNavbar'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import { AntDesign } from '@expo/vector-icons';
import Cards from '../components/cards'
import AllRestaurents from '../components/AllRestaurents'
// import firestore from '@react-native-firebase/firestore';
// import f from "@react-native-firebase/app"
import {firebase} from '../../firebase/firebaseconfig'
// import firebase from 'firebase/app';
import 'firebase/firestore';



const Homescreen = () => {
  const  [foodData,setFoodData]=useState([]);
  const  [VegData,setVegData]=useState([]);
  const  [NonVegData,setNonVegData]=useState([]);


  const foodRef = firebase.firestore().collection('fooddata');
  useEffect(() => {
    foodRef.onSnapshot(snapshot =>{
      setFoodData(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  useEffect(() => {
    setVegData(foodData.filter(item => item.foodType=='veg'))
    setNonVegData(foodData.filter(item => item.foodType=='non-veg'))
  },[foodData])
  
  
  // console.log(VegData);
  console.log(NonVegData);
  return (
    <>
    <View style={styles.container}>
        <StatusBar></StatusBar>
        <HomeHeadNavbar></HomeHeadNavbar>

        <View style={styles.searchbox}>
        <AntDesign name="search1" size={30} color="black" style={styles.searchicon} />
          <TextInput placeholder='Search' style={styles.inputtext}></TextInput>
        </View>
        
        <Categories></Categories>

        {/* <Carousel></Carousel> */}
        <Slider></Slider>
        {/* <Cards></Cards> */}
        <AllRestaurents></AllRestaurents>
        
    </View>
    
    
    
    </>
  )
}
const styles=StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#ffff',
    borderRadius: 30,
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  inputtext: {
    marginLeft: 10,
    width: '90%',
    fontSize: 15,
    color: '#5D6D7E',
  },
})
export default Homescreen