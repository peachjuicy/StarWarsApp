import React, { useContext } from 'react';
import styles from './style';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';

@observer
class CharacterList extends React.Component {
  //The contextType property on a class can be assigned a Context object created by React.createContext().
  // This lets you consume the nearest current value of that Context type using this.context. 
  //You can reference this in any of the lifecycle methods including the render function.
  static contextType=RootStoreContext;
    componentDidMount(){
        //render data on load()
        //reference to the character store, it's state and methods
        const {characterStore} = this.context;
        characterStore.load();
   }
    render(){
     //reference to the character store & favCharacterStore, it's state and methods
         const {characterStore, favCharacterStore} = this.context;
         const { people, loading } = characterStore;
         const { navigation } = this.props;
         const charList = people.map((character)=> (
             <View style={styles.container} key={character.url}>
             <TouchableOpacity 
               onPress={() => this.props.navigation.navigate('CharacterDetails', {character})} 
                key={character.url}
            >
                 <Text style={styles.text}>Name: {character.name}</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() =>favCharacterStore.addToFavList(character, character.url)} style={[styles.button, styles.buttonText]}>
                 <Text>Add to favs</Text>
                 </TouchableOpacity>
             </View>
         ))
              if(loading){
                  return(
                  <View>
                      <ActivityIndicator size="small" />
                  </View>
                  )
              }
              return(
                  <View style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                      <View style={styles.container}>{charList}</View>
                    </ScrollView>
                  </View> 
              )     
    }
}
export default CharacterList;