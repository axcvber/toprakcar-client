import React from 'react'
import { Box, Container, Grid, Stack, Typography, Divider, Button } from '@mui/material'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendar3 } from 'react-icons/bs'

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

interface ILocationItem {
  title: string
  address: string
  date: string
}

const LocationItem: React.FC<ILocationItem> = ({ title, address, date }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        'svg': {
          color: 'primary.main',
          fontSize: 16,
        },
      }}
    >
      <Typography fontWeight={600} color='text.secondary'>
        {title}
      </Typography>
      <Stack direction='row' spacing={1} alignItems='center'>
        <IoLocationSharp />
        <Typography variant='body2' fontWeight={500} color='text.secondary'>
          {address}
        </Typography>
      </Stack>
      <Stack direction='row' spacing={1} alignItems='center'>
        <BsCalendar3 />
        <Typography variant='body2' fontWeight={500} color='text.secondary'>
          {date}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default LocationFilter
