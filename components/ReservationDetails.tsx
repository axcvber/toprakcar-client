import React from 'react'
import Paper from './Paper'
import { Stack, Typography, Divider } from '@mui/material'
import LocationItem from './LocationItem'

const ReservationDetails = () => {
  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Your Reservation Details
        </Typography>
        <Divider />
        <LocationItem title={'Pick Up'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 15 ,2022 00:00'} />
        <LocationItem title={'Drop Off'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 18 ,2022 00:00'} />
      </Stack>
    </Paper>
  )
}

export default ReservationDetails
