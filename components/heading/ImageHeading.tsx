import { Box } from '@mui/material'
import React from 'react'
import Background from '../layout/Background'

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
      }}
    >
      <Background src={bgImage} alt='background' />

      {children}
    </Box>
  )
}

export default ImageHeading
