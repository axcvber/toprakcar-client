import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { CgBmw } from 'react-icons/cg'
import { SiAudi, SiHonda, SiMazda, SiMercedes, SiToyota } from 'react-icons/si'

const data = [
  {
    id: 1,
    icon: <SiMercedes />,
    label: 'Mercedes',
  },
  {
    id: 2,
    icon: <SiHonda />,
    label: 'Honda',
  },
  {
    id: 3,
    icon: <SiToyota />,
    label: 'Toyota',
  },
  {
    id: 4,
    icon: <CgBmw />,
    label: 'BMW',
  },
  {
    id: 5,
    icon: <SiAudi />,
    label: 'Audi',
  },
  {
    id: 6,
    icon: <SiMazda />,
    label: 'Mazda',
  },
]

const FleetsNavigation = () => {
  return (
    <Stack direction='row' justifyContent='center' spacing={2}>
      {data.map((item, inx) => (
        <Button
          key={item.id}
          size='large'
          variant='contained'
          color={inx === 0 ? 'primary' : 'inherit'}
          startIcon={item.icon}
          sx={{ fontWeight: 600 }}
        >
          {item.label}
        </Button>
      ))}
      <Button size='large' variant='contained' color='inherit' sx={{ fontWeight: 600 }}>
        Explore
        <Typography ml={1} component='span' fontWeight={600} color='primary'>
          10+
        </Typography>
      </Button>
    </Stack>
  )
}

export default FleetsNavigation
