import { Box, Typography } from '@mui/material'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  body: string
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <Box sx={{ maxWidth: 760, mb: { xs: 3.5, md: 6 } }}>
      <Typography color="primary" gutterBottom sx={{ fontWeight: 800 }}>
        {eyebrow}
      </Typography>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: 'text',
          fontSize: { xs: 34, sm: 42, md: 52 },
          lineHeight: { xs: 1.12, md: 1.08 },
          mb: 2,
          overflowWrap: 'anywhere',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.05rem' } }}>
        {body}
      </Typography>
    </Box>
  )
}
