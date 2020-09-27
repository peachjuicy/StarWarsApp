import React from 'react';
import { StyleSheet, View, Text,  ScrollView, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Constants from 'expo-constants';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';
@observer
class FavCharacterList extends React.Component {

    static contextType=RootStoreContext;
    componentDidMount () {
        const {favCharacterStore} = this.context;
        favCharacterStore.showFavList();
        
   }
    render(){
        const {characterStore, favCharacterStore} = this.context;
        const { favChars } = favCharacterStore;
            const favCharList = favChars.map((favCharacter) => (
            <TouchableOpacity key={favCharacter.url}>
              <View style={styles.container} key={favCharacter.url}>
                 <Text style={styles.text} key={favCharacter.url}>{favCharacter.name}</Text>
             </View>
             </TouchableOpacity>
        ))
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.container}>{favCharList}</Text>
                </ScrollView>
            </View>
        )
    }
}

export default FavCharacterList;