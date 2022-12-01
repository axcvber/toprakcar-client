import React from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import { FiTarget } from 'react-icons/fi'
import Paper from '../Paper'
import FilterList from './FilterList'

interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <Paper>
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        sx={{
          'svg': {
            color: 'primary.main',
            fontSize: 28,
          },
        }}
      >
        <FiTarget />
        <Typography variant='h6' fontWeight={600}>
          Filter by
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />

      <FilterList />
    </Paper>
  )
}

export default FilterBar
