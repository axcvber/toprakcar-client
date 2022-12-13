import React from 'react'
import { Box, Grid, Stack, Typography, Divider } from '@mui/material'
import Image from 'next/image'
import LocationItem from './LocationItem'
import Paper from './Paper'
import { useRentContext } from '../context/rent/rent-context'

const OrderSummary = () => {
  const { setCurrentStep, selectedCar } = useRentContext()
  return (
    <Paper>
      <Grid container spacing={{ xs: 6, md: 3, lg: 6 }}>
        <Grid item xs={12} md={3.5} lg={3}>
          <Stack spacing={3}>
            <Typography variant='h6' fontWeight={600}>
              Ride Details
            </Typography>
            <Divider />
            <LocationItem title={'Pick Up'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 15 ,2022 00:00'} />
            <LocationItem title={'Drop Off'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 18 ,2022 00:00'} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <Stack spacing={2}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'grey.100',
                borderRadius: 3,
                height: { xs: 200, sm: 300, md: 200 },
                position: 'relative',
              }}
            >
              <Image
                layout='fill'
                objectFit='contain'
                src={selectedCar.imageUrl}
                placeholder='blur'
                blurDataURL={selectedCar.imageUrl}
                alt='selected-car'
              />
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={600} mb={2}>
                {selectedCar.name}
              </Typography>
              <Grid container component='ul' columnGap={4} rowGap={2}>
                {selectedCar.options.map((item: any) => (
                  <Grid item key={item.text}>
                    <Stack
                      component='li'
                      spacing={1}
                      direction='row'
                      alignItems={'center'}
                      sx={{
                        color: 'text.disabled',
                        'svg': {
                          fontSize: 18,
                        },
                      }}
                    >
                      {item.icon}
                      <Typography component='span' fontWeight={500} fontSize={{ xs: 14, md: 16 }}>
                        {item.text}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.5} lg={3}>
          <Stack spacing={3}>
            <Typography variant='h6' fontWeight={600}>
              Summary
            </Typography>
            <Divider />

            <Stack direction='row' justifyContent={'space-between'} color='text.secondary'>
              <Stack spacing={2}>
                <Typography fontWeight={500}>Number of Days:</Typography>
                <Typography fontWeight={500}>Renting price:</Typography>
                <Typography fontWeight={500}>Extras:</Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography fontWeight={600}>3</Typography>
                <Typography fontWeight={600}>850.00 ₺</Typography>
                <Typography fontWeight={600}>555.00 ₺</Typography>
              </Stack>
            </Stack>

            <Divider />
            <Stack direction='row' justifyContent={'space-between'}>
              <Typography variant='h6' fontWeight={600}>
                Total amount:
              </Typography>
              <Typography variant='h6' color='primary.main' fontWeight={600}>
                3 105 ₺
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OrderSummary
