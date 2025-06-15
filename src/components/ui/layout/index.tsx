import { Container, Stack } from '@mui/material';

import type { ReactNode } from 'react';


export const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <Stack direction={'column'} sx={{
      minHeight: '100vh',
    }}>
      <Container maxWidth={false} sx={{
        minWidth: 360,
        direction: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        py: 10
      }}>
        {children}
      </Container>
    </Stack>
  );
};
