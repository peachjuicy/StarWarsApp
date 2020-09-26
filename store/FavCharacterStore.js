import {observable, action } from 'mobx';
import {toJS} from 'mobx';
export class FavCharacterStore{

    @observable favChars = []

    @action addToFavList (character, url) {
  
        this.favChars.push(character);
        console.log("new array",toJS (this.favChars));
    }
};