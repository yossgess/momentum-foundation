export const colors = {
  primary: {
    main: '#A8FF35',
    dark: '#88E000',
    light: '#C4FF6B',
    50: '#F5FFE8',
    100: '#E8FFD1',
    200: '#D4FFA3',
    300: '#C4FF6B',
    400: '#B6FF50',
    500: '#A8FF35',
    600: '#88E000',
    700: '#6BC200',
    800: '#4F9100',
    900: '#336000',
  },

  secondary: {
    main: '#246BFD',
    dark: '#1541A1',
    light: '#5B8BFF',
    50: '#EBF3FF',
    100: '#D6E7FF',
    200: '#ADCFFF',
    300: '#85B7FF',
    400: '#5B8BFF',
    500: '#246BFD',
    600: '#1541A1',
    700: '#0F2E7A',
    800: '#0A1F54',
    900: '#05102D',
  },

  accent: {
    main: '#43C0F6',
    light: '#6BCCF7',
    dark: '#2BA8E0',
  },

  background: {
    primary: '#0B0D10',
    secondary: '#1C1E22',
    tertiary: '#2A2D33',
  },

  surface: {
    primary: '#1C1E22',
    secondary: '#2A2D33',
    tertiary: '#3A3D44',
  },

  text: {
    primary: '#FFFFFF',
    secondary: '#A4A6AC',
    tertiary: '#6B6E75',
    inverse: '#0B0D10',
  },

  border: {
    primary: '#2A2D33',
    secondary: '#3A3D44',
    tertiary: '#4A4D54',
  },

  status: {
    success: '#00C853',
    warning: '#FF9100',
    error: '#FF3D3D',
    info: '#43C0F6',
  },

  overlay: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    dark: 'rgba(0, 0, 0, 0.5)',
    darker: 'rgba(0, 0, 0, 0.8)',
  },

  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.2)',
    dark: 'rgba(0, 0, 0, 0.4)',
  },
} as const;

export type ColorPalette = typeof colors;
