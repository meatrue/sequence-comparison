import { Card, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';

import { ComparisonForm } from '@/components/comparison-form';
import { Layout } from '@/components/ui/layout';

import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Stack spacing={3}>
          <Typography variant="h5" component="h1">
            Визуализация выравнивания аминокислотных последовательностей
          </Typography>
          <Card sx={{ p: 5 }}>
            <ComparisonForm />
          </Card>
        </Stack>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
