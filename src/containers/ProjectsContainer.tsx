import { Alert, Grid, Snackbar } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { useDebounce } from '../hooks/useDebounce'
import { useGetProjectsQuery } from '../services/portfolioApi'

type ProjectsContainerProps = {
  searchTerm?: string
  featuredOnly?: boolean
}

export function ProjectsContainer({
  featuredOnly = false,
  searchTerm = '',
}: ProjectsContainerProps) {
  const { data: projects = [], error, isLoading } = useGetProjectsQuery()
  const [isToastOpen, setIsToastOpen] = useState(false)
  const debouncedSearch = useDebounce(searchTerm.trim().toLowerCase())

  const visibleProjects = projects.filter((project) => {
    const matchesSearch =
      !debouncedSearch ||
      project.title.toLowerCase().includes(debouncedSearch) ||
      project.stack.some((item) => item.toLowerCase().includes(debouncedSearch))

    return matchesSearch && (!featuredOnly || project.featured)
  })

  if (error) {
    return <Alert severity="error">Projects could not be loaded.</Alert>
  }

  if (isLoading) {
    return <Alert severity="info">Loading project cache...</Alert>
  }

  return (
    <>
      <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
        {visibleProjects.map((project, index) => (
          <Grid
            key={project.id}
            size={{ xs: 12, sm: 6, lg: featuredOnly ? 6 : 4 }}
            sx={{ display: 'flex' }}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 18 }}
              style={{ display: 'flex', width: '100%' }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
            >
              <ProjectCard
                onViewProject={() => setIsToastOpen(true)}
                project={project}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        autoHideDuration={4000}
        onClose={() => setIsToastOpen(false)}
        open={isToastOpen}
      >
        <Alert
          onClose={() => setIsToastOpen(false)}
          severity="info"
          sx={{
            alignItems: 'center',
            bgcolor: '#3498db',
            color: '#fff',
            fontSize: '1rem',
            maxWidth: { xs: 'calc(100vw - 32px)', sm: 420 },
            minWidth: { xs: 0, sm: 420 },
            width: { xs: 'calc(100vw - 32px)', sm: 'auto' },
            '& .MuiAlert-icon': {
              color: '#fff',
            },
          }}
          variant="filled"
        >
          Source code is private for security reasons.
        </Alert>
      </Snackbar>
    </>
  )
}
