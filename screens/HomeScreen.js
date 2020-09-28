import React from 'react';
import styles from './style';
import {  View, Text, Button } from 'react-native';


function HomeScreen ({navigation}){
  
         return (
             <View  style={styles.container}>
                 <Text style={styles.text}>Welcome to the Star Wars App!</Text>
                 <Button onPress={() => navigation.navigate('CharacterList')} color='#FFE81F' title="Character List" ></Button>
                 <Button onPress={() => navigation.navigate('FavCharacterList')} color='#FFE81F'    title="Favorites List" ></Button>

             </View>
         );
}



export default HomeScreen;