import { Container, Stack, Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useLocale } from '../../hooks/useLocale'
import Logo from '../Logo'
import { styled } from '@mui/material/styles'
import LocaleMenu from './LocaleMenu'
import useScrollDirection from '../../hooks/useScrollDirection'
import MobileMenu from './MobileMenu'
import PhoneButton from './PhoneButton'

interface HeaderProps {
  scrollDirection: string
  scrolledToTop: boolean
}

const Navbar = () => {
  const t = useLocale()
  const router = useRouter()
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Container
        maxWidth='xl'
        component='nav'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          position: 'relative',
        }}
      >
        <Logo />
        <Stack direction='row' spacing={2} alignItems='center' display={{ xs: 'none', lg: 'flex' }}>
          <Stack component='ul' direction='row' spacing={3}>
            {t.navLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} passHref>
                  <NavLink className={router.pathname === item.path ? 'active' : ''}>{item.label}</NavLink>
                </Link>
              </li>
            ))}
          </Stack>
          <LocaleMenu scrolledToDown={scrollDirection === 'down'} />
        </Stack>

        <Stack direction='row' spacing={2} alignItems='center'>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <PhoneButton />
          </Box>
          <Box display={{ xs: 'block', lg: 'none' }}>
            <MobileMenu />
          </Box>
        </Stack>
      </Container>
    </StyledHeader>
  )
}

export const NavLink = styled('a')(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.text.disabled,
  fontWeight: 600,
  position: 'relative',
  transition: 'all 0.2s ease',
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    top: '100%',
    left: 0,
    width: '0%',
    height: '3px',
    transition: 'all 0.2s ease',
    background: theme.palette.primary.main,
    marginTop: 4,
    borderRadius: '50px',
  },
  '&:hover, &.active': {
    color: theme.palette.text.primary,
    '&:after': {
      opacity: 1,
      width: '50%',
    },
  },
}))

const StyledHeader = styled('header', {
  shouldForwardProp: (prop) => prop !== 'scrollDirection' && prop !== 'scrolledToTop',
})<HeaderProps>(({ scrollDirection, scrolledToTop, theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: '#fff',
  height: '70px',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  ...(scrollDirection === 'up' && {
    height: '70px',
  }),
  ...(scrollDirection === 'down' &&
    !scrolledToTop && {
      transform: 'translateY(-71px)',
      height: '70px',
    }),
}))

export default Navbar
