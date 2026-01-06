import {createTheme} from '@mantine/core';

const bufferGreen = [
  'hsl(105 68% 89%)',
  'hsl(105 67% 82%)',
  'hsl(105 68% 77%)',
  'hsl(106 67% 71%)',
  'hsl(106 60% 66%)',
  'hsl(105 51% 56%)',
  'hsl(105 53% 45%)',
  'hsl(105 54% 35%)',
  'hsl(109 46% 25%)',
  'hsl(176 20% 16%)'
] as const;

const bufferDark = [
  'hsl(0 0% 97%)',
  'hsl(0 0% 89%)',
  'hsl(0 0% 78%)',
  'hsl(0 0% 64%)',
  'hsl(0 0% 51%)',
  'hsl(0 0% 40%)',
  'hsl(0 0% 32%)',
  'hsl(0 0% 26%)',
  'hsl(0 0% 18%)',
  'hsl(0 0% 10%)'
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
      h3: { fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600' },
    }
  },
  lineHeights: {
    md: "1.7rem"
  },
  components: {
    Text: {
      defaultProps: {
        c: 'buffer-dark.9'
      }
    },
    Anchor: {
      defaultProps: {
        c: 'buffer-green.6', // Override Text's default color for Anchors
      },
    },
  }
  // variantColorResolver: {
  //   colors: {
  //     undefined
  //   }
  // }
});
