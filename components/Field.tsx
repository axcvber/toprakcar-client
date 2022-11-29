import React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'

interface IField {
  label: string
  placeholder: string
}

const Field: React.FC<IField> = ({ label, placeholder }) => {
  return (
    <FormControl variant='standard' fullWidth>
      <InputLabel required shrink htmlFor='field'>
        {label}
      </InputLabel>
      <BootstrapInput fullWidth placeholder={placeholder} id='field' />
    </FormControl>
  )
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '.MuiFormLabel-root': {
    fontSize: '20px !important',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.grey[50],
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

export default Field
