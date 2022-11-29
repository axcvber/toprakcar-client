import React from 'react'
import { Grid } from '@mui/material'
import ReservationDetails from '../ReservationDetails'
import ReservationText from '../ReservationText'

const BookingSummaryStep = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ReservationDetails />
      </Grid>
      <Grid item xs={9}>
        <ReservationText />
      </Grid>
    </Grid>
  )
}

export default BookingSummaryStep
