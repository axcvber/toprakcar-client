import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ILogo {
  placement?: 'header' | 'footer'
}

const Logo: React.FC<ILogo> = ({ placement = 'header' }) => {
  const lightLogo = 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667953311/Frame_40_kykyeo.png'
  const darkLogo = 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667953086/logo_n2imcm.png'
  const logoUrl = placement === 'header' ? lightLogo : darkLogo
  return (
    <Link href='/' passHref>
      <Box
        component='a'
        sx={{
          position: 'relative',
          width: '157px',
          height: '64px',
        }}
      >
        <Image priority objectFit='contain' layout='fill' src={logoUrl} alt='logo' />
      </Box>
    </Link>
  )
}

export default Logo
