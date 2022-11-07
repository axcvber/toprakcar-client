import { Stack, Box, Typography, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useLocale } from '../../../hooks/useLocale'
import Line from '../../../styles/shared/Line'
import Search from '../../Search'

const Hero = () => {
  const t = useLocale()

  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth='xl'>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent={'space-between'}
          alignItems={{ md: 'flex-start', lg: 'center' }}
          spacing={4}
        >
          <Stack width={{ xs: '100%', md: '50%' }} spacing={3}>
            <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
              <Stack spacing={3}>
                <Typography variant={'h2'} fontWeight={800} textTransform='uppercase'>
                  {t.heroTitle}
                </Typography>
                <Line />
                <Typography width={'70%'} fontWeight={400} color='text.primary'>
                  {t.heroSubtitle}
                </Typography>
              </Stack>

              <Box zIndex={2} pt={2} width={{ xs: '100%', md: '850px', lg: '1000px' }}>
                <Search />
              </Box>
            </Stack>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${'/hero-paper.png'})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              // background: 'red',
              width: { xs: '100%', md: '40%', lg: '40%' },
              // flex: 1,
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
                width={700}
                height={500}
                objectFit='contain'
                layout='responsive'
                alt='car'
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src='https://res.cloudinary.com/doea7ahfk/image/upload/v1666896487/40451b669eb48a0ef7ef8844e9b8320b_1_kovycf.png'
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
