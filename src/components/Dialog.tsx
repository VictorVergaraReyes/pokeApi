import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export const DialogComponent = (open, handleClose) => {
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
