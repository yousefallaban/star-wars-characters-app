import React from 'react';

import { Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import useCharactersContext from '../../context/CharactersContext';
import Characters from '../Characters/Characters';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
  const { loading, characters } = useCharactersContext();

  return (
    <Container maxWidth="lg" sx={{ padding: '12px'}}>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {(!loading)
        ? (
          <>
            <Searchbar />
            <Characters />
          </>
        )
        : null
      }
    </Container>
  );
};

export default Home;
