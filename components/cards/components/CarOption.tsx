import React from 'react'
import { Stack, Typography, Grid } from '@mui/material'

interface ICarOption {
  icon: JSX.Element
  label?: string | number
}

const CarOption: React.FC<ICarOption> = ({ icon, label }) => {
  return (
    <Grid item component='li'>
      <Stack
        spacing={1}
        direction='row'
        alignItems={'center'}
        sx={{
          color: 'text.disabled',
          'svg': {
            fontSize: 18,
          },
        }}
      >
        {icon}
        <Typography component='span' fontWeight={500} fontSize={{ xs: 14, md: 16 }}>
          {label}
        </Typography>
      </Stack>
    </Grid>
  )
}

export default CarOption
