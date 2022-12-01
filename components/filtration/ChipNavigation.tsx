import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import Chip from '@mui/material/Chip'

const ChipNavigation = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography color='text.secondary'>6 Filters</Typography>
        <Typography variant='body2' color='primary' fontWeight={500}>
          Clear All
        </Typography>
      </Stack>
      <Stack direction='row' gap={2} flexWrap='wrap'>
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />

        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
      </Stack>
    </Stack>
  )
}

export default ChipNavigation
