import React, { useContext } from 'react';
import styles from './style';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';



@observer
class FavCharacterList extends React.Component {
    //The contextType property on a class can be assigned a Context object created by React.createContext().
    //This lets you consume the nearest current value of that Context type using this.context. 
    //You can reference this in any of the lifecycle methods including the render function.
 static contextType=RootStoreContext;
    componentDidMount(){
         //reference to the favCharacterStore store, it's state and methods
        const {favCharacterStore} = this.context;
        favCharacterStore.readFavsFromStorage();
        }
    render(){
        //reference to the character store & favCharacterStore, it's state and methods
        const {characterStore, favCharacterStore} = this.context;
        const { loading } = characterStore;
        const { favChars } = favCharacterStore;
        const favCharList = favChars.map((favCharacter) => (
            <View style={styles.container} key={favCharacter.url}>
                 <Text style={styles.text}>Name:{favCharacter.name}</Text>
             </View>
        ))
        if(loading){
            return(
            <View>
                <ActivityIndicator size="small" />
            </View>
            )}
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                {favCharList}
                </ScrollView>
            </View>
        )
    }
}

export default FavCharacterList;