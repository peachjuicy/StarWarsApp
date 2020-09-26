
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
   flex: 1,
   marginTop: Constants.statusBarHeight,
   backgroundColor: '#050201',
   alignItems: 'center',
   justifyContent: 'space-around',
   borderBottomColor: 'white',
    borderBottomWidth: 1,
  
    },
    text: {
       color: 'white'
    }, 
    button: {
      backgroundColor:'#E2E21C'
    },
    scrollView: {
      backgroundColor: '#050201',
    },
   });

   export default styles;