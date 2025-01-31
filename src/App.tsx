// import { useState } from 'react';
import PokemonCard from './components/Card';
import './App.css';
import PokedexHeader from './components/Header';

const pokemon = {
  name: 'Pikachu',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  types: ['grass'],
};
function App() {
  return (
    <>
      <PokedexHeader onSearch={(query) => console.log(query)} />
      <PokemonCard pokemon={pokemon} />
    </>
  );
}

export default App;
