import React from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Chip from '@mui/material/Chip'
import Dropdown from './Dropdown'
import { FiFilter } from 'react-icons/fi'
import { BiSortAlt2 } from 'react-icons/bi'

const FilterNav = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Stack spacing={2}>
      {/* <Box>
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

      <Divider /> */}

      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6'>265 result</Typography>

        <Stack direction='row' spacing={2}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <FiFilter />
            <Typography variant='body2'>Filter</Typography>
          </Stack>

          <Stack direction='row' spacing={1} alignItems='center'>
            <BiSortAlt2 />
            <Typography variant='body2'>Sort</Typography>
            {/* <Dropdown
              title={'Best math'}
              //   <Stack direction='row' spacing={1}>
              //   <IoLocationSharp fontSize={24} color='#FF8A5D' />
              //   <Typography>Choose a location</Typography>
              // </Stack>
              // menu={[<Box>Create</Box>, <Box>Edit</Box>, <Box>Delete</Box>]}
            /> */}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FilterNav
