import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box component='main' sx={{ mt: '70px', overflowX: 'hidden' }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
