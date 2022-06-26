import React from 'react';

import { Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import useCharactersContext from '../../context/CharactersContext';
import Characters from '../Characters/Characters';

const Home = () => {
  const { loading, characters } = useCharactersContext();
  console.log({ loading });

  return (
    <Container maxWidth="lg">
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {(!loading && characters.length)
        ? <Characters />
        : null
      }
    </Container>
  );
};

export default Home;
