import { Box } from '@mui/material'
import React from 'react'

interface ImageHeadingProps {
  bgImage: string
  children: React.ReactNode
}

const ImageHeading: React.FC<ImageHeadingProps> = ({ children, bgImage }) => {
  return (
    <Box
      my={3}
      sx={{
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: { xs: '400px', md: '300px' },
        boxShadow: 25,
        textAlign: 'center',
        borderRadius: 5,
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
        overflow: 'hidden',
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: -1,
        },
      }}
    >
      {children}
    </Box>
  )
}

export default ImageHeading
