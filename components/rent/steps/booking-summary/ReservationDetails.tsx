import React from 'react'
import Paper from '../../../layout/Paper'
import { Stack, Typography, Divider } from '@mui/material'
import LocationItem from '../../../layout/LocationItem'
import { useRentContext } from '../../../../context/rent/rent-context'
import { useRouter } from 'next/router'
import { useLocale } from '../../../../hooks/useLocale'

const ReservationDetails = () => {
  const { pickUpLocation, dropOffLocation, dropOffDate, pickUpDate } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          {t.reservation.rideDetails}
        </Typography>
        <Divider />
        <LocationItem
          title={t.reservation.pickUp}
          address={pickUpLocation?.address}
          date={pickUpDate?.locale(router.locale as string).format('LLL')}
        />
        <LocationItem
          title={t.reservation.dropOff}
          address={dropOffLocation?.address}
          date={dropOffDate?.locale(router.locale as string).format('LLL')}
        />
      </Stack>
    </Paper>
  )
}

export default ReservationDetails
