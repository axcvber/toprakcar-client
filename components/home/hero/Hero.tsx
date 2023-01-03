import { Stack, Box, Typography, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ComponentHomeHero } from '../../../generated'
import Line from '../../../styles/shared/Line'
import Search from '../../Search'
import heroPaperImg from '../../../public/hero-paper.png'

interface IHero {
  data: ComponentHomeHero
}

const Hero: React.FC<IHero> = ({ data }) => {
  return (
    <Box my={{ xs: 3, md: 5 }}>
      <Container maxWidth='xl'>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent={'space-between'}
          alignItems={{ md: 'flex-start', lg: 'center' }}
          spacing={4}
        >
          <Stack width={{ xs: '100%', md: '50%' }} spacing={3}>
            <Stack spacing={4} direction={{ xs: 'column', md: 'column' }}>
              <Stack spacing={3} px={{ xs: 1, md: 0 }}>
                <Typography variant={'h2'} fontWeight={800} textTransform='uppercase'>
                  {data?.title}
                </Typography>
                <Line />
                <Typography width={{ xs: '100%', md: '70%' }} fontWeight={400} color='text.primary'>
                  {data?.description}
                </Typography>
              </Stack>

              <Box zIndex={2} pt={0} width={{ xs: '100%', md: '850px', lg: '1000px' }}>
                <Search />
              </Box>
            </Stack>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${heroPaperImg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              width: { xs: '100%', md: '40%', lg: '40%' },
              height: { xs: '300px', sm: '500px', lg: '700px' },
              boxShadow: 10,
              borderRadius: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: { xs: 'auto', lg: -80 },
                transform: { xs: 'translateY(-50%)', lg: 'translateY(-60%)' },
                display: 'block',
                width: { xs: '95%', sm: '90%', md: '130%', lg: '140%' },
              }}
            >
              <Image
                priority
                width={700}
                height={500}
                objectFit='contain'
                layout='responsive'
                alt='car'
                src={data?.image.data?.attributes?.url || ''}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
