import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { AppProvider } from './context/AppContext'
import { AppRouter } from './routes/AppRouter'
import { AppThemeProvider } from './theme/AppThemeProvider'

function App() {
  return (
    <AppProvider>
      <AppThemeProvider>
        <CssBaseline />
        <ErrorBoundary>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ErrorBoundary>
      </AppThemeProvider>
    </AppProvider>
  )
}

export default App
