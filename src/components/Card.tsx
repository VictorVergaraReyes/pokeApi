import { useState } from 'react';
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

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
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
        </CardContent>
      </StyledCard>
      <DialogComponent
        open={openDialog}
        handleClose={handleDialogClose}
        pokemon={pokemon}
      />
    </>
  );
};

export default PokemonCard;
