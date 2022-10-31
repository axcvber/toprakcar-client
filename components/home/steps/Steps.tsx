import { Stack, Typography, Box, Container } from '@mui/material'
import React from 'react'
import Heading from '../../Heading'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendarCheckFill, BsCalendarDateFill } from 'react-icons/bs'
import { styled } from '@mui/material/styles'
import IconBox from '../../IconBox'

const data = [
  {
    id: 1,
    icon: <IoLocationSharp />,
    title: 'Choose a location',
    subtitle: 'See 3 popular hotels at a heavily disconted price.',
  },
  {
    id: 2,
    icon: <BsCalendarCheckFill />,
    title: 'Pick-ud date',
    subtitle: 'Click choose and we’ll pick one of the 3 hotels',
  },
  {
    id: 3,
    icon: <BsCalendarDateFill />,
    title: 'Book your car',
    subtitle: 'See which hotel right after you book!',
  },
]

const Steps = () => {
  return (
    <Container>
      <Heading label={'How it works'} title='Rentgo following 3 working Steps' align='center' />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center', md: 'flex-start' }}
        mt={8}
        spacing={{ xs: 10, md: 0 }}
      >
        {data.map((item, inx) => (
          <React.Fragment key={item.id}>
            <Stack alignItems={'center'} sx={{ textAlign: 'center', maxWidth: '250px' }}>
              <IconBox isActive={inx === 1} icon={item.icon} variant='large' />
              <Typography variant='h6' fontWeight={600} mt={2}>
                {item.title}
              </Typography>
              <Typography mt={1} fontSize='15px'>
                {item.subtitle}
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

const StepBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ isActive, theme }) => ({
  width: '100px',
  height: '100px',
  border: `2px solid ${theme.palette.primary.main}`,
  background: '#fff',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  color: theme.palette.primary.main,
  'svg': {
    fontSize: '35px',
  },
  ...(isActive && {
    background: theme.palette.primary.main,
    color: '#fff',
    boxShadow: theme.shadows[5],
  }),
}))

export default Steps
