
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens';
enableScreens();
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import {RootStore} from './store/RootStore';

import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();
//creating object RootStore
const rootStore = new RootStore();
import {RootStoreContext} from './store/RootStoreContext';
//export const StoreContext = React.createContext();
import HomeScreen from './screens/HomeScreen'
import CharacterList from './screens/CharacterList'
import CharacterDetails from './screens/CharacterDetails'
import FavCharacterList from './screens/FavCharacterList';

export default function App() {
  return (
    //Every Context object comes with a Provider React component 
    //that allows consuming components to subscribe to context changes.
    <RootStoreContext.Provider value={rootStore}>
    <NavigationContainer initialRouteName="HomeScreen">
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CharacterList" component={CharacterList} />
      <Stack.Screen name="FavCharacterList" component={FavCharacterList} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        </Stack.Navigator>
    </NavigationContainer>
    </RootStoreContext.Provider >
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
