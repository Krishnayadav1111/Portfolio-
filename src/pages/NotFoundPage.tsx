import { Button, Container, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 } }}>
          This route does not exist.
        </Typography>
        <Typography color="text.secondary">
          The rest of the portfolio is still right where it should be.
        </Typography>
        <Button component={NavLink} to="/" variant="contained" sx={{ alignSelf: 'flex-start' }}>
          Back home
        </Button>
      </Stack>
    </Container>
  )
}
