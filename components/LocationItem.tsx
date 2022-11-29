import React from 'react'
import { Stack, Typography } from '@mui/material'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendar3 } from 'react-icons/bs'

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

export default LocationItem
