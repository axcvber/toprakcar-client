import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface IFilterCheckbox {
  value?: string | null
  name: string
  label?: string
  isChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterCheckbox: React.FC<IFilterCheckbox> = ({ value, name, label, isChecked, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={isChecked}
          value={value}
          onChange={handleChange}
          inputProps={{ 'aria-label': label }}
          sx={{
            padding: 0,
            '& .MuiSvgIcon-root': {
              fontSize: 22,
            },
          }}
        />
      }
      label={label}
      sx={{
        color: 'text.secondary',
        userSelect: 'none',
        my: 1,
        'span': {
          fontWeight: 500,
          fontSize: 15,
          ml: 1,
        },
      }}
    />
  )
}

export default FilterCheckbox
