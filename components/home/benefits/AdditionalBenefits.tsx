import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { MdDone } from 'react-icons/md'
import { ComponentMainIconBox, Maybe } from '../../../generated'
import SVG from 'react-inlinesvg'

interface IAdditionalBenefits {
  data: Maybe<ComponentMainIconBox>[]
}

const AdditionalBenefits: React.FC<IAdditionalBenefits> = ({ data }) => {
  return (
    <Stack component='ul' direction='row' gap={3} justifyContent='center' flexWrap='wrap'>
      {data.map((item) => (
        <Stack
          key={item?.id}
          direction='row'
          alignItems='center'
          spacing={1.5}
          component='li'
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: 3,
            p: 1,
          }}
        >
          <Box
            sx={(theme) => ({
              background: '#fff',
              borderRadius: 2,
              p: 1,
              display: 'flex',
              'svg': {
                width: 22,
                height: 22,
                fill: theme.palette.text.secondary,
                color: theme.palette.text.secondary,
              },
            })}
          >
            <SVG src={item?.icon.data?.attributes?.url || ''} />
          </Box>
          <Typography fontWeight={600} variant='body2'>
            {item?.title}
          </Typography>
          <MdDone fontSize={24} color='#FF8A5D' />
        </Stack>
      ))}
    </Stack>
  )
}

export default AdditionalBenefits
