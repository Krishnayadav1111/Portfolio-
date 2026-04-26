import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { AppThemeProvider } from './theme/AppThemeProvider'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <AppThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppThemeProvider>
    </AppProvider>
  )
}

export default App
