import { Box, Button, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import type { Project } from '../services/portfolioApi'

type ProjectCardProps = {
  project: Project
  onViewProject: () => void
}

export function ProjectCard({ onViewProject, project }: ProjectCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: '#09111f',
        borderColor: 'rgba(66, 153, 255, 0.35)',
        borderRadius: 2,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: { xs: 410, sm: 450, lg: 434 },
        overflow: 'hidden',
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-6px)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={`${project.title} project preview`}
        sx={{
          aspectRatio: { xs: '16 / 7', sm: '16 / 6', lg: '16 / 5' },
          bgcolor: '#050a13',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          objectFit: 'contain',
          width: '100%',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Stack spacing={2.25} sx={{ flex: 1 }}>
          <Typography component="h3" variant="h5" sx={{ fontWeight: 800 }}>
            {project.title}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(226, 236, 250, 0.78)',
              minHeight: { xs: 'auto', sm: 116, lg: 100 },
            }}
          >
            {project.summary}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignContent: 'flex-start',
              flexWrap: 'wrap',
              minHeight: { xs: 44, sm: 76, lg: 68 },
            }}
            useFlexGap
          >
            {project.stack.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.07)',
                  color: '#fff',
                  fontWeight: 700,
                }}
              />
            ))}
          </Stack>
          <Box sx={{ mt: 'auto' }}>
            <Button
              fullWidth
              onClick={onViewProject}
              size="large"
              sx={{ maxWidth: { sm: 180 } }}
              variant="contained"
            >
              View Project
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
