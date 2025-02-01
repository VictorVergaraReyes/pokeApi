// import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './matherial-theme';
import './App.css';
import PokedexHeader from './components/Header';
import CardsContainer from './components/CardsContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PokedexHeader onSearch={(query) => console.log(query)} />
        <CardsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
