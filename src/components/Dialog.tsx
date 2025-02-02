import { Pokemon } from '../utils/models';
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Typography,
} from '@mui/material';
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
        </CardContent>
      </Card>
    </Dialog>
  );
};
