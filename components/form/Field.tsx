import React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Controller } from 'react-hook-form'
import { FormHelperText } from '@mui/material'

interface IField {
  label?: string
  placeholder: string
  control: any
  name: string
  disabled?: boolean
  type?: React.HTMLInputTypeAttribute
}

const Field: React.FC<IField> = ({ control, name, label, placeholder, type = 'text', disabled }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} variant='standard' fullWidth>
          {label && (
            <InputLabel
              required
              shrink
              htmlFor={name}
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: 'text.secondary',
              }}
            >
              {label}
            </InputLabel>
          )}

          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            isError={!!fieldState.error}
            disabled={disabled}
            fullWidth
          />
          <FormHelperText>{fieldState.error && fieldState.error.message}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

const Input = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<{ isError: boolean }>(({ isError, theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3.2),
  },

  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: isError ? theme.palette.error.main : theme.palette.grey[300],
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.text.primary,

    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      backgroundColor: theme.palette.grey[200],
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      opacity: 0.6,
      color: theme.palette.text.disabled,
    },
  },
}))

export default Field
