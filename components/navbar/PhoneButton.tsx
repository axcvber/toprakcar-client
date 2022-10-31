import { Button } from '@mui/material'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'

const PhoneButton = () => {
  return (
    <Button
      component='a'
      size='large'
      href={'tel:05056360132'}
      variant='outlined'
      startIcon={<FiPhoneCall />}
      sx={{ fontWeight: 600 }}
    >
      +505 843 30 32
    </Button>
  )
}

export default PhoneButton
