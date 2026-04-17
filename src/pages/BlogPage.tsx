import { Box, Container, Stack, Typography } from '@mui/material'
import { SectionHeading } from '../components/SectionHeading'
import { systemDesignNotes } from '../utils/interviewQuestions'

export default function BlogPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
      <SectionHeading
        eyebrow="Notes"
        title="Concise engineering notes for portfolio walkthroughs."
        body="These entries keep the page practical: short enough to scan, specific enough to support deeper interview questions."
      />
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        {systemDesignNotes.map((note) => (
          <Box
            key={note.question}
            sx={{ borderColor: 'primary.main', borderLeft: 3, pl: { xs: 2, md: 3 } }}
          >
            <Typography variant="h5" sx={{ fontSize: { xs: 21, md: 24 }, fontWeight: 850 }}>
              {note.question}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {note.answer}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}
