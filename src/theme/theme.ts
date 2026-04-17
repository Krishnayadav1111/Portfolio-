import { createTheme } from '@mui/material/styles'
import type { ThemeMode } from '../store/slices/themeSlice'

export const buildTheme = (mode: ThemeMode) => {
  const isDark = mode === 'dark'

  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? '#42d9ff' : '#0b63ce', light: '#72e5ff' },
      secondary: { main: isDark ? '#ff8a3d' : '#d75b16', light: '#ffb36f' },
      background: {
        default: isDark ? '#070b12' : '#f7fafc',
        paper: isDark ? '#101820' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f7fbff' : '#101820',
        secondary: isDark ? '#a9b8c7' : '#526070',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(16, 24, 32, 0.14)',
    },
    shape: { borderRadius: 8 },
    typography: {
      fontFamily:
        'Poppins, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 800, letterSpacing: 0, lineHeight: 0.98 },
      h2: { fontWeight: 760, letterSpacing: 0, lineHeight: 1.08 },
      h3: { fontWeight: 740, letterSpacing: 0 },
      button: { fontWeight: 760, letterSpacing: 0, textTransform: 'none' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 8, boxShadow: 'none' },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 8, backgroundImage: 'none' },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: { backgroundColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(11,99,206,0.12)' },
          bar: {
            backgroundImage: `linear-gradient(90deg, ${isDark ? '#42d9ff' : '#0b63ce'}, ${
              isDark ? '#ff8a3d' : '#d75b16'
            })`,
          },
        },
      },
    },
  })
}
