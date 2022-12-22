import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box component='main' sx={{ mt: '70px' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
