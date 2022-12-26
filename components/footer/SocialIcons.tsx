import React from 'react'
import { Stack, Box } from '@mui/material'
import { ComponentMainSocialNetworks } from '../../generated'
import SVG from 'react-inlinesvg'

interface ISocialIcons {
  icons: ComponentMainSocialNetworks[]
}

const SocialIcons: React.FC<ISocialIcons> = ({ icons }) => {
  return (
    <Stack direction='row' spacing={2} component='ul'>
      {icons &&
        icons.map((item) => (
          <li key={item.id}>
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <Box
                sx={(theme) => ({
                  background: 'rgba(0,0,0,0.2)',
                  p: 1.4,
                  borderRadius: 2,
                  display: 'flex',
                  transition: 'all 0.1s linear',
                  'svg': {
                    fill: '#fff',
                    width: 18,
                    height: 18,
                  },
                  '&:hover': {
                    background: '#fff',
                    cursor: 'pointer',
                    'svg': {
                      fill: theme.palette.text.primary,
                    },
                  },
                })}
              >
                <SVG src={item.svgIcon.data?.attributes?.url || ''} />
              </Box>
            </a>
          </li>
        ))}
    </Stack>
  )
}

export default SocialIcons
