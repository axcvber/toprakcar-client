import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useAppContext } from '../context/appContext'

interface ILogo {
  placement?: 'header' | 'footer'
}

const Logo: React.FC<ILogo> = ({ placement = 'header' }) => {
  const { initialData } = useAppContext()
  const global = initialData?.global?.data?.attributes
  const lightLogo = global?.lightLogo.data?.attributes?.url
  const darkLogo = global?.darkLogo.data?.attributes?.url
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
        <Image priority objectFit='contain' layout='fill' src={logoUrl || ''} alt='logo' />
      </Box>
    </Link>
  )
}

export default Logo
