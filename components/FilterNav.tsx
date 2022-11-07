import React from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Chip from '@mui/material/Chip'

const FilterNav = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Typography color='text.secondary'>6 Filters</Typography>
          <Typography variant='body2' color='primary' fontWeight={500}>
            Clear All
          </Typography>
        </Stack>
      </Box>
      <Stack direction='row' spacing={2}>
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
        <Chip color='primary' label='Mersedes' onDelete={handleDelete} />
      </Stack>

      <Divider />

      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h6'>265 result</Typography>
        <Typography>SortBy</Typography>
      </Stack>
    </Stack>
  )
}

export default FilterNav
