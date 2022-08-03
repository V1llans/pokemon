import React, { useEffect, useState } from 'react'

const PokemonDetails= () => {
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

  return(
    <div className="app-contaner">
        <h1>PokeDex</h1>
        <div>

        </div>
    </div>
  )

}


export default PokemonDetails;