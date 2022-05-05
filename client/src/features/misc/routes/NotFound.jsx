import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

export function NotFound() {
  const location = useLocation();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <Typography variant="h5">
            <code>
              {location.pathname}
            </code>
            {' '}
            <br />
            404 - Not Found.
            <br />
            This page is missing.
          </Typography>
        </Grid>

      </Grid>
    </div>
  );
}

export default NotFound;
