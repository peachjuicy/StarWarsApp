import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import styles from './style';
import {observer} from 'mobx-react';
import { RootStoreContext } from '../store/RootStoreContext';

@observer
class CharacterDetails extends React.Component {
    //The contextType property on a class can be assigned a Context object created by React.createContext().
    //This lets you consume the nearest current value of that Context type using this.context. 
    //You can reference this in any of the lifecycle methods including the render function.
    static contextType=RootStoreContext;
   

        render () {
        //reference to the character store & favCharacterStore, it's state and methods
    const {characterStore, favCharacterStore} = this.context;
    const { navigation } = this.props;
    //accessing character
    const character = this.props.route.params.character;  
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Name: {character.name} </Text>
                <Text style={styles.text}>Birthyear: {character.birth_year} </Text>
                <Text style={styles.text}>Species: {character.species} </Text>
                <Text style={styles.text}>Gender: {character.gender} </Text>
                <Text style={styles.text}>Eye color:  {character.eye_color} </Text>
                <Text style={styles.text}>Skin color: {character.skin_color} </Text>
                <Text style={styles.text}>Mass: {character.mass} </Text>
                <Text style={styles.text}>Homeworld: {character.homeworld} </Text>
                <Text style={styles.text}>Vecihle: {character.vehicles} </Text>
                  <TouchableOpacity onPress={() => favCharacterStore.addToFavList(character, character.url)}  style={[styles.button, styles.buttonText]}>
                      <Text>Add to favs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('FavCharacterList')}  style={[styles.button, styles.buttonText]}>
                  <Text>Favorites List</Text>
                  </TouchableOpacity>
            </View>
        )
   }
}
export default CharacterDetails;