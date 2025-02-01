import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PokemonCard from './Card';
import { getPokemonList, getPokemonDetails } from '../utils/fetch';

export default function CardsContainer() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonsDetailsList, setPokemonsDetailsList] = useState([]);
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = pokemonList.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPokemonList(
          itemsPerPage * (currentPage - 1),
          itemsPerPage
        );
        setPokemonList(list);
        console.log(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchDetails = async (element) => {
      try {
        const details = await getPokemonDetails(element.name);
        const pokemonDetails = {
          id: details.id,
          name: details.name,
          image: details.sprites.other.dream_world.front_default,
          types: details.types,
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
          defense: details.stats[2].base_stat,
        };
        setPokemonsDetailsList(pokemonsDetailsList.push(pokemonDetails));
      } catch (error) {
        console.log(error);
      }
    };
    pokemonList.forEach((element) => {
      fetchDetails(element);
    });
    console.log('pokemonsDetailsList', pokemonsDetailsList);
  });

  return (
    <Box sx={{ width: 'auto', px: 2, top: '70px', position: 'relative' }}>
      <Grid container spacing={2}>
        {pokemonList.map((item) => (
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
