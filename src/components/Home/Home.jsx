import React from 'react';

import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import useCharactersContext from '../../context/CharactersContext';
import { mapData } from '../../utils/data-utils';
import Characters from '../Characters/Characters';
import Dropdowns from '../Dropdowns/Dropdowns';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
  const { loading, charactersData } = useCharactersContext();

  return (
    <Container maxWidth="lg" sx={{ padding: '12px' }}>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {(!loading)
        ? (
          <>
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
          </>
        )
        : null
      }
    </Container>
  );
};

export default Home;
