import { Stack, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Line from '../../../styles/shared/Line'
import Search from '../../Search'

const Hero = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={'space-between'}
      alignItems='center'
      sx={{ py: 3, px: 6 }}
    >
      <Stack width={{ xs: '100%', md: '700px' }} spacing={3} sx={{}}>
        <Typography variant='h2' fontWeight={800} sx={{ fontSize: '64px !important' }} textTransform='uppercase'>
          LOOKING TO SAVE MORE ON YOUR RENTAL CAR?
        </Typography>
        <Line />
        <Typography width={'100%'} fontWeight={400} color='text.primary'>
          The Company that offers the Best Quality Service and Customer Satisfaction among Car Rental Companies
        </Typography>
        <Box zIndex={2} pt={5} width={'900px'}>
          <Search />
        </Box>
      </Stack>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${'/hero-paper.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          // background: 'red',
          width: '550px',
          // flex: 1,
          height: '700px',
          boxShadow: 10,
          borderRadius: '35px',
        }}
      >
        {/* <Box
          sx={{
            position: 'absolute',
            top: 50,
            right: -60,
            // background: 'blue',
          }}
        >
          <Image
            width={900}
            height={600}
            objectFit='contain'
            layout='fixed'
            alt='car'
            src='https://res.cloudinary.com/doea7ahfk/image/upload/v1666896487/40451b669eb48a0ef7ef8844e9b8320b_1_kovycf.png'
          />
        </Box> */}
      </Box>
    </Stack>
  )
}

export default Hero
