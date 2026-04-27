import { Button, Container, Stack, Typography } from '@mui/material'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 }, fontWeight: 800, color: 'text.primary' }}>
              Oops, something went wrong.
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              An unexpected error occurred in the application. Please try refreshing the page or come back later.
            </Typography>
            <Button variant="contained" onClick={() => window.location.href = '/'} sx={{ mt: 2 }} size="large">
              Go to Home Page
            </Button>
          </Stack>
        </Container>
      )
    }

    return this.props.children
  }
}
