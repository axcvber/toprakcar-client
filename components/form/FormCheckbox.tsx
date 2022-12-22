import React from 'react'
import { Controller } from 'react-hook-form'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5'

interface IFormCheckbox {
  label: string
  control: any
  name: string
}

const FormCheckbox: React.FC<IFormCheckbox> = ({ label, name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControlLabel
          label={label}
          sx={{
            ml: 0.2,
            mr: 0,
            userSelect: 'none',
            'span': {
              fontWeight: 500,
              fontSize: 14,
              color: !!fieldState.error ? 'error.main' : 'text.secondary',
            },
          }}
          control={
            <Checkbox
              {...field}
              icon={<IoSquareOutline />}
              checkedIcon={<IoCheckbox />}
              sx={{
                p: 0,
                pr: 0.5,
                'svg': {
                  fontSize: 20,
                  color: !!fieldState.error ? 'error.main' : 'primary.main',
                },
              }}
            />
          }
        />
      )}
    />
  )
}

export default FormCheckbox
