import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleThemeMode } from '../store/slices/themeSlice'

export function ThemeToggle() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.theme.mode)

  return (
    <Button
      color="inherit"
      onClick={() => dispatch(toggleThemeMode())}
      variant="outlined"
      sx={{ borderColor: 'divider', minWidth: 122 }}
    >
      {mode === 'dark' ? 'Light mode' : 'Dark mode'}
    </Button>
  )
}
