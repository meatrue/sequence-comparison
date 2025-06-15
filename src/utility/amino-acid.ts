import { type AminoAcid, type AminoAcidColor } from '@/types/amino-acid';
import { aminoAcidColorScheme } from '@/utility/constants';

export const isValidAminoAcid = (char: string): char is AminoAcid => {
  const validAminoAcids: AminoAcid[] = [
    'A', 'R', 'N', 'D', 'C', 'E', 'Q', 'G', 'H', 'I',
    'L', 'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V'
  ];
  return validAminoAcids.includes(char as AminoAcid);
};

export const getAminoAcidColor = (char: string): AminoAcidColor | null => {
  if (isValidAminoAcid(char)) {
    return aminoAcidColorScheme[char];
  }
  return null;
};
