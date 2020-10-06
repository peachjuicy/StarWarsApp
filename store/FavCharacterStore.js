import {observable, action } from 'mobx';
import {toJS} from 'mobx';
import { AsyncStorage, Alert } from 'react-native';

//store for favorite characters
export class FavCharacterStore{
//observable empty array at the beginning
    @observable favChars = []
    //async storage function to set data to storage (Button OnPress)
    @action async addToFavList (character) {
        try {   
            //AsyncStorage.clear();
           //loop to check if a favorite character is already added
            const id=character.url;
            for (let i=0; i<this.favChars.length; i++)
            {
                const charItem=this.favChars[i];
                //console.log("CharItem",charItem)
                if(charItem.url===id)
                {
                    return
                }
            }
                this.favChars.replace([ ...this.favChars, character]);
                //console.log("FavListArray",toJS (this.favChars));
                //async storage accpets only strings
                await AsyncStorage.setItem('favChars', JSON.stringify(this.favChars))
        }
        catch (error) {
            console.log ("Async storage not working")
        }
    }

    //async storage function to getdata from storage (componentDidMount)
    @action async readFavsFromStorage (character) {
        try {
            const shownFavChars = await AsyncStorage.getItem('favChars');
            //converting data froms tring format back to original type, JS object
            //replacing the people array with data from api
            //replace() is used to replace all existing items in array with new ones (similar to setState)
                const favChars = JSON.parse(shownFavChars);
                this.favChars.replace(favChars);
                //console.log("FavList is", toJS(this.favChars));
        }catch(error) {
            console.log ("Async storage didn't store data")
        }
    }
};