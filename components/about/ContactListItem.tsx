import React from 'react'
import { Box, Container, Stack, Grid, Typography } from '@mui/material'
import Markdown from '../Markdown'

interface IContactListItem {
  title?: string
  text?: string
}

const ContactListItem: React.FC<IContactListItem> = ({ title, text }) => {
  return (
    <Stack spacing={1} maxWidth={900}>
      <Typography variant='h6' fontWeight={600}>
        {title}
      </Typography>
      <Markdown content={text} />
    </Stack>
  )
}

export default ContactListItem
