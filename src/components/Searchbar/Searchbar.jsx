import React from 'react';

import TextField from '@mui/material/TextField';

import useCharactersContext from '../../context/CharactersContext';

const Searchbar = () => {
  const { filterBySearchTerm , setSearchTerm, searchTerm} = useCharactersContext();

  const onInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (inputValue.length >= 3) {
      filterBySearchTerm(inputValue);
    }
  };
  return (
    <>
      <TextField
        label="search"
        variant="outlined"
        placeholder="By name or eye, hair color"
        id="characters-search-input"
        size="medium"
        sx={{ width: '320px' }}
        disabled={false}
        value={searchTerm}
        onChange={onInputChange}
      />
    </>
  );
};

export default Searchbar;
