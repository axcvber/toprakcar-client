import React from 'react'
import Slider from '@mui/material/Slider'
import { Box, Container, Grid, Stack, Typography, Divider, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

interface IPriceRange {
  title: string
}

const PriceRange: React.FC<IPriceRange> = ({ title }) => {
  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  return (
    <Box>
      <Typography fontWeight={600} color='text.secondary' mb={3}>
        {title}
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} mb={2}>
        <TextField id='outlined-basic' defaultValue={'₺ 850'} label='Price from:' variant='outlined' size='small' />
        <Divider sx={{ width: '30px', borderWidth: '2px', borderRadius: 5 }} />
        <TextField id='outlined-basic' defaultValue={'₺ 1400'} label='Price up to:' variant='outlined' size='small' />
      </Stack>

      <CustomSlider disableSwap aria-label='price slider' value={value} onChange={handleChange} />
    </Box>
  )
}

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 4,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: 'primary.main',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
}))

export default PriceRange
