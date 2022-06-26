import React from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import styles from './CharacterStyles';

const Character = ({ name, hairColor, gender }) => {
  let navigate = useNavigate();

  return (
    <Grid item onClick={() => navigate(`/character/${name}`)}>
      <Paper sx={styles.root}>
        <h3><strong>Name:</strong> {name}</h3>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Hair Color:</strong> {hairColor}</p>
      </Paper>
    </Grid>
  );
};

export default Character;
