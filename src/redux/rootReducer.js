import pokemonReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = () => 
    combineReducers({
        pokemons: pokemonReducer
    })

export default rootReducer;