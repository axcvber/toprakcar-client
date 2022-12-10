import React, { ReactNode } from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import { FiTarget } from 'react-icons/fi'
import Paper from '../Paper'

const FilterBar: React.FC<{ children: ReactNode }> = ({ children }) => {
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
      {children}
    </Paper>
  )
}

export default FilterBar
