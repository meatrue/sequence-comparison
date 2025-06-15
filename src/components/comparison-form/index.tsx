import { Stack, Typography, TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useMemo, useState, type ChangeEvent } from 'react';

import type { IComparisonFormFields } from '@/types/forms';
import { getComparisonFormValidationSchema } from '@/utility/validation';

import { StyledForm, InputsContainer } from './comparison-form.styled';
import { ComparisonResult } from './comparison-result';

const initialValues: IComparisonFormFields = {
  firstSequence: '',
  secondSequence: '',
};

export const ComparisonForm = () => {
  const comparisonFormValidationSchema = useMemo(() => {
    return getComparisonFormValidationSchema();
  }, []);

  const [sequences, setSequences] = useState<IComparisonFormFields | null>(null);

  const handleSubmit = (fields: IComparisonFormFields, { resetForm }: { resetForm: () => void }) => {
    setSequences(fields);
    resetForm();
  };

  const handleFieldChange = (
    fieldName: keyof IComparisonFormFields,
    setFieldValue: (field: string, value: string) => void
  ) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const uppercaseValue = event.target.value.toUpperCase();
      setFieldValue(fieldName, uppercaseValue);
    };
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
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          isValid,
          dirty
        }) => (
          <Form>
            <StyledForm>
              <InputsContainer>
                <TextField
                  fullWidth
                  name="firstSequence"
                  label="Первая последовательность"
                  variant="outlined"
                  value={values.firstSequence}
                  onChange={handleFieldChange('firstSequence', setFieldValue)}
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
                  onChange={handleFieldChange('secondSequence', setFieldValue)}
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

              {sequences && <ComparisonResult result={sequences} />}
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
