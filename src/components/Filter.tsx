import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { pokemonTypes } from '../utils/models';
interface SelectProps {
  handleChange: () => void;
}

export const SelectType: React.FC<SelectProps> = ({ handleChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: 'white', mx: 2 }}>
      <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Tipo"
        onChange={handleChange}
      >
        {pokemonTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
