import { Button } from '@mui/material'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { useAppContext } from '../../context/appContext'

const PhoneButton = () => {
  const { initialData } = useAppContext()
  const number = initialData?.contact?.data?.attributes?.phoneNumbers[0]?.phone
  return (
    <Button
      component='a'
      size='large'
      href={`tel:${number}`}
      variant='outlined'
      startIcon={<FiPhoneCall />}
      sx={{ fontWeight: 600 }}
    >
      {number}
    </Button>
  )
}

export default PhoneButton
