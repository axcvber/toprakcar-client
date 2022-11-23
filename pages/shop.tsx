import React from 'react'
import { Button, Stack } from '@mui/material'
import { FiPhoneCall } from 'react-icons/fi'

const ShopPage = () => {
  return (
    <div>
      <Button variant='contained' size='extra'>
        button
      </Button>
      <Button variant='contained' size='medium'>
        button
      </Button>
      <Button variant='contained' size='large'>
        button
      </Button>
      <br />
      <Button startIcon={<FiPhoneCall />} size='small'>
        +505 843 30 32
      </Button>
      <br />
      <Button startIcon={<FiPhoneCall />} size='medium'>
        +505 843 30 32
      </Button>
      <br />
      <Button startIcon={<FiPhoneCall />} size='large'>
        +505 843 30 32
      </Button>

      <Button variant='outlined' startIcon={<FiPhoneCall />}>
        +505 843 30 32
      </Button>
    </div>
  )
}

export default ShopPage
