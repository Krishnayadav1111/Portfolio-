import { Box, CircularProgress, Stack, Typography } from '@mui/material'

export function PageLoader() {
  return (
    <Box sx={{ minHeight: 360, display: 'grid', placeItems: 'center' }}>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <CircularProgress color="primary" />
        <Typography color="text.secondary">Preparing the next section</Typography>
      </Stack>
    </Box>
  )
}
