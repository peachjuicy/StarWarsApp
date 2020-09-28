
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
   alignItems: 'stretch',
   justifyContent: 'space-around',
   backgroundColor: '#050201',
    },
    text: {
       color: 'white'
    }, 
    button: {
      backgroundColor:'#FFE81F',
      
    },
    scrollView: {
      backgroundColor: '#050201',
    },
   
   });

   export default styles;