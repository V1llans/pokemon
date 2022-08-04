import React, { useEffect, useState } from 'react'
import PokemonDetails from './pokemon-details'
import changePokeInfo from './change-poke-info'
import PokeCard from './poke-card'


const Overview = () => {
   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, newPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=50')

 useEffect(() => {
  const getPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
  
    // newPage(data.next)
    
    const pokemons = await Promise.all(data.results.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()
      return data;
    }));

    setAllPokemons(pokemons);
  }

  getPokemons();
 }, []) 

  return (
      <div className="app-contaner">
        <h1>PokeDex</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map( (pokemonStats, index) => 
            <div className='pokemon-card'>
              <PokeCard 
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />
            </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default Overview;