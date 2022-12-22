import React from 'react'
import { Stack, Typography } from '@mui/material'
import Line from '../../styles/shared/Line'
import { Maybe } from '../../generated'

interface IHeading {
  label?: Maybe<string>
  title: string
  align?: 'left' | 'center'
  width?: number
  desc?: Maybe<string>
  withLine?: boolean
  color?: string
}

const Heading: React.FC<IHeading> = ({ width, label, title, align = 'left', desc, withLine, color = 'inherit' }) => {
  return (
    <Stack alignItems={align === 'center' ? 'center' : 'flex-start'}>
      <Stack
        sx={{ color }}
        alignItems={align === 'center' ? 'center' : 'flex-start'}
        maxWidth={width}
        textAlign={align}
        spacing={1.5}
      >
        {label && (
          <Typography fontWeight={500} color='text.disabled' textTransform={'uppercase'}>
            {label}
          </Typography>
        )}
        <Typography variant='h4' fontWeight={600}>
          {title}
        </Typography>
        {withLine && <Line />}
        {desc && <Typography fontWeight={500}>{desc}</Typography>}
      </Stack>
    </Stack>
  )
}

export default Heading
