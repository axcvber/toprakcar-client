import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IPaper {
  children: ReactNode
}

const Paper: React.FC<IPaper> = ({ children }) => {
  return (
    <Box
      sx={{
        p: 4,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        backgroundColor: 'background.paper',
      }}
    >
      {children}
    </Box>
  )
}

export default Paper
