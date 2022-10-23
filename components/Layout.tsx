import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Navbar from './navbar/Navbar'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box>{children}</Box>
    </div>
  )
}

export default Layout
