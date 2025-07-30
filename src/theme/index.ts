export * from './colors';
export * from './gradients';
export * from './spacing';
export * from './typography';

import { colors } from './colors';
import { gradients } from './gradients';
import { spacing, borderRadius } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  gradients,
  spacing,
  borderRadius,
  typography,
} as const;

export type Theme = typeof theme;
