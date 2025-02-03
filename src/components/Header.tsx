import { AppBar, Toolbar, Typography, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { SelectType } from './Filter';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#ff0000',
  width: '100vw',
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
  display: 'flex',
  flexDirection: 'row',
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
        <SelectType handleChange={() => console.log('select type')} />
        <Box onClick={() => console.log('apply filter')}>
          <FilterAltIcon />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default PokedexHeader;
