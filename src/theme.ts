import { createTheme } from '@mantine/core';

const bufferGreen = [
  '#f0fdf4',
  '#dcfce7',
  '#bbf7d0',
  '#86efac',
  '#4ade80',
  '#22c55e',
  '#16a34a',
  '#15803d',
  '#166534',
  '#14532d'
] as const;

const bufferDark = [
  '#f7f7f7',
  '#e3e3e3',
  '#c8c8c8',
  '#a4a4a4',
  '#818181',
  '#666666',
  '#515151',
  '#434343',
  '#2d2d2d',
  '#1a1a1a'
] as const;

export const theme = createTheme({
  primaryColor: 'buffer-green',
  colors: {
    'buffer-green': bufferGreen,
    'buffer-dark': bufferDark
  },
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  headings: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '3.5rem', lineHeight: '1.1', fontWeight: '700' },
      h2: { fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '600' },
      h3: { fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600' }
    }
  }
});
