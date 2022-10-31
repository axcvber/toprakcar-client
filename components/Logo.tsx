import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' passHref>
      <Box
        component='a'
        sx={{
          position: 'relative',
          width: '200px',
          height: '35px',
        }}
      >
        <Image
          priority
          objectFit='cover'
          layout='fill'
          src='https://res.cloudinary.com/doea7ahfk/image/upload/v1666971417/logo_ba5yp1.webp'
          alt='logo'
        />
      </Box>
    </Link>
  )
}

export default Logo
