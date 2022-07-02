import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ loading, children }) => (
  <>
    {loading
      ? (
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )
      : children
    }
  </>
);

export default Loading;
