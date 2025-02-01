import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

// Estilos personalizados para el AppBar
const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#ff0000',
  width: '100vw',
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
}));

const PokedexHeader: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  return (
    <StyledAppBar>
      <Toolbar sx={{ width: '100%', padding: 0 }}>
        {/* Título */}
        <Typography variant="h6" fontWeight="bold">
          Pokédex
        </Typography>

        {/* Campo de búsqueda */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Buscar Pokémon..."
          onChange={(e) => onSearch(e.target.value)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon />
          //     </InputAdornment>
          //   ),
          // }}
          sx={{ backgroundColor: 'white', borderRadius: 1, minWidth: 200 }}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default PokedexHeader;
