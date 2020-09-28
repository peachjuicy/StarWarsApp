import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Constants from 'expo-constants';
import styles from './style';
import {observer} from 'mobx-react';
import { RootStoreContext } from '../store/RootStoreContext';

@observer
class CharacterDetails extends React.Component {
    static contextType=RootStoreContext;
   

   render () {
    const {characterStore, favCharacterStore} = this.context;
    const { navigation } = this.props;
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
                  
                  <Button onPress={() => favCharacterStore.addToFavList(character, character.url)} color='#FFE81F' title="Add to favs"></Button>
                  <Button onPress={() => navigation.navigate('FavCharacterList')} color='#FFE81F'  title="Favorites List" ></Button>
            </View>
        )
   }
    
    
}

export default CharacterDetails;