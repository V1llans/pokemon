import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const pokemonState = atom({
    key: "pokemons",
    default: [],
});

function Overview() {
    const [pokemons, setPokemons] = useRecoilState(pokemonState);

    useEffect(() => {
        const getPokemon = async () => {
            const url = "https://pokeapi.co/api/v2/pokemon/?limit=51";
            const resp = await fetch(url);
            const body = await resp.json();
            setPokemons(body.results);
        };

        getPokemon();
    }, []);
            
    return pokemons.map((pokemon) =>
        <div key={pokemon.id}>
            <p>{pokemon.name}</p>
        </div>
    )
  
}

export default Overview;