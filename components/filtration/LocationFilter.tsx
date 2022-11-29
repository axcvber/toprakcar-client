import React from 'react'
import { Stack, Typography, Divider, Button } from '@mui/material'
import LocationItem from '../LocationItem'

const LocationFilter = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 3,
        // boxShadow: 25,
        border: ' 1px solid',
        borderColor: 'divider',
        p: 3,
        mb: 3,
      }}
    >
      <Typography variant='h6' fontWeight={600}>
        Prepare Reservation
      </Typography>
      <Divider />
      <LocationItem title={'Pick Up'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 15 ,2022 00:00'} />
      <LocationItem title={'Drop Off'} address={'Adana Hava Limanı İç Hatlar'} date={'Ekim 18 ,2022 00:00'} />
      <Button variant='contained' size='extra'>
        Change Search
      </Button>
    </Stack>
  )
}

export default LocationFilter
