import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { MdDone } from 'react-icons/md'

interface IAdditionalBenefits {
  data: Array<any>
}

const AdditionalBenefits: React.FC<IAdditionalBenefits> = ({ data }) => {
  return (
    <Stack component='ul' direction='row' gap={3} justifyContent='center' flexWrap='wrap'>
      {data.map((item: any) => (
        <Stack
          key={item.id}
          direction='row'
          alignItems='center'
          spacing={1.5}
          component='li'
          sx={(theme) => ({
            background: theme.palette.grey[200],
            borderRadius: 3,
            px: 2,
            py: 1.5,
          })}
        >
          <Box
            sx={{
              background: '#fff',
              borderRadius: 2,
              p: 1,
              display: 'flex',
              'svg': {
                fontSize: 24,
                color: 'text.secondary',
              },
            }}
          >
            {item.icon}
          </Box>
          <Typography fontWeight={600}>{item.label}</Typography>
          <MdDone fontSize={24} color='#FF8A5D' />
        </Stack>
      ))}
    </Stack>
  )
}

export default AdditionalBenefits
