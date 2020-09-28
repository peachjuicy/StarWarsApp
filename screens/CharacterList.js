import React, { useContext } from 'react';
import styles from './style';
import { StyleSheet, View, Text,  ScrollView, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import Constants from 'expo-constants';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';



@observer
class CharacterList extends React.Component {
  static contextType=RootStoreContext;
    componentDidMount(){
        //render data on load()
        const {characterStore} = this.context;
        characterStore.load();
   }
   render(){
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
                 <Text style={styles.text}>Height: {character.height}</Text>
                 <Text style={styles.text}>Mass: {character.mass}</Text>
                 <Button onPress={() =>favCharacterStore.addToFavList(character, character.url)} color='#FFE81F' title="Add to favs">
                 </Button>
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