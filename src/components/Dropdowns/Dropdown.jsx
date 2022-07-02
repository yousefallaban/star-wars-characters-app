import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import useCharactersContext from '../../context/CharactersContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Dropdown = ({ option, type }) => {
  const [filterValue, setFilterValue] = useState([]);
  const { filterByMultiKeyValues } = useCharactersContext();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const values = typeof value === 'string' ? value.split(',') : value;
    setFilterValue(values);

    filterByMultiKeyValues(`${type}_color`, values);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-multiple-checkbox-label">{`${type} color`}</InputLabel>
        <Select
          labelId={`${type}-color-multiple-checkbox-label`}
          id={`${type}-color-multiple-checkbox`}
          multiple
          value={filterValue}
          onChange={handleChange}
          input={<OutlinedInput label={`${type} color`} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {option.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filterValue.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
