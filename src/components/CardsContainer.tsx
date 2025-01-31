// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PokemonCard from './Card';

const pokemon = {
  name: 'Pikachu',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  types: ['grass'],
  hp: 45,
  attack: 49,
  defense: 49,
};

export default function CardsContainer() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <PokemonCard pokemon={pokemon}></PokemonCard>
        </Grid>
      </Grid>
    </Box>
  );
}
