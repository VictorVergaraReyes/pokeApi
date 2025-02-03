import { Backdrop, CircularProgress } from '@mui/material';

export default function Loader({ openLoader }: { openLoader: boolean }) {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={openLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
