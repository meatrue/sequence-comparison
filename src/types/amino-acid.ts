export type AminoAcid =
  | 'A' | 'R' | 'N' | 'D' | 'C'
  | 'E' | 'Q' | 'G' | 'H' | 'I'
  | 'L' | 'K' | 'M' | 'F' | 'P'
  | 'S' | 'T' | 'W' | 'Y' | 'V';

export type AminoAcidColor =
  | '#FFEA00'
  | '#67E4A6'
  | '#C4C4C4'
  | '#FC9CAC'
  | '#BB99FF'
  | '#80BFFF';

export type AminoAcidColorScheme = {
  [K in AminoAcid]: AminoAcidColor;
};
