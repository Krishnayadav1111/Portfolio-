import { Box, Container, Grid, Stack, Typography, Chip, Divider } from '@mui/material'
import { SectionHeading } from '../components/SectionHeading'

const experiences = [
  {
    company: 'Techstalwarts Software Development LLP',
    location: 'Mumbai',
    role: 'Associate Software Engineer',
    period: 'Oct 2023 - Present',
    points: [
      'Led development of scalable React.js and React Native apps, achieving ~20% faster page loads via code-splitting, asset optimization, and UI tuning.',
      'Built a reusable component library and custom hooks, cutting duplicate code and engineering effort by ~25%.',
      'Implemented Redux Toolkit and RTK Query for predictable state and data fetching, simplifying API integration and improving reliability.',
      'Delivered responsive, accessible UIs with Tailwind CSS, Material UI, and shadcn/ui, aligned to design specifications.',
      'Collaborated with UI/UX designers and stakeholders across the full product lifecycle, delivering iterative solutions that improved client satisfaction by ~25%.',
      'Improved debugging speed and code quality by ~25% through structured code reviews and AI-assisted tooling.'
    ]
  },
  {
    company: 'ViralBulls',
    location: 'Noida',
    role: 'Frontend Developer',
    period: 'Nov 2022 - Oct 2023',
    points: [
      'Developed responsive SPAs in React.js using Redux Toolkit, React Router, and Hooks for predictable state and clean navigation.',
      'Refactored components and state composition to reduce prop drilling, improve reusability, and boost render performance.',
      'Created shared UI components and utilities to enforce consistency and speed up delivery across features.',
      'Integrated REST APIs and collaborated with backend and product to scope, prioritize, and ship stable features on schedule.'
    ]
  },
  {
    company: 'Romsons Group Pvt. Ltd.',
    location: 'Noida',
    role: 'Production Supervisor',
    period: 'Sep 2021 - Nov 2022',
    points: [
      'Handled production planning and control, cross-team coordination, and operational documentation to ensure smooth manufacturing workflows.'
    ]
  },
  {
    company: 'Shivani Locks Pvt. Ltd.',
    location: 'Palwal',
    role: 'GET',
    period: 'Jun 2020 - Sep 2021',
    points: [
      'Worked on production operations, quality assurance, Poka-Yoke implementation, and 4M change documentation to improve process reliability.'
    ]
  },
  {
    company: 'R.B Engineering',
    location: 'Gorakhpur, U.P',
    role: 'Trainee',
    period: 'Jul 2018 - Feb 2020',
    points: [
      'Assisted with machinery maintenance scheduling and resource allocation to ensure uninterrupted production operations.'
    ]
  }
];

const educations = [
  { institution: 'IMS ENGINEERING COLLEGE, Ghaziabad', degree: 'B.Tech - Mechanical Engineering', period: 'Aug 2014 - Oct 2018' },
  { institution: 'Lucknow Public college, Lucknow', degree: 'Class 12', period: 'Apr 2011 - May 2013' },
  { institution: 'Zenith Convent School, Gorakhpur', degree: 'Class 10', period: 'Apr 2009 - Apr 2011' }
];

const certifications = [
  'Backend Development (Node.js & Express.js): Certification from NamasteDev.com',
  'Full Stack Web Development: Certification from Unschool'
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
      <SectionHeading
        eyebrow="Background"
        title="Frontend Developer with 3.5 years of experience."
        body="I specialize in developing scalable React.js and React Native applications, focusing on architectural efficiency, component reuse, and engaging user experiences."
      />

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 800, mb: { xs: 2.5, md: 4 }, mt: 2 }}
          >
            Work Experience
          </Typography>
          <Stack spacing={{ xs: 2.5, md: 4 }}>
            {experiences.map((exp, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: { xs: 2.5, md: 4 },
                  position: 'relative'
                }}
              >
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12, sm: 8 }}>
                    <Typography variant="h5" sx={{ fontSize: { xs: 22, md: 24 }, fontWeight: 700, mb: 0.5 }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      color="secondary.light"
                      sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' }, overflowWrap: 'anywhere' }}
                    >
                      {exp.company}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Chip label={exp.period} size="small" variant="outlined" sx={{ mb: 1 }} />
                    <Typography color="text.secondary" variant="body2" sx={{ display: 'block', clear: 'both' }}>
                      {exp.location}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mb: 2, borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)' }} />
                <Stack spacing={1.5} component="ul" sx={{ pl: 2, m: 0, color: 'text.secondary' }}>
                  {exp.points.map((pt, i) => (
                    <Typography component="li" key={i} sx={{ lineHeight: 1.6 }}>
                      {pt}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: { xs: 'static', md: 'sticky' }, top: 100 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, mt: 2 }}>
              Education
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {educations.map((edu, idx) => (
                <Box key={idx}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}>
                    {edu.degree}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {edu.institution}
                  </Typography>
                  <Typography color="text.disabled" variant="caption">
                    {edu.period}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
              Certifications
            </Typography>
            <Stack spacing={2} sx={{ mb: 6 }}>
              {certifications.map((cert, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 1.5 }}>
                  <Typography color="primary">*</Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ lineHeight: 1.5 }}>
                    {cert}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
              Languages
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <Chip label="English: Professional" variant="outlined" size="small" sx={{ maxWidth: '100%' }} />
              <Chip label="Hindi: Professional" variant="outlined" size="small" sx={{ maxWidth: '100%' }} />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
