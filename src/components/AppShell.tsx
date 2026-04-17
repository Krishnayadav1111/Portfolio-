import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Box, Button, Container, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Tech Expertise', to: '/tech-expertise' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export function AppShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        backgroundImage: (theme) =>
          theme.palette.mode === 'dark' ? 'linear-gradient(145deg, rgba(7, 11, 18, 0.97), rgba(13, 22, 32, 0.96))' : 'linear-gradient(145deg, rgba(247, 250, 252, 0.97), rgba(226, 232, 240, 0.96))',
        minHeight: '100vh',
      }}
    >
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(18px)',
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(7, 11, 18, 0.72)' : 'rgba(255, 255, 255, 0.72)',
          borderBottom: 1,
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: { xs: 68, md: 78 },
              py: { xs: 1, md: 2 },
            }}
          >
            <Typography
              component={NavLink}
              to="/home"
              variant="h6"
              sx={{
                color: 'inherit',
                flexShrink: 0,
                fontWeight: 900,
                textDecoration: 'none',
              }}
            >
              Krishna Yadav
            </Typography>
            <Stack
              component="nav"
              direction="row"
              spacing={1}
              sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap', justifyContent: 'center' }}
              useFlexGap
            >
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  color="inherit"
                  component={NavLink}
                  to={item.to}
                  sx={{
                    borderRadius: 8,
                    px: 1.5,
                    '&.active': {
                      bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <ThemeToggle />
              <IconButton
                aria-label="Open navigation menu"
                onClick={() => setIsMenuOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Drawer
        anchor="right"
        onClose={closeMenu}
        open={isMenuOpen}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.default',
              maxWidth: 360,
              p: 2,
              width: '82vw',
            },
          },
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 900 }}>Menu</Typography>
            <IconButton aria-label="Close navigation menu" onClick={closeMenu}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <Stack component="nav" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                color="inherit"
                component={NavLink}
                onClick={closeMenu}
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1.25,
                  '&.active': {
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                    color: 'primary.main',
                  },
                }}
                to={item.to}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Drawer>
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  )
}
