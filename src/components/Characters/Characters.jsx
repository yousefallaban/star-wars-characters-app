import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import useCharactersContext from '../../context/CharactersContext';
import Character from './Character';

import styles from './CharactersStyles';

const Characters = () => {
  const { characters, filteredCharacters, searchTerm } = useCharactersContext();
  if (searchTerm.length >= 3 && filteredCharacters.length === 0){
    return (
      <Box sx={styles.root}>
        <h2>There are no characters to show.</h2>
      </Box>
    )
  }
  return (
    <Box sx={styles.root}>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Character
            key={`${character.name}-${character['eye_color']}`}
            name={character.name}
            hairColor={character['hair_color']}
            gender={character.gender}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
