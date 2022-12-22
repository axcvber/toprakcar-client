import React from 'react'
import { Grid } from '@mui/material'
import ReservationDetails from './ReservationDetails'
import ReservationText from './ReservationText'

const BookingSummaryStep = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <ReservationDetails />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <ReservationText />
      </Grid>
    </Grid>
  )
}

export default BookingSummaryStep
