import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import LoginScreen from './src/screens/Loginscreen';
import SignUpScreen from './src/screens/signupscreen';
import HomeHeadNavbar from './src/components/HomeHeadNavbar';
import Homescreen from './src/screens/Homescreen';



export default function App() {
  return (
    <>
    {/* rnfse */}
    <Homescreen></Homescreen>
    {/* <HomeHeadNavbar></HomeHeadNavbar> */}
{/* <Welcome></Welcome> */}
    {/* <LoginScreen /> */}
    {/* <SignUpScreen /> */}
    </>
    
  );
}


const styles = StyleSheet.create({
  container: {
    
  },
});
