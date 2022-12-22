import React from 'react'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Controller } from 'react-hook-form'
import { FormHelperText } from '@mui/material'

interface ITextarea {
  label: string
  placeholder: string
  control: any
  name: string
}

const Textarea: React.FC<ITextarea> = ({ label, placeholder, control, name }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} variant='standard' fullWidth>
          <InputLabel
            shrink
            htmlFor='field'
            sx={{
              fontSize: 18,
              fontWeight: 500,
              color: 'text.secondary',
            }}
          >
            {label}
          </InputLabel>
          <StyledTextarea {...field} id={name} placeholder={placeholder} />
          <FormHelperText>{fieldState.error && fieldState.error.message}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

const StyledTextarea = styled('textarea')(({ theme }) => ({
  height: '200px',
  outline: 'none',
  resize: 'none',
  'label + &': {
    marginTop: theme.spacing(3.2),
  },
  fontFamily: '"Montserrat", sans-serif',
  borderRadius: 4,
  position: 'relative',
  backgroundColor: theme.palette.grey[50],
  border: '1px solid',
  borderColor: theme.palette.grey[300],
  fontSize: 15,
  fontWeight: 500,
  padding: '10px 12px',
  transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
  '&:focus': {
    borderColor: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
}))

export default Textarea
