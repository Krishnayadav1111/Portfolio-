import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import krishnaMernPdf from '../assets/Krishna_mern.pdf'
import { SkillMeter } from '../components/SkillMeter'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsContainer } from '../containers/ProjectsContainer'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useGetSignalsQuery, useGetSkillsQuery } from '../services/portfolioApi'

const heroTags = ['React.js 19.2', 'React Native', 'TypeScript', 'Node.js']


export default function HomePage() {
  const { data: signals = [] } = useGetSignalsQuery()
  const { data: skills = [] } = useGetSkillsQuery()
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  })
  const featuredSkills = skills.slice(0, 6)

  return (
    <>
      <Box
        component="section"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: '#071018',
          backgroundImage: {
            xs: `linear-gradient(90deg, rgba(4, 8, 13, 0.94) 0%, rgba(4, 8, 13, 0.86) 100%), url(${heroImg})`,
            md: `linear-gradient(90deg, rgba(4, 8, 13, 0.9) 0%, rgba(4, 8, 13, 0.76) 45%, rgba(4, 8, 13, 0.34) 100%), url(${heroImg})`,
          },
          backgroundPosition: { xs: 'center', md: 'center right' },
          backgroundSize: 'cover',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          minHeight: { xs: 520, sm: 560, md: 620 },
          py: { xs: 7, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={3} sx={{ maxWidth: 840 }}>
                <Typography
                  sx={{
                    color: 'primary.light',
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 800,
                  }}
                >
                  Welcome to my portfolio!
                </Typography>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    color: '#fff',
                    fontSize: { xs: 36, sm: 52, md: 72 },
                    lineHeight: 1.08,
                    maxWidth: 860,
                    overflowWrap: 'anywhere',
                  }}
                >
                  Empowering your{' '}
                  <Box component="span" sx={{ color: 'secondary.main' }}>
                    Vision
                  </Box>{' '}
                  with custom software solutions.
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.88)',
                    fontSize: { xs: '1rem', md: '1.12rem' },
                    maxWidth: 720,
                  }}
                >
                  Frontend developer building scalable React.js and React Native apps with reusable components, predictable state, and fast user experiences.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                  {heroTags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        color: '#fff',
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    onClick={() => window.open(krishnaMernPdf, '_blank')}
                    size="large"
                    variant="contained"
                  >
                    Download CV
                  </Button>
                  <Button
                    component={NavLink}
                    size="large"
                    sx={{
                      borderColor: 'primary.main',
                      color: '#fff',
                      '&:hover': {
                        borderColor: 'primary.light',
                        bgcolor: 'rgba(66,217,255,0.12)',
                      },
                    }}
                    to="/projects"
                    variant="outlined"
                  >
                    See my work -&gt;
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
        <Grid container spacing={2} sx={{ mb: { xs: 6, md: 8 } }}>
          {signals.map((signal) => (
            <Grid key={signal.id} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 2,
                  height: '100%',
                  p: 3,
                }}
              >
                <Typography variant="h3" sx={{ fontSize: { xs: 32, md: 40 } }}>
                  {signal.value}
                </Typography>
                <Typography color="text.secondary">{signal.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ alignItems: 'center', mb: { xs: 7, md: 10 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeading
              eyebrow="About"
              title="Focused on performance and reusability."
              body="The goal is simple: build web apps that are scalable, accessible, and fast, leveraging modern styling and component-level optimizations."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography color="text.secondary" sx={{ fontSize: '1.05rem', mb: 3 }}>
                With a focus on component-based architecture and Redux Toolkit for state management, I deliver responsive interfaces wrapped in engaging UX. I collaborate with cross-functional teams to integrate APIs smoothly and ship iterative solutions that improve client satisfaction. 
              </Typography>
              <Button component={NavLink} to="/about" variant="outlined">
                More About Me
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mb: { xs: 7, md: 10 } }}>
          <SectionHeading
            eyebrow="Skill Proficiency"
            title="Frontend skills with build-ready confidence."
            body="A quick scan of the core technologies frameworks, and tools used across my professional experience."
          />
          <Box
            sx={{
              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              p: { xs: 3, md: 4 },
            }}
          >
            <Grid container spacing={3}>
              {featuredSkills.map((skill) => (
                <Grid key={skill.id} size={{ xs: 12, md: 6 }}>
                  <SkillMeter skill={skill} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box ref={ref}>
          <motion.div animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 24 }}>
            <SectionHeading
              eyebrow="Projects"
              title="Selected builds from the stack."
              body="Project cards highlight the app idea, stack, and engineering focus without making the page hard to scan."
            />
          </motion.div>
        </Box>
        <ProjectsContainer featuredOnly />
      </Container>
    </>
  )
}
