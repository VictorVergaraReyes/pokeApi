import { Card } from '@mui/material';

interface CardProps {
  name: string;
  id: number;
}

export const CardComponent = ({ name, id }: CardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h1>{name}</h1>
      <p>{id}</p>
    </Card>
  );
};
