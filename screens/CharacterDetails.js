import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Constants from 'expo-constants';
import styles from './style';
import {toJS} from 'mobx';
const CharacterDetails = (props) => {
        console.log("Props", props)

      
       
    const { navigation } = props;
    const character = props.route.params.character;  
       console.log("Char", toJS(character))
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {character.name} </Text>
                <Text style={styles.text}> {character.birth_year} </Text>
                <Text style={styles.text}> {character.species} </Text>
                <Text style={styles.text}> {character.gender} </Text>
                <Text style={styles.text}> {character.eye_color} </Text>
                <Text style={styles.text}> {character.skin_color} </Text>
                <Text style={styles.text}> {character.mass} </Text>
                  <Text style={styles.text}>{character.homeworld} </Text>
                  <Text style={styles.text}>{character.vehicles} </Text>
                  <Text style={styles.text}>{character.films} </Text>
                  <Button onPress={() => addToFavList()} color='#E2E21C' title="Add to favs"></Button>
            </View>
        )
    
}

export default CharacterDetails;