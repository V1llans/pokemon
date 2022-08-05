import React, { useEffect, useState } from 'react'
import PokeCard from './poke-card'
import { useSelector, useDispatch } from 'react-redux'
import { loadPokemonsAsync } from '../redux/thunks'

const Overview = () => {
  const dispatch = useDispatch()
  const {isLoading, pokemons, errorMessage} = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(loadPokemonsAsync())
  }, [])

  return (
      <div className="app-container">
          <h1>PokeDex</h1>
          <div className="pokemon-container">
            <div className="all-container">
            {isLoading && <h3>loading...</h3>}
            {errorMessage && <h3>{errorMessage}</h3>}
            {pokemons?.results && pokemons.results.map((pokemon) =>
              <div className='pokemon-card'>
                <PokeCard 
                  key={pokemon.index}
                  id={pokemon.id}
                  // image={pokemon.sprites.other.dream_world.front_default}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                />
              </div>
              )}
            </div>
          </div>
      </div>
  );
}

export default Overview;