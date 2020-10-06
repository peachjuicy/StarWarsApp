import {observable, action,toJS } from 'mobx';
import { AsyncStorage, Alert } from 'react-native';

//store for characters and api call 
 export class CharacterStore {
     //observable empty array at the beginning
    @observable people = []
   //@observable loading property which is false at the beginning 
    @observable loading = false
    //action to modify the state. It immutably replaces an empty people array at the beginning with a new one (characters from api call)
    //actions are used only on function which modify state and only on functions which are currently running
    //which is why we need the async/await keywords so the code doesn't execute without waiting for the fetch to complete
    @action
        async load () {
        if (this.people.length){
            return 
        }
        this.loading=true;
        try {
            //getting thedata from api 
            const swApiCall = await fetch('https://swapi.dev/api/people/');
            const swchar = await swApiCall.json();  
            //console.log("Chars are", swchar)
            //replacing the people array with data from api
            //replace() is used to replace all existing items in array with new ones (similar to setState)
            this.people.replace(swchar.results);
            this.loading = false;
        }catch (error) {
            Alert.alert("Something went wrong!");
            this.loading = false;
        }
    }   
}

