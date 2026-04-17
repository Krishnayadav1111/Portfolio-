import { Container, TextField } from '@mui/material'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsContainer } from '../containers/ProjectsContainer'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 9 } }}>
      <SectionHeading
        eyebrow="Projects"
        title="Scalable web apps and full-stack projects."
        body="Search by technology or project name to scan the work quickly."
      />
      <TextField
        fullWidth
        label="Search by project or stack"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        sx={{ mb: { xs: 3, md: 4 }, maxWidth: { xs: '100%', sm: 520 } }}
      />
      <ProjectsContainer searchTerm={searchTerm} />
    </Container>
  )
}
