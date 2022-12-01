import React from 'react'
import { Box, Stack, Typography, Divider, Button } from '@mui/material'
import Chip from '@mui/material/Chip'
import Dropdown from '../Dropdown'
import { FiFilter } from 'react-icons/fi'
import { BiSortAlt2 } from 'react-icons/bi'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import MobileFilter from './MobileFilter'
import ChipNavigation from './ChipNavigation'

const FilterNav = () => {
  return (
    <>
      <Box display={{ xs: 'none', lg: 'flex' }} mb={3}>
        <ChipNavigation />
      </Box>

      <Divider />

      <Stack direction='row' justifyContent='space-between' alignItems='center' my={2} sx={{}}>
        <Typography variant='h6'>265 result</Typography>

        <Stack direction='row' spacing={2}>
          <MobileFilter />

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
    </>
  )
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    left: -12,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default FilterNav
