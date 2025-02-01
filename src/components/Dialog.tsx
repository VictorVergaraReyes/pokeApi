import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Pokemon } from '../utils/models';
interface DialogComponentProps {
  open: boolean;
  handleClose: () => void;
  pokemon?: Pokemon;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <DialogTitle>jajajaj</DialogTitle>
    </Dialog>
  );
};
