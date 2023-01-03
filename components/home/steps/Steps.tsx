import { Stack, Typography, Box, Container } from '@mui/material'
import React from 'react'
import Heading from '../../heading/Heading'
import { styled } from '@mui/material/styles'
import IconBox from '../../layout/IconBox'
import { ComponentHomeSteps } from '../../../generated'

interface ISteps {
  data: ComponentHomeSteps
}

const Steps: React.FC<ISteps> = ({ data }) => {
  return (
    <Container sx={{ pt: 6, pb: 10 }}>
      <Heading
        label={data.stepsHeading.label}
        title={data.stepsHeading.title}
        desc={data.stepsHeading.description}
        align='center'
      />

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center', md: 'flex-start' }}
        mt={{ xs: 8, md: 12 }}
        spacing={{ xs: 10, md: 0 }}
      >
        {data.stepOptions.map((item, inx) => (
          <React.Fragment key={item?.id}>
            <Stack alignItems={'center'} sx={{ textAlign: 'center', maxWidth: '250px' }}>
              <IconBox isActive={inx === 1} icon={item?.icon.data?.attributes?.url || ''} variant='large' />
              <Typography variant='h6' fontWeight={600} mt={2}>
                {item?.title}
              </Typography>
              <Typography mt={1} variant='body2'>
                {item?.description}
              </Typography>
            </Stack>
            {inx <= 1 && (
              <Box
                sx={{
                  width: { xs: '150px', md: '250px' },
                  height: '30px',
                  pb: { xs: 8, md: 10 },
                  transform: {
                    xs: inx === 0 ? 'rotate(-90deg)' : 'rotate(90deg)',
                    md: inx === 1 ? 'rotate(180deg)' : 'none',
                  },
                }}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='29' viewBox='0 0 215 29' fill='none'>
                  <path
                    d='M214 28C130.807 -8.21424 84.1723 -7.78512 1.00001 28'
                    stroke='#FF8A5D'
                    strokeWidth='2'
                    strokeDasharray='13 13'
                  />
                </svg>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Container>
  )
}

export default Steps
