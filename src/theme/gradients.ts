import { colors } from './colors';

export const gradients = {
  primary: [colors.primary.main, colors.primary.dark],
  secondary: [colors.secondary.main, colors.secondary.dark],
  accent: [colors.accent.main, colors.accent.dark],
  
  background: {
    main: [colors.background.primary, colors.background.secondary],
    overlay: ['rgba(11, 13, 16, 0.8)', 'rgba(28, 30, 34, 0.9)'],
  },

  surface: {
    card: [colors.surface.primary, colors.surface.secondary],
    elevated: [colors.surface.secondary, colors.surface.tertiary],
  },

  status: {
    success: [colors.status.success, '#00A843'],
    warning: [colors.status.warning, '#E67C00'],
    error: [colors.status.error, '#E62D2D'],
  },

  cta: {
    primary: [colors.primary.main, colors.primary.dark],
    secondary: [colors.secondary.main, colors.secondary.dark],
    accent: [colors.accent.main, colors.accent.dark],
  },
} as const;

export type GradientPalette = typeof gradients;
