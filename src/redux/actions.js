import actionTypes from "./actionTypes"

const pokemonsLoadStart = () => ({
    type: actionTypes.POKEMONS_LOAD_START
})

const pokemonsloadSuccess = (pokemons) => ({
    type: actionTypes.POKEMONS_LOAD_SUCCESS,
    payload: pokemons
})

const pokemonsloadError = (errorMessage) => ({
    type: actionTypes.POKEMONS_LOAD_ERRORP,
    payload: errorMessage
})

export default {
    pokemonsLoadStart,
    pokemonsloadSuccess,
    pokemonsloadError
}