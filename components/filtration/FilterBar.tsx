import React, { ReactNode } from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import { FiTarget } from 'react-icons/fi'
import Paper from '../layout/Paper'
import { useLocale } from '../../hooks/useLocale'

const FilterBar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = useLocale()

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
          {t.filter.title}
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {children}
    </Paper>
  )
}

export default FilterBar
