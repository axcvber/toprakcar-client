import React from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import Chip from '@mui/material/Chip'
import { FilterKeys, useFilterContext } from '../../context/filter-context'
import Link from '@mui/material/Link'

const ChipNavigation = () => {
  const { filtered, deleteFilter, clearFilter } = useFilterContext()

  const totalFiltersCount = Object.values(filtered).reduce((acc, val) => acc + val.length, 0)

  const handleDelete = (fieldName: FilterKeys, value: string) => {
    deleteFilter({ fieldName, value })
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
              {value.map((item) => (
                <Chip
                  key={item.label}
                  color='primary'
                  label={item.label}
                  onDelete={() => handleDelete(item.fieldName, item.value)}
                />
              ))}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>

      <Divider sx={{ my: 3 }} />
    </>
  )
}

export default ChipNavigation
