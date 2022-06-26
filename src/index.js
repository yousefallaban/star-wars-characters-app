import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress'

import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <Suspense
    fallback={
      <CircularProgress variant="indeterminate" size={70} thickness={5} />
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)
