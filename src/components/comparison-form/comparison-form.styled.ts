import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const InputsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  '& > *': {
    flex: '1 1 300px',
    minWidth: '300px',
  },
}));
