import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PokemonCard from './Card';
import { getPokemonList, getPokemonDetails } from '../utils/fetch';
import { Button } from '@mui/material';
import { Pokemon } from '../utils/models';
import Loader from './Loader';

type PokeList = Pokemon[] | [];

export default function CardsContainer() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonsDetailsList, setPokemonsDetailsList] = useState<PokeList>([]);
  const [isOpenLoader, setIsOpenLoader] = useState(false);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPokemonList(
          itemsPerPage * (currentPage - 1),
          itemsPerPage
        );
        setPokemonList(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setIsOpenLoader(true);

    const fetchDetails = async (element: Pokemon) => {
      try {
        const details = await getPokemonDetails(element.name);
        return {
          id: details.id,
          name: details.name,
          image: details.sprites.other.dream_world.front_default,
          types: details.types,
          hp: details.stats[0].base_stat,
          attack: details.stats[1].base_stat,
          defense: details.stats[2].base_stat,
        };
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    const fetchAllPokemon = async () => {
      try {
        const promises = pokemonList.map((pokemon) => fetchDetails(pokemon));
        const results = await Promise.all(promises);
        const validResults = results.filter(
          (result) => result !== null
        ) as Pokemon[];
        setPokemonsDetailsList(validResults);
      } catch (error) {
        console.log(error);
      } finally {
        setIsOpenLoader(false);
      }
    };

    fetchAllPokemon();
    return () => {
      setIsOpenLoader(false);
    };
  }, [pokemonList]);

  return (
    <Box sx={{ width: 'auto', px: 2, top: '70px', position: 'relative' }}>
      <Grid container spacing={2}>
        {pokemonsDetailsList.length > 0 &&
          pokemonsDetailsList.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <PokemonCard pokemon={item}></PokemonCard>
            </Grid>
          ))}
      </Grid>
      <Box
        style={{
          marginTop: '10px',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          sx={{ paddingRight: 2 }}
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          disabled={currentPage === 7}
          onClick={() => paginate(currentPage + 1)}
          sx={{ paddingLeft: 2 }}
        >
          Siguiente
        </Button>
      </Box>
      <Loader openLoader={isOpenLoader} />
    </Box>
  );
}
