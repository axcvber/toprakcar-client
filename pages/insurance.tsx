import React from 'react'
import { Stack, Typography, Divider, Button } from '@mui/material'

const InsurancePage = () => {
  return (
    <Stack spacing={3} alignItems='flex-start'>
      <Button color='inherit'>Button</Button>
      <Button color='inherit' variant='outlined'>
        Button
      </Button>
      <Button color='inherit' variant='contained'>
        Button
      </Button>
    </Stack>
  )
}

export default InsurancePage
