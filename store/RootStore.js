import { CharacterStore } from "./CharacterStore"
import { FavCharacterStore } from "./FavCharacterStore"

//main store which holds multiple stores
//it instatiates all stores 
export class RootStore {
    constructor() {
        this.characterStore = new CharacterStore(this)
        this.favCharacterStore = new FavCharacterStore(this)
    }
}