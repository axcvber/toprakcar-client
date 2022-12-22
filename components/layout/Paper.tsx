import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IPaper {
  children: ReactNode
  withShadow?: boolean
}

const Paper: React.FC<IPaper> = ({ children, withShadow }) => {
  return (
    <Box
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        backgroundColor: 'background.paper',
        boxShadow: withShadow ? 25 : 'none',
      }}
    >
      {children}
    </Box>
  )
}

export default Paper
