import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import Routes from './routes';

const App = ({ ...props }) => (
  <>
    <CssBaseline />
    <Routes {...props} />
  </>
)

export default App
