import React from 'react';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import useCharactersContext from '../../context/CharactersContext';
import { mapData } from '../../utils/data-utils';
import Characters from '../Characters/Characters';
import Dropdowns from '../Dropdowns/Dropdowns';
import Loading from '../Loading';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
  const { loading, charactersData } = useCharactersContext();

  return (
    <Container maxWidth="lg" sx={{ m: 2 }}>
      <Loading loading={loading}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <Searchbar />
          <Dropdowns data={mapData(charactersData)} />
        </Box>
        <Characters />
      </Loading>
    </Container>
  );
};

export default Home;
