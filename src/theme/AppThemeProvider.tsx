import { ThemeProvider } from '@mui/material/styles'
import type { PropsWithChildren } from 'react'
import { useAppSelector } from '../store/hooks'
import { buildTheme } from './theme'

export function AppThemeProvider({ children }: PropsWithChildren) {
  const mode = useAppSelector((state) => state.theme.mode)

  return <ThemeProvider theme={buildTheme(mode)}>{children}</ThemeProvider>
}
