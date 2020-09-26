import React from 'react';
import { StyleSheet, ScrollView,View, Text} from 'react-native';
import Constants from 'expo-constants';
import { RootStoreContext } from '../store/RootStoreContext';
import { observer } from 'mobx-react';
@observer
class FavCharacterList extends React.Component {

    static contextType=RootStoreContext;
    componentDidMount () {
        const {favCharacterStore} = this.context;
   }
    render(){
        const {characterStore, favCharacterStore} = this.context;
        const { favChars } = favCharacterStore;
        const favCharList = favChars.map((favCharacter) => (
              <View style={styles.container} key={favCharacter.url}>
                 <Text style={styles.text} key={favCharacter.url}>{favCharacter.name}</Text>
                 <Text>Height:{favCharacter.height}</Text>
                 <Text>Mass:{favCharacter.mass}</Text>
             </View>
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
   });
export default FavCharacterList;