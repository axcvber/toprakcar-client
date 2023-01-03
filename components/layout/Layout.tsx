import { Box } from '@mui/material'
import React, { ReactNode, useEffect } from 'react'
import { ModalProvider } from '../../context/modalContext'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useRouter } from 'next/router'
import { LocalizationProvider } from '@mui/x-date-pickers'
import CookiesConsent from '../CookiesConsent'
import { hasCookie } from 'cookies-next'
import { useSnackbar } from 'notistack'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const hasCookies = hasCookie('localConsent')

  useEffect(() => {
    if (!hasCookies) {
      enqueueSnackbar('', {
        persist: true,
        content: () => <CookiesConsent />,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      })
    }
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={router.locale}>
      <ModalProvider>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          }}
        >
          <Navbar />
          <Box component='main' sx={{ mt: '70px', mb: 3 }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </ModalProvider>
    </LocalizationProvider>
  )
}

export default Layout
