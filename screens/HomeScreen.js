import React from 'react';
import styles from './style';
import {  View, Text, TouchableOpacity} from 'react-native';

//each screen component is provided with navigation prop automatically
//navigate is a function which takes name of the route to which it routes
function HomeScreen ({navigation}){
         return (
             <View  style={styles.container}>
                 <Text style={styles.text}>Welcome to the Star Wars App!</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('CharacterList')} style={[styles.button, styles.buttonText]}>
                     <Text>Character List</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('FavCharacterList')} style={[styles.button, styles.buttonText]}>
                 <Text>Favorites List</Text>
                 </TouchableOpacity>
             </View>
         );
}



export default HomeScreen;