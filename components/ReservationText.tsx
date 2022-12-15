import React from 'react'
import Paper from './Paper'
import { Stack, Typography, Divider, Box, Grid } from '@mui/material'
import { useRentContext } from '../context/rent/rent-context'

const ReservationText = () => {
  const { setCurrentStep, selectedCar, userData, pickUpDate, dropOffDate, orderSummary } = useRentContext()

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h5' fontWeight={600}>
          Thanks for your order!
        </Typography>

        <Typography>
          Dear {userData?.fullName} ​​your pre-reservation has been received. The information you sent has reached our
          system. You will be informed by e-mail or telephone when your reservation is confirmed. We thank you. Red Car
          Rental and Transfer Services
        </Typography>

        <Box>
          <Grid
            container
            sx={{ border: '1px solid', borderColor: 'divider', p: 2, fontWeight: 500, color: 'text.primary' }}
          >
            <Grid item container xs={6} spacing={3}>
              <Grid item xs={12}>
                Order Number
              </Grid>
              <Grid item xs={12}>
                Name
              </Grid>
              <Grid item xs={12}>
                Phone
              </Grid>
              <Grid item xs={12}>
                Email
              </Grid>
              <Grid item xs={12}>
                Vehicle
              </Grid>
              <Grid item xs={12}>
                Day Count
              </Grid>
              <Grid item xs={12}>
                Extras
              </Grid>

              <Grid item xs={12}>
                Order Amount
              </Grid>
            </Grid>

            <Grid item container xs={6} spacing={3}>
              <Grid item xs={12}>
                854783
              </Grid>
              <Grid item xs={12}>
                {userData?.fullName}
              </Grid>
              <Grid item xs={12}>
                {userData?.phone}
              </Grid>
              <Grid item xs={12}>
                {userData?.email}
              </Grid>
              <Grid item xs={12}>
                {selectedCar?.attributes?.name}
              </Grid>

              <Grid item xs={12}>
                {orderSummary?.dayCount}
              </Grid>
              <Grid item xs={12}>
                {orderSummary?.extrasPrice.toLocaleString()} ₺
              </Grid>

              <Grid item xs={12}>
                {orderSummary?.totalAmount.toLocaleString()} ₺
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Typography>
          Note: If we do not receive a response within 24 hours, you either entered your email address incorrectly or
          our emails are sent to you as spam (Junk Mail). Please enter your e -mail and mark https://www.kirmizicar.com/
          as a secure address. If your arrival date is within the next 24 hours, please contact us at the phone numbers
          below. Tel : +90532 588 08 05 (You can call 7 / 24)
        </Typography>
      </Stack>
    </Paper>
  )
}

export default ReservationText
