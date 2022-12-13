import React from 'react'
import { Stack, Typography } from '@mui/material'

interface IAboutItem {
  title?: string
  text?: string
}

const AboutItem: React.FC<IAboutItem> = ({ title, text }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        paddingTop: '30px',
        '&:before': {
          position: 'relative',
          counterIncrement: 'li',
          content: `'0' counter(li)`,
          marginBottom: 2,
          color: 'primary.main',
          fontSize: '32px',
          fontWeight: 600,
        },
      }}
    >
      <Typography variant='h5' fontWeight={600}>
        {title}
      </Typography>
      <Typography color='text.secondary' lineHeight={1.8} variant='body2'>
        {text}
      </Typography>
    </Stack>
  )
}
export default AboutItem
