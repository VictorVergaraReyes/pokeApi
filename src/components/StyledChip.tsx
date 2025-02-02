import { Chip, styled } from '@mui/material';
import { PokemonColors } from '../utils/models';

export const StyledChip = styled(Chip)<{ pokemontype: keyof PokemonColors }>(
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
