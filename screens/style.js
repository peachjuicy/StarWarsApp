
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
   alignItems: 'center',
   justifyContent: 'space-around',
   backgroundColor: '#050201',
   borderBottomWidth:10,
   padding: 7,
  

   
    },
    text: {
       color: 'white',
       textAlign:'center',
       fontFamily: 'sans-serif-condensed',
       fontWeight:'bold',
       fontSize:16
    }, 
    button: {
      width:100, 
      height: 35,
      marginTop:15,
      backgroundColor:'#FFE81F',
      color: 'black',
      borderRadius:3,
      alignItems:'center',
      alignSelf:'center',
      paddingTop:7,
    },
    scrollView: {
      backgroundColor: '#050201',
    },
    buttonText: {
      color: 'black',
       textAlign:'center',
       fontFamily: 'sans-serif-condensed',
       fontWeight:'bold',
       fontSize:12,
    }
   
   });

   export default styles;