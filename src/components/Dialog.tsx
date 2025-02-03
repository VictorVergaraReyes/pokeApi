import { useState, useEffect } from 'react';
import { Pokemon } from '../utils/models';
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Typography,
  Box,
} from '@mui/material';
import { StyledChip } from './StyledChip';
interface DialogComponentProps {
  open: boolean;
  handleClose: () => void;
  pokemon?: Pokemon;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  handleClose,
  pokemon,
}) => {
  const [types, setTypes] = useState([]);
  function extractTypes(pokemonTypes) {
    return pokemonTypes.map((typeObject) => typeObject.type.name);
  }

  useEffect(() => {
    const extractedTypes = extractTypes(pokemon?.types);
    setTypes(extractedTypes);
  }, [pokemon]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{pokemon?.name}</DialogTitle>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={pokemon?.image || '/api/placeholder/200/200'}
          alt={pokemon?.name}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre: {pokemon?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Id: {pokemon?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hp: {pokemon?.hp}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ataque:{pokemon?.attack}
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
        </CardContent>
      </Card>
    </Dialog>
  );
};
