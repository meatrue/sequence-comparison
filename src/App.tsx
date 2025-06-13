import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { ComparsionForm } from './components/ComparsionForm';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <ComparsionForm />
    </ThemeProvider>
  )
}

export default App
