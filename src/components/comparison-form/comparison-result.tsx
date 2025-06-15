import { Typography, Box } from '@mui/material';

import type { AminoAcid, AminoAcidColor } from '@/types/amino-acid';
import type { IComparisonFormFields } from '@/types/forms';
import { getAminoAcidColor, isValidAminoAcid } from '@/utility/amino-acid';

import type { FC } from 'react';

interface IAminoAcidCellProps {
  name: AminoAcid | '-';
  color: AminoAcidColor | null;
}

export const AminoAcidCell: FC<IAminoAcidCellProps> = ({ name, color }) => {
  return (
    <Box
      component="span"
      sx={{
        backgroundColor: color ?? 'transparent',
        display: 'inline-block',
        p: 1,
        // borderRadius: 0.5
      }}
    >
      {name}
    </Box>
  );
};

interface IComparisonResultProps {
  result: IComparisonFormFields;
}

export const ComparisonResult: FC<IComparisonResultProps> = ({ result }) => {
  const { firstSequence, secondSequence } = result;

  return (
    <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
      Результат выравнивания:
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        lineHeight: 1.5,
      }}>
        <Box component="div">
          {firstSequence.split('').map((char, index) => (
            <AminoAcidCell
              key={index}
              name={isValidAminoAcid(char) ? char : '-'}
              color={getAminoAcidColor(char)}
            />
          ))}
        </Box>

        <Box component="div">
          {secondSequence.split('').map((char, index) => (
            <AminoAcidCell
              key={index}
              name={isValidAminoAcid(char) ? char : '-'}
              color={
                char !== firstSequence[index] ? getAminoAcidColor(char) : null
              }
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
