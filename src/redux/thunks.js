import pokemonsService from "../pages/pokemons.service";
import actions from "./actions";

export const loadPokemonsAsync = () => (dispatch) => {
    dispatch(actions.pokemonsLoadStart())

    pokemonsService.getAllPokemons()
        .then((response) => dispatch(actions.pokemonsloadSuccess(response.data)))
        .catch((error) => dispatch(actions.pokemonsloadError(error.message)))
}