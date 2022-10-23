import { Container, Stack, Box, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useLocale } from '../../hooks/useLocale'
import Logo from '../Logo'
import { FiPhoneCall } from 'react-icons/fi'
import { styled } from '@mui/material/styles'
import LocaleMenu from './LocaleMenu'

const Navbar = () => {
  const t = useLocale()
  const router = useRouter()
  return (
    <Box py={2} borderBottom='1px solid #E5E5E9'>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Stack component='ul' direction='row' spacing={3} alignItems='center'>
          {t.navLinks.map((item) => (
            <li key={item.path}>
              <Link href={item.path} passHref>
                <NavLink className={router.pathname === item.path ? 'active' : ''}>{item.label}</NavLink>
              </Link>
            </li>
          ))}
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Box mr={3}>
            <LocaleMenu />
          </Box>

          <FiPhoneCall fontSize={24} color='#FF8A5D' />
          <Typography fontSize={18} fontWeight={500} color='#FF8A5D'>
            +505 843 30 32
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

const NavLink = styled('a')(({ theme }) => ({
  fontSize: 16,
  color: '#333',
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  '&.active': {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      top: '100%',
      left: 0,
      width: '50%',
      height: '3px',
      background: '#FF8A5D',
      marginTop: 5,
      borderRadius: '50px',
    },
  },

  // [theme.breakpoints.down('sm')]: {
  //   width: 160,
  // },
}))

export default Navbar
