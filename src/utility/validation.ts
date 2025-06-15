import * as Yup from 'yup';

export function getComparisonFormValidationSchema() {
  return Yup.object({
    firstSequence: Yup.string()
      .required('Заполните поле')
      .matches(
        /^[ARNDCEQGHILKMFPSTWYV-]+$/,
        'Неверный формат ввода (только символы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V и -)'
      ),
    secondSequence: Yup.string()
      .required('Заполните поле')
      .matches(
        /^[ARNDCEQGHILKMFPSTWYV-]+$/,
        'Неверный формат ввода (только символы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V и -)'
      )
      .test(
        'sequences-length-match',
        'Длина последовательностей должна быть одинаковой',
        function(value) {
          const { firstSequence } = this.parent;
          if (!firstSequence || !value) return true;
          return firstSequence.length === value.length;
        }
      ),
  });
}
