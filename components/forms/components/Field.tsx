import React from 'react'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Controller } from 'react-hook-form'
import { FormHelperText } from '@mui/material'

interface IField {
  label: string
  placeholder: string
  control: any
  name: string
  type?: React.HTMLInputTypeAttribute
}

// const Field: React.FC<IField> = ({ label, placeholder }) => {
//   return (
//     <FormControl variant='standard' fullWidth>
//       <InputLabel required shrink htmlFor='field'>
//         {label}
//       </InputLabel>
//       <BootstrapInput fullWidth placeholder={placeholder} id='field' />
//     </FormControl>
//   )
// }

const Field: React.FC<IField> = ({ control, name, label, placeholder, type = 'text' }) => {
  return (
    <Controller
      defaultValue={''}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} variant='standard' fullWidth>
          <InputLabel required shrink htmlFor='field'>
            {label}
          </InputLabel>
          <Input {...field} id={name} placeholder={placeholder} type={type} fullWidth />
          <FormHelperText>{fieldState.error && fieldState.error.message}</FormHelperText>
        </FormControl>

        // <FormControl isInvalid={!!fieldState.error}>
        //   <Label name={name} label={label} icon={icon} />
        //   <Input
        //     focusBorderColor={'transparent'}
        //     errorBorderColor={'transparent'}
        //     _placeholder={{ color: 'gray.400' }}
        //     _focus={{
        //       bg: 'gray.100',
        //     }}
        //     type={type}
        //     variant='filled'
        //     id={name}
        //     placeholder={label}
        //     {...field}
        //   />
        //   <FormErrorMessage>{fieldState.error && fieldState.error.message}</FormErrorMessage>
        // </FormControl>
      )}
    />
  )
}

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '.MuiFormLabel-root': {
    fontSize: '20px !important',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
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
