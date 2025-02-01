import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  styled,
} from '@mui/material';

// Definición de tipos
type PokemonType =
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'poison'
  | 'normal'
  | 'flying'
  | 'bug'
  | 'psychic'
  | 'ground'
  | 'rock'
  | 'fighting'
  | 'ghost'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

interface Pokemon {
  name: string;
  id: number;
  image?: string;
  types?: PokemonType[];
  hp?: number;
  attack?: number;
  defense?: number;
}

interface PokemonCardProps {
  pokemon?: Pokemon;
}

// Estilos personalizados
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  minWidth: '253px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

interface PokemonColors {
  fire: string;
  water: string;
  grass: string;
  electric: string;
  poison: string;
  normal: string;
  flying: string;
  bug: string;
  psychic: string;
  ground: string;
  rock: string;
  fighting: string;
  ghost: string;
  ice: string;
  dragon: string;
  dark: string;
  steel: string;
  fairy: string;
}

const StyledChip = styled(Chip)<{ pokemontype: keyof PokemonColors }>(
  ({ theme, pokemontype }) => {
    const colors: PokemonColors = {
      fire: '#fd7d24',
      water: '#4592c4',
      grass: '#9bcc50',
      electric: '#eed535',
      poison: '#b97fc9',
      normal: '#a4acaf',
      flying: '#3dc7ef',
      bug: '#729f3f',
      psychic: '#f366b9',
      ground: '#ab9842',
      rock: '#a38c21',
      fighting: '#d56723',
      ghost: '#7b62a3',
      ice: '#51c4e7',
      dragon: '#f16e57',
      dark: '#707070',
      steel: '#9eb7b8',
      fairy: '#fdb9e9',
    };

    return {
      backgroundColor: colors[pokemontype] || colors.normal,
      color: theme.palette.common.white,
      margin: theme.spacing(0.5),
    };
  }
);

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon = {
    name: '???',
    image: '',
    types: [],
    hp: 0,
    attack: 0,
    defense: 0,
  },
}) => {
  const {
    name = '???',
    image = '',
    types = [],
    hp = 0,
    attack = 0,
    defense = 0,
  } = pokemon;

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={image || '/api/placeholder/200/200'}
        alt={name}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ textTransform: 'capitalize' }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 2,
          }}
        >
          {types.length > 0 ? (
            types.map((type) => (
              <StyledChip
                key={type}
                label={type}
                pokemontype={type}
                size="small"
              />
            ))
          ) : (
            <StyledChip label="Unknown" pokemontype="normal" size="small" />
          )}
        </Box>

        {/* <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">
              HP:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{hp}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">
              Ataque:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{attack}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="text.secondary" variant="body2">
              Defensa:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{defense}</Typography>
          </Grid>
        </Grid> */}
      </CardContent>
    </StyledCard>
  );
};

export default PokemonCard;
