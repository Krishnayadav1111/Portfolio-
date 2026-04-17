import { Box, Container, Grid, Typography } from '@mui/material'
import { SectionHeading } from '../components/SectionHeading'
import { ContactFormContainer } from '../containers/ContactFormContainer'

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something useful."
        body="Send a project idea, collaboration note, or role detail and I will keep the flow simple."
      />
      <Grid container spacing={{ xs: 3.5, md: 5 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.05rem' } }}>
            Share the kind of app you want to build, the stack you prefer, and any
            timeline details that matter.
          </Typography>
          <Box sx={{ borderColor: 'divider', borderTop: 1, mt: 4, pt: 3 }}>
            <Typography sx={{ fontWeight: 850 }}>Response model</Typography>
            <Typography color="text.secondary">
              React Hook Form validates the fields and RTK Query handles the submit state.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <ContactFormContainer />
        </Grid>
      </Grid>
    </Container>
  )
}
