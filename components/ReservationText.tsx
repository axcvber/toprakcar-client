import React from 'react'
import Paper from './Paper'
import { Stack, Typography, Divider } from '@mui/material'

const ReservationText = () => {
  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Mr. John Doe
        </Typography>

        <Typography>
          Dear John Doe ​​Your pre-reservation has been received. The information you sent has reached our system. You
          will be informed by e-mail or telephone when your reservation is confirmed. We thank you. Red Car Rental and
          Transfer Services
        </Typography>
        <Divider />
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
