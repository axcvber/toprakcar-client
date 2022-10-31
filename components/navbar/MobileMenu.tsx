import React from 'react'
import { Box, Drawer, Stack } from '@mui/material'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import { useLocale } from '../../hooks/useLocale'
import { useRouter } from 'next/router'
import LocaleMenu from './LocaleMenu'
import { CgCloseO } from 'react-icons/cg'
import PhoneButton from './PhoneButton'
import { NavLink } from './Navbar'

const MobileMenu = () => {
  const t = useLocale()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <>
      <IconButton color='primary' aria-label='open menu' size='small' edge={'end'} onClick={handleDrawerOpen}>
        <HiOutlineMenuAlt3 fontSize={28} />
      </IconButton>
      <StyledDrawer
        transitionDuration={{
          enter: 250,
          exit: 250,
        }}
        variant='temporary'
        anchor='right'
        open={open}
        onClose={handleDrawerClose}
      >
        <Stack direction='row' justifyContent={'space-between'} alignItems='center' height={70}>
          <IconButton color='primary' aria-label='close menu' size='small' edge={'start'} onClick={handleDrawerClose}>
            <CgCloseO fontSize={28} />
          </IconButton>
          <LocaleMenu />
        </Stack>
        <Divider />

        <Box component='nav' mt={3}>
          <Stack component='ul' spacing={3} pl={0.5}>
            {t.navLinks.map((item) => (
              <li key={item.path}>
                <Link href={item.path} passHref>
                  <NavLink onClick={handleDrawerClose} className={router.pathname === item.path ? 'active' : ''}>
                    {item.label}
                  </NavLink>
                </Link>
              </li>
            ))}
          </Stack>
          <Box mt={3} display={{ xs: 'block', sm: 'none' }}>
            <PhoneButton />
          </Box>
        </Box>
      </StyledDrawer>
    </>
  )
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 230,
    padding: '0 20px 24px 20px',
    height: 'auto',
    background: theme.palette.background.default,
    borderBottomLeftRadius: '10px',
  },
}))

export default MobileMenu
