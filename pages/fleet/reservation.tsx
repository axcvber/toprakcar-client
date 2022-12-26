import React, { useEffect } from 'react'
import { CircularProgress, Container, Typography } from '@mui/material'
import { useRentContext } from '../../context/rent/rent-context'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import ImageHeading from '../../components/heading/ImageHeading'
import { useLocale } from '../../hooks/useLocale'
import RentStepper from '../../components/rent/steps/RentStepper'

const ReservationPage = () => {
  const { pickUpLocation, currentStep } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  useEffect(() => {
    if (!pickUpLocation) {
      router.replace('/fleet')
    }
  }, [router, pickUpLocation])

  if (!pickUpLocation) {
    return (
      <Stack width={'100%'} minHeight={'calc(100vh - 70px)'} justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Container maxWidth='xl'>
      <ImageHeading>
        <Typography variant='h4' color='#fff'>
          {t.reservation.stepLabels[currentStep]}
        </Typography>
      </ImageHeading>
      <RentStepper stepLabels={t.reservation.stepLabels} />
    </Container>
  )
}

export default ReservationPage
