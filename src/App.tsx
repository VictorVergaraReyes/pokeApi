// import { useState } from 'react';
import PokemonCard from './components/Card';
import './App.css';
import PokedexHeader from './components/Header';
import CardsContainer from './components/CardsContainer';

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
      <CardsContainer />
    </>
  );
}

export default App;
