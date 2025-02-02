import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  styled,
} from '@mui/material';
import { DialogComponent } from './Dialog';

// Definición de tipos
import { Pokemon } from '../utils/models';
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

// const StyledChip = styled(Chip)<{ pokemontype: keyof PokemonColors }>(
//   ({ theme, pokemontype }) => {
//     const colors: PokemonColors = {
//       fire: '#fd7d24',
//       water: '#4592c4',
//       grass: '#9bcc50',
//       electric: '#eed535',
//       poison: '#b97fc9',
//       normal: '#a4acaf',
//       flying: '#3dc7ef',
//       bug: '#729f3f',
//       psychic: '#f366b9',
//       ground: '#ab9842',
//       rock: '#a38c21',
//       fighting: '#d56723',
//       ghost: '#7b62a3',
//       ice: '#51c4e7',
//       dragon: '#f16e57',
//       dark: '#707070',
//       steel: '#9eb7b8',
//       fairy: '#fdb9e9',
//     };

//     return {
//       backgroundColor: colors[pokemontype] || colors.normal,
//       color: theme.palette.common.white,
//       margin: theme.spacing(0.5),
//     };
//   }
// );

const IdChip = styled(Chip)(() => ({
  position: 'sticky',
  top: '10px',
  right: '10px',
  backgroundColor: '#eed535',
}));

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon = {
    name: '???',
    id: 0,
    image: '',
    types: [],
    hp: 0,
    attack: 0,
    defense: 0,
  },
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { name = '???', id = 0, image = '' } = pokemon;

  useEffect(() => {
    console.log('openDialog', openDialog);
  }, [openDialog]);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <StyledCard onClick={() => setOpenDialog(true)}>
      <CardMedia
        component="img"
        height="200"
        image={image || '/api/placeholder/200/200'}
        alt={name}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <IdChip label={id} size="small" />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ textTransform: 'capitalize' }}
        >
          {name}
        </Typography>
        {/* <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ textTransform: 'capitalize', position: 'absolute' }}
        >
          
        </Typography> */}

        {/* <Box
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
        </Box> */}

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

      <DialogComponent
        open={openDialog}
        handleClose={handleDialogClose}
        pokemon={pokemon}
      />
    </StyledCard>
  );
};

export default PokemonCard;
