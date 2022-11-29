import React from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Paper from './Paper'

const data = [
  {
    id: 1,
    title: 'Baby chair',
    price: 15.0,
    label: '(15.00 ₺ per day)',
  },
  {
    id: 2,
    title: 'Navigation',
    price: 10.0,
    label: '(Daily 10.00 ₺ )',
  },
  {
    id: 3,
    title: 'Snow Chain',
    price: 10.0,
    label: '(Daily 10.00 ₺ )',
  },
  {
    id: 4,
    title: 'Full Insurance',
    price: 80.0,
    label: '(80.00 ₺ per day)',
  },
  {
    id: 5,
    title: 'Amplifier',
    price: 10.0,
    label: '(Daily 10.00 ₺ )',
  },
  {
    id: 6,
    title: 'Additional Driver',
    price: 60.0,
    label: '(60.00 ₺ per day)',
  },
]

const AdditionalServices = () => {
  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Ride Details
        </Typography>
        <Divider />
        <Stack spacing={3}>
          {data.map((item) => (
            <ServiceItem {...item} key={item.id} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

interface IServiceItem {
  title: string
  price: number
  label: string
}

const ServiceItem: React.FC<IServiceItem> = ({ title, price, label }) => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Stack spacing={1}>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {label}
        </Typography>
      </Stack>
      <Typography variant='h6' color='primary.main' fontWeight={600}>
        {price} ₺
      </Typography>
    </Stack>
  )
}

export default AdditionalServices
