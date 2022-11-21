import React from 'react'
import { Box, Container, Stack, Grid, Typography } from '@mui/material'

interface IContactListItem {
  title: string
  text: string
}

const ContactListItem: React.FC<IContactListItem> = ({ title, text }) => {
  return (
    <Stack spacing={1}>
      <Typography variant='h6' fontWeight={500}>
        {title}
      </Typography>
      <Typography lineHeight={2} color='text.secondary'>
        {text}
      </Typography>
    </Stack>
  )
}

export default ContactListItem
