import React, { useState } from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Dropdown from '../Dropdown'
import { BiSortAlt2 } from 'react-icons/bi'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import MobileFilter from './MobileFilter'
import ChipNavigation from './ChipNavigation'
import Skeleton from '@mui/material/Skeleton'

interface IFilterNav {
  totalCount: number | undefined
  isLoading: boolean
}

const FilterNav: React.FC<IFilterNav> = ({ totalCount, isLoading }) => {
  const [sortTitle, setSortTitle] = useState('Recommended')
  const onSelectSort = (title: string) => {
    setSortTitle(title)
  }
  return (
    <>
      <Box display={{ xs: 'none', lg: 'flex' }} mb={3}>
        <ChipNavigation />
      </Box>

      <Divider />

      <Stack direction='row' justifyContent='space-between' alignItems='center' my={2} flexWrap='wrap' gap={2}>
        <Typography variant='h6' px={1} minWidth={120}>
          {isLoading ? <Skeleton /> : `${totalCount} result`}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={1}>
          <MobileFilter />

          <Dropdown
            icon={<BiSortAlt2 />}
            title={sortTitle}
            menu={[
              <Box key={2} onClick={() => onSelectSort('Recommended')}>
                Recommended
              </Box>,
              <Box key={2} onClick={() => onSelectSort('Newest Inventory')}>
                Newest Inventory
              </Box>,
              <Box key={2} onClick={() => onSelectSort('Lowest Price')}>
                Lowest Price
              </Box>,
              <Box key={2} onClick={() => onSelectSort('Highest Price')}>
                Highest Price
              </Box>,
            ]}
          />
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
