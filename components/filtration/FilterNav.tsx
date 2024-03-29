import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import MobileFilter from './MobileFilter'
import ChipNavigation from './ChipNavigation'
import Skeleton from '@mui/material/Skeleton'
import SortDropdown from '../dropdown/SortDropdown'
import FilterList from '../rent/RentFilter'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import ShopFilter from '../shop/ShopFilter'
import { useLocale } from '../../hooks/useLocale'
import { morph } from '../../utils/morph'

interface IFilterNav {
  totalResultCount: number | undefined
  isLoading: boolean
}

const FilterNav: React.FC<IFilterNav> = ({ isLoading, totalResultCount }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('lg'), { noSsr: true })
  const router = useRouter()
  const t = useLocale()
  const totalResults = totalResultCount ? totalResultCount : 0
  return (
    <>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <ChipNavigation />
      </Box>

      <Stack direction='row' justifyContent='space-between' alignItems='center' mb={2} flexWrap='wrap-reverse' gap={2}>
        <Typography variant='body1' px={1} minWidth={120} fontWeight={600} color='text.secondary'>
          {isLoading ? <Skeleton /> : `${totalResults} ${morph(totalResults, t.filterNav.result)}`}
        </Typography>
        <Stack direction='row' alignItems='center' spacing={1}>
          {matches && <MobileFilter>{router.pathname === '/fleet' ? <FilterList /> : <ShopFilter />}</MobileFilter>}

          <SortDropdown />
        </Stack>
      </Stack>
    </>
  )
}

export default FilterNav
