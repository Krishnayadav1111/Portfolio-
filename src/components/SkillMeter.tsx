import { Box, LinearProgress, Stack, Typography } from '@mui/material'
import type { Skill } from '../services/portfolioApi'

type SkillMeterProps = {
  skill: Skill
}

export function SkillMeter({ skill }: SkillMeterProps) {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: 1 }}
      >
        <Typography sx={{ fontWeight: 800, overflowWrap: 'anywhere' }}>
          {skill.name}
        </Typography>
        <Typography color="text.secondary" sx={{ flexShrink: 0 }}>
          {skill.level}%
        </Typography>
      </Stack>
      <LinearProgress
        aria-label={`${skill.name} skill level`}
        value={skill.level}
        variant="determinate"
        sx={{ height: 8, borderRadius: 8 }}
      />
    </Box>
  )
}
