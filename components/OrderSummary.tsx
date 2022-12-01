import React from 'react'
import { Box, Container, Grid, Stack, Typography, Divider } from '@mui/material'
import Image from 'next/image'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
import LocationItem from './LocationItem'
import Paper from './Paper'
import { useRentContext } from '../context/rent-context'

const options = [
  {
    id: 1,
    icon: <BsSpeedometer2 />,
    text: '120km Mileage',
  },
  {
    id: 2,
    icon: <TbManualGearbox />,
    text: 'Auto',
  },
  {
    id: 3,
    icon: <TbGasStation />,
    text: 'Disel',
  },
  {
    id: 4,
    icon: <MdAirlineSeatLegroomNormal />,
    text: '4',
  },
  {
    id: 5,
    icon: <BiSupport />,
    text: '24/7 Support',
  },
  {
    id: 6,
    icon: <MdOutlineCancel />,
    text: 'Free Cancellation',
  },
  {
    id: 7,
    icon: <FiBarChart />,
    text: 'Middle class',
  },
]

const OrderSummary = () => {
  const { setCurrentStep, selectedCar } = useRentContext()
  return (
    <Paper>
      <Stack direction='row' justifyContent={'space-between'} alignItems='center' spacing={6}>
        <Stack spacing={3}>
          <Typography variant='h6' fontWeight={600}>
            Ride Details
          </Typography>
          <Divider />
          <LocationItem title={'Pick Up'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 15 ,2022 00:00'} />
          <LocationItem title={'Drop Off'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 18 ,2022 00:00'} />
        </Stack>
        <Stack
          direction='row'
          flex={'1'}
          alignSelf='center'
          sx={
            {
              // backgroundColor: 'primary.main',
            }
          }
        >
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'grey.100',
              borderRadius: 3,
              // border: '1px solid',
              // borderColor: 'primary.main',
            }}
          >
            <Image
              width='100%'
              height={60}
              layout='responsive'
              objectFit='contain'
              src={selectedCar.imageUrl}
              placeholder='blur'
              blurDataURL={selectedCar.imageUrl}
              alt='selected-car'
            />
          </Box>
          <Box ml={3}>
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
        <Stack spacing={3}>
          <Typography variant='h6' fontWeight={600}>
            Summary
          </Typography>
          <Divider />

          <Stack direction='row' spacing={3} color='text.secondary'>
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

          {/* <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography>Number of Days:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>3</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>Renting price:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>850.00 ₺</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography>Extras:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>555.00 ₺</Typography>
            </Grid>
          </Grid> */}

          <Divider />
          <Stack direction='row' spacing={3}>
            <Typography variant='h6' fontWeight={600}>
              Total amount:
            </Typography>
            <Typography variant='h6' color='primary.main' fontWeight={600}>
              3 105 ₺
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default OrderSummary
