import apiClient from "../helper/apiClient";

class UserService {
    getAllPokemons = () => apiClient().get('pokemons')
}

export default new UserService;