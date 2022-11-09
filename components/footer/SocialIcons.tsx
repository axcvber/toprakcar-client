import React from 'react'
import { Stack, Box } from '@mui/material'

interface ISocialIcons {
  icons: Array<any>
}

const SocialIcons: React.FC<ISocialIcons> = ({ icons }) => {
  return (
    <Stack direction='row' spacing={2} component='ul'>
      {icons.map((item) => (
        <li key={item.id}>
          <a href={item.link} target='_blank' rel='noopener noreferrer'>
            <Box
              sx={{
                background: 'rgba(0,0,0,0.2)',
                p: 1.4,
                borderRadius: 2,
                display: 'flex',
                transition: 'all 0.1s linear',
                'svg': {
                  color: '#fff',
                  fontSize: 18,
                },
                '&:hover': {
                  background: '#fff',
                  cursor: 'pointer',
                  'svg': {
                    color: 'text.primary',
                  },
                },
              }}
            >
              {item.icon}
            </Box>
          </a>
        </li>
      ))}
    </Stack>
  )
}

export default SocialIcons
