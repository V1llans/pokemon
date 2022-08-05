import initialStates from "./initialStates";
import actionTypes from "./actionTypes";

    const pokemonReducer = (state = initialStates, { type, payload }) => {
        switch(type){
            case actionTypes.POKEMONS_LOAD_START:
                return {
                    ...state,
                    isLoading: true,
                    pokemons: null,
                    errorMessage: null,
                };

            case actionTypes.POKEMONS_LOAD_SUCCESS:
                return {
                    ...state,
                    isLoading: false,   
                    pokemons: payload,
                    errorMessage: null,
                };

            case actionTypes.POKEMONS_LOAD_ERRORP:
                return {
                    ...state,
                    isLoading: false,
                    errorMessage: payload
                }

            default:
                return state
        }
    }

export default pokemonReducer;