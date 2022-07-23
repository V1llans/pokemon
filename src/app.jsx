

import React, { useEffect, useState } from 'react'
import Overview from './atributes/overview'
import PokemonDetails from './atributes/pokemon-details'


const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, newPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=51')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    newPage(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <Overview
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
      </div>
    </div>
  );
}

export default App;