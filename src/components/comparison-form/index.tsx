import { Stack, Typography, TextField, Button } from '@mui/material';

import { StyledForm, InputsContainer } from './comparison-form.styled';

export const ComparisonForm = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" component="h2">
        Введите последовательности для выравнивания
      </Typography>
      <StyledForm>
        <InputsContainer>
          <TextField
            fullWidth
            label="Первая последовательность"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Вторая последовательность"
            variant="outlined"
          />
        </InputsContainer>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            alignSelf: 'flex-start',
          }}
        >
          Выровнять
        </Button>
      </StyledForm>
    </Stack>
  );
};
