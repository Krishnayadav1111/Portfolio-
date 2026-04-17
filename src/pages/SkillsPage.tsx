import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { SectionHeading } from '../components/SectionHeading'
import { SkillMeter } from '../components/SkillMeter'
import { useGetSkillsQuery } from '../services/portfolioApi'

export default function SkillsPage() {
  const { data: skills = [] } = useGetSkillsQuery()
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
      <SectionHeading
        eyebrow="Tech Expertise"
        title="Frontend, backend, and tools in a scalable workflow."
        body="A practical view of the technologies I use to build, test, and deploy web applications."
      />
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid key={category} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box
              sx={{
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                height: '100%',
                p: { xs: 2.5, md: 3 },
                transition: 'transform 0.25s ease, border-color 0.25s ease',
                '&:hover': {
                  borderColor: 'primary.light',
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 850, mb: 3 }}>
                {category}
              </Typography>
              <Stack spacing={3}>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillMeter key={skill.id} skill={skill} />
                  ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
