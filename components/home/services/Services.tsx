import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Line from '../../../styles/shared/Line'
import Heading from '../../Heading'
import { styled } from '@mui/material/styles'
import { ImPriceTags } from 'react-icons/im'
import { FaWallet } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import IconBox from '../../IconBox'

const data = [
  {
    id: 1,
    icon: <ImPriceTags />,
    title: 'Deals for every budget',
    description: 'Incredible prices cars and packages worldwide.',
  },
  {
    id: 2,
    icon: <FaWallet />,
    title: 'Best price guaranteed',
    description: 'Incredible prices cars and packages worldwide.',
  },
  {
    id: 3,
    icon: <BiSupport />,
    title: 'Support 24/7',
    description: 'Incredible prices cars and packages worldwide.',
  },
]

const Services = () => {
  return (
    <Container>
      <Stack my={8} direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'space-between'} spacing={5}>
        <Box
          sx={{
            // position: 'absolute',
            // top: 0,
            // left: 0,
            width: '100%',
            marginLeft: { xs: -10, md: -40 },
            // transform: 'translateX(-55%)',
          }}
        >
          <Image
            width={970}
            height={750}
            src='https://res.cloudinary.com/doea7ahfk/image/upload/v1667081575/pngwing.com_33_o2hscc.png'
            alt='range'
            objectFit='contain'
          />
        </Box>
        <Stack maxWidth={'500px'} spacing={4}>
          <Heading
            label={'BEST SEVICES'}
            title='Feel the best expirience with our rental deals'
            align='left'
            withLine
          />
          <Stack component={'ul'} spacing={3}>
            {data.map((item) => (
              <Stack key={item.id} component={'li'} direction='row' spacing={3}>
                <IconBox icon={item.icon} variant='small' />
                <Box maxWidth={'300px'}>
                  <Typography variant='h6' fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography mt={1}>{item.description}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

const ServiceItem = styled('div')(({ theme }) => ({}))

export default Services
