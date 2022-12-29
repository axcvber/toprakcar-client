import { Box } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React, { ReactNode } from 'react'
import { ModalProvider } from '../../context/modalContext'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useRouter } from 'next/router'
import { LocalizationProvider } from '@mui/x-date-pickers'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const router = useRouter()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={router.locale}>
      <SnackbarProvider maxSnack={1}>
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
      </SnackbarProvider>
    </LocalizationProvider>
  )
}

export default Layout
