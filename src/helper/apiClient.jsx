import axios from "axios";

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=50',
        responseType: "json",
    })

    return axiosInstance
}

export default apiClient