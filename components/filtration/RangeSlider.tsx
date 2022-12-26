import React from 'react'
import Slider from '@mui/material/Slider'
import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { useLocale } from '../../hooks/useLocale'

interface IRangeSlider {
  title?: string
  minValue: number
  maxValue: number
  handleChange: (rangeArr: Array<number>) => void
  // value: number[]
}

const RangeSlider: React.FC<IRangeSlider> = ({ title, minValue, maxValue, handleChange }) => {
  const [value, setValue] = React.useState<number[]>([minValue, maxValue])
  const t = useLocale()

  const onChangeCommitted = () => {
    handleChange(value)
  }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'min') {
      setValue((prev) => [Number(event.target.value), prev[1]])
    } else if (event.target.name === 'max') {
      setValue((prev) => [prev[0], Number(event.target.value)])
    }
  }

  // const handleBlur = () => {
  //   handleChange(value)

  //   if (value[0] > value[1]) {
  //     setValue([value[1], value[1]])
  //   } else if (value[1] < value[0]) {
  //     setValue([value[0], value[0]])
  //   }
  // }

  return (
    <div>
      {title && (
        <Typography textAlign='start' fontWeight={600} color='text.secondary' mb={2}>
          {title}
        </Typography>
      )}
      <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={1.5} pt={3} mb={2}>
        <RangeField
          name={'min'}
          value={value[0]}
          label={t.forms.labels.min}
          handleChange={handleInputChange}
          handleBlur={onChangeCommitted}
        />
        <Box sx={{ width: 20, height: 2, bgcolor: 'divider' }} />
        <RangeField
          name={'max'}
          value={value[1]}
          label={t.forms.labels.max}
          handleChange={handleInputChange}
          handleBlur={onChangeCommitted}
        />
      </Stack>
      <Stack alignItems='center'>
        <CustomSlider
          onChangeCommitted={onChangeCommitted}
          disableSwap
          value={value}
          onChange={handleSliderChange}
          min={minValue}
          max={maxValue}
        />
      </Stack>
    </div>
  )
}

interface IRangeField {
  name: string
  value: number
  label: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: () => void
}

const RangeField: React.FC<IRangeField> = ({ name, value, label, handleChange, handleBlur }) => {
  return (
    <FormControl variant='standard' fullWidth>
      <InputLabel
        shrink
        htmlFor='field'
        focused={false}
        sx={{
          '&.MuiFormLabel-root': {
            top: -20,
          },
        }}
      >
        {label}
      </InputLabel>
      <Input id={name} value={value} name={name} fullWidth type='number' onChange={handleChange} onBlur={handleBlur} />
    </FormControl>
  )
}
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 4,
  width: '90%',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
  },
  '& .MuiSlider-thumb': {
    height: 22,
    width: 22,
    backgroundColor: '#fff',
    border: '4px solid currentColor',

    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
}))

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    // marginTop: theme.spacing(2.5),
    // background: 'purple',
    // top: -10,
  },
  '.MuiFormLabel-root': {
    // fontSize: '20px !important',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: theme.palette.divider,
    // fontSize: 15,
    fontWeight: 500,
    padding: '8px 12px',
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

export default RangeSlider
