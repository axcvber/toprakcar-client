import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import MobileFilter from './MobileFilter'
import ChipNavigation from './ChipNavigation'
import Skeleton from '@mui/material/Skeleton'
import SortDropdown from './SortDropdown'

interface IFilterNav {
  totalResultCount: number | undefined
  isLoading: boolean
}

const FilterNav: React.FC<IFilterNav> = ({ totalResultCount, isLoading }) => {
  return (
    <>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <ChipNavigation />
      </Box>

      <Stack direction='row' justifyContent='space-between' alignItems='center' mb={2} flexWrap='wrap' gap={2}>
        <Typography variant='h6' px={1} minWidth={120}>
          {isLoading ? <Skeleton /> : `${totalResultCount} result`}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={1}>
          {/* <MobileFilter/> */}

          <SortDropdown />
        </Stack>
      </Stack>
    </>
  )
}

export default FilterNav
