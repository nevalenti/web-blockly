import React from 'react';
import {
  Container,
  Box,
} from '@mui/material';

export function Layout({ children }) {
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 16 }}>
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}

export default Layout;
