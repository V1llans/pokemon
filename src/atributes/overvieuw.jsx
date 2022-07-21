import React, { useEffect } from "react";
import { atom, SetRecoilState, useRecoilState } from "recoil";

const pokemonState = atom({
    key: "pokemons",
    default: [],
});

function overvieuw() {
    const [pokemons, setPokemons] = useRecoilState(pokemonState);

    useEffect(() => {
        const getPokemon = async () => {
            const url = "https://pokeapi.co/api/v2/pokemon/?limit=50";
            const resp = await fetch(url);
            const body = await resp.json();
            setPokemons(body);
        };

        getPokemon();
    }, []);
            
    return <div></div>;        
}

export default overvieuw;