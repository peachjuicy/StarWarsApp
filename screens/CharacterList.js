import React, { useContext } from 'react';
import { StyleSheet, View, Text,  ScrollView, ActivityIndicator,SafeAreaView, TouchableOpacity, Button, Alert} from 'react-native';
import Constants from 'expo-constants';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';



@observer
class CharacterList extends React.Component {
  
  static contextType=RootStoreContext;
    
    componentDidMount () {
        //render data on load()
        const {characterStore} = this.context;
        characterStore.load();
   }
   
   render() {
      
       const {characterStore, favCharacterStore} = this.context;
   
         const { people, loading } = characterStore;
      
         const { navigation } = this.props;
         const charList = people.map((character)=> (
             <TouchableOpacity 
               onPress={() => this.props.navigation.navigate('CharacterDetails', {character})} 
               key={character.url} 
            >
             <View  style={styles.container}  >
                 <Text style={styles.text} >Name: {character.name}</Text>
                 <Text>Height: {character.height}</Text>
                 <Text>Mass: {character.mass}</Text>
                 <Button onPress={() =>favCharacterStore.addToFavList(character, character.url)} style={styles.button} title="Add to favs"></Button>
             </View>
             </TouchableOpacity>
            
         ))
       if (loading) {
           return (
           <View>
               <ActivityIndicator size="small" />
              
           </View>)
       }
        return (
             <View style={styles.container}>
               <ScrollView style={styles.scrollView}>
                 <View style={styles.container}>{charList}</View>
               </ScrollView>
            </View> 
        )
       
             
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent:'space-around'
    },
    text: {
        color: '#fff',
       
       
     }, 
     scrollView: {
        backgroundColor: 'pink',
        
      },
      button: {
        width: 50
      },
   });
   
export default CharacterList;