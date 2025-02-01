import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PokemonCard from './Card';
import { getPokemonList } from '../utils/fetch';

export default function CardsContainer() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonList.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchPokemonList = async () => {
    try {
      const list = await getPokemonList(50);
      setPokemonList(list);
      console.log(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Box sx={{ width: 'auto', px: 2, paddingTop: 5 }}>
      <Grid container spacing={2}>
        {currentItems.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <PokemonCard pokemon={item}></PokemonCard>
          </Grid>
        ))}
      </Grid>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        disabled={currentPage === 7}
        onClick={() => paginate(currentPage + 1)}
      >
        Siguiente
      </button>
    </Box>
  );
}
