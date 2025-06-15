import { Stack, Typography, TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useMemo } from 'react';

import type { IComparisonFormFields } from '@/types/forms';
import { getComparisonFormValidationSchema } from '@/utility/validation';

import { StyledForm, InputsContainer } from './comparison-form.styled';

const initialValues: IComparisonFormFields = {
  firstSequence: '',
  secondSequence: '',
};

export const ComparisonForm = () => {
  const comparisonFormValidationSchema = useMemo(() => {
    return getComparisonFormValidationSchema();
  }, []);

  const handleSubmit = (fields: IComparisonFormFields) => {

  };

  return (
    <Stack spacing={3}>
      <Typography variant="h6" component="h2">
        Введите последовательности для выравнивания
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={comparisonFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
          <Form>
            <StyledForm>
              <InputsContainer>
                <TextField
                  fullWidth
                  name="firstSequence"
                  label="Первая последовательность"
                  variant="outlined"
                  value={values.firstSequence}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstSequence && Boolean(errors.firstSequence)}
                  helperText={touched.firstSequence && errors.firstSequence}
                  placeholder="Введите последовательность"
                />
                <TextField
                  fullWidth
                  name="secondSequence"
                  label="Вторая последовательность"
                  variant="outlined"
                  value={values.secondSequence}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.secondSequence && Boolean(errors.secondSequence)}
                  helperText={touched.secondSequence && errors.secondSequence}
                  placeholder="Введите последовательность"
                />
              </InputsContainer>

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={!isValid || !dirty}
                sx={{
                  alignSelf: 'flex-start',
                }}
              >
                Выровнять
              </Button>
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
