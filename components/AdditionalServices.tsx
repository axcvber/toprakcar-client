import React from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Paper from './Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

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
          Additional services
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
        <FormControl>
          <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
            <FormControlLabel value='female' control={<Radio size='small' />} label='Yes' />
            <FormControlLabel value='male' control={<Radio size='small' />} label='No' />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Typography variant='h6' color='primary.main' fontWeight={600}>
        {price} ₺
      </Typography>
    </Stack>
  )
}

export default AdditionalServices
