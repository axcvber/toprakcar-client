import React from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import { ShopFilterOptionKeys, useShopFilterContext } from '../../context/shop-filter/shop-filter-context'

const ChipNavigation = () => {
  const { filtered, deleteFilter, clearFilter } = useShopFilterContext()

  const totalFiltersCount = Object.values(filtered).reduce(
    (acc, val) => acc + (Array.isArray(val) ? val.length : val !== null),
    0
  )

  const handleDelete = (filterKey: ShopFilterOptionKeys, value: string) => {
    deleteFilter({ filterKey, value })
  }

  const handleClearAll = () => {
    clearFilter()
  }

  if (!totalFiltersCount) {
    return null
  }

  return (
    <>
      <Stack spacing={2}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography variant='body2' color='text.secondary'>
            {totalFiltersCount} Filters
          </Typography>
          <Link component='button' underline='hover' variant='body2' onClick={handleClearAll} fontWeight={600}>
            Clear All
          </Link>
        </Stack>
        <Stack direction='row' gap={2} flexWrap='wrap'>
          {Object.values(filtered).map((value, index) => (
            <React.Fragment key={index}>
              {Array.isArray(value) &&
                value.map((item) => (
                  <Chip
                    key={item.label}
                    color='primary'
                    label={item.label}
                    onDelete={() => handleDelete(item.filterKey, item.value)}
                  />
                ))}
              {!Array.isArray(value) && value !== null && (
                <Chip
                  key={value.label}
                  color='primary'
                  label={value.label}
                  onDelete={() => handleDelete(value.filterKey, value.value)}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>

      <Divider sx={{ my: 3 }} />
    </>
  )
}

export default ChipNavigation
