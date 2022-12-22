import React from 'react'
import Paper from '../../../layout/Paper'
import { Stack, Typography, Divider } from '@mui/material'
import LocationItem from '../../../LocationItem'
import { useRentContext } from '../../../../context/rent/rent-context'
import { useRouter } from 'next/router'

const ReservationDetails = () => {
  const { pickUpLocation, dropOffLocation, dropOffDate, pickUpDate } = useRentContext()
  const router = useRouter()
  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Your Ride Details
        </Typography>
        <Divider />
        <LocationItem
          title={'Pick Up'}
          address={pickUpLocation?.address}
          date={pickUpDate?.locale(router.locale as string).format('LLL')}
        />
        <LocationItem
          title={'Drop Off'}
          address={dropOffLocation?.address}
          date={dropOffDate?.locale(router.locale as string).format('LLL')}
        />
      </Stack>
    </Paper>
  )
}

export default ReservationDetails
