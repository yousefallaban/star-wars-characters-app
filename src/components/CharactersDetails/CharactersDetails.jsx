import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Paper';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import useCharactersContext from '../../context/CharactersContext';
import useFetchData from '../../Hooks/useFetchData';
import Loading from '../Loading';

const CharactersDetails = () => {
  const { charactersData } = useCharactersContext();

  let navigate = useNavigate();
  const { name } = useParams();
  const { loading, data } = useFetchData(charactersData.filter(c => c.name === name)[0]);

  if (loading && !data) return null;
  const {
    name: personName,
    gender,
    homeworld,
    films,
    birth_year: birthYear,
    hair_color: hairColor,
  } = data || {};
  return (
    <Loading loading={loading}>
      <AppBar component="nav" sx={{ background: '#0e0e0ea1'}}>
        <Toolbar  sx={{ display: 'flex', justifyContent:'space-between', maxWidth:'1224px' }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{personName[0].toUpperCase()}</Avatar>
          <Button  sx={{ m2: 4, color: '#fff' }} onClick={() => navigate('/')}>home</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ m: 2 }}>
        <Paper sx={{ mt: 12, p: 2 }} elevation={2}>
          <Typography variant="h3" component="h3">{`Name: ${personName}`}</Typography>
          <Typography variant="h3" component="h3">{`Gender: ${gender}`}</Typography>
          <Typography variant="h3" component="h3">{`Birth Date: ${birthYear}`}</Typography>
          <Typography variant="h3" component="h3">{`Hair Color: ${hairColor}`}</Typography>
          <Typography variant="h3" component="h3">{`Homeworld: ${homeworld}`}</Typography>
          <Typography variant="h3" component="h3">{`Film titles: ${films.join(', ')}`}</Typography>
        </Paper>
      </Container>
    </Loading>
  );
};

export default CharactersDetails;
