import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { IoCheckbox, IoSquareOutline } from 'react-icons/io5'

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
          icon={<IoSquareOutline />}
          checkedIcon={<IoCheckbox />}
          sx={{
            padding: 0,
            margin: 0,
            'svg': {
              transition: 'all 0.1s linear',
              fontSize: 24,
              color: isChecked ? 'primary.main' : 'text.secondary',
            },
          }}
        />
      }
      label={label}
      sx={{
        backgroundColor: isChecked ? '#FFF6F3' : 'transparent',
        width: '100%',
        border: '1px solid',
        borderColor: isChecked ? 'primary.main' : 'grey.200',
        py: 1.5,
        px: 0.5,
        color: isChecked ? 'primary.main' : 'text.secondary',
        userSelect: 'none',
        margin: 0,
        borderRadius: 2,
        my: 0.5,
        transition: 'all 0.1s linear',
        'span': {
          fontWeight: 500,
          fontSize: 15,
          ml: 1,
        },
        '&:hover': {
          borderColor: 'primary.main',
          backgroundColor: '#FFF6F3',
          color: 'primary.main',
          'svg': {
            color: 'primary.main',
          },
        },
      }}
    />
  )
}

export default FilterCheckbox
