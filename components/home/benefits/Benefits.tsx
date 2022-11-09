import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../../Heading'
import IconBox from '../../IconBox'
import { ImPriceTags } from 'react-icons/im'
import { MdPayments } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { RiMedal2Fill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { GiAutoRepair } from 'react-icons/gi'
import Image from 'next/image'

type LinePlacement = 'top-left' | 'middle-left' | 'bottom-left' | 'right-top' | 'right-middle' | 'right-bottom'

const leftSideData = [
  {
    id: 1,
    icon: <ImPriceTags />,
    label: 'Competitive Pricing',
    placement: 'top-left' as LinePlacement,
  },
  {
    id: 2,
    icon: <RiMoneyDollarCircleFill />,
    label: 'Easier Rent On Your Budget',
    placement: 'middle-left' as LinePlacement,
  },
  {
    id: 3,
    icon: <MdPayments />,
    label: 'Most Flexible Payment Plans',
    placement: 'bottom-left' as LinePlacement,
  },
]

const rightSideData = [
  {
    id: 4,
    icon: <ImPriceTags />,
    label: 'The Best Extended Auto Warranties',
    placement: 'top-left' as LinePlacement,
  },
  {
    id: 5,
    icon: <BiSupport />,
    label: 'Roadside Assistance 24/7',
    placement: 'middle-left' as LinePlacement,
  },
  {
    id: 6,
    icon: <RiMedal2Fill />,
    label: 'Your Choise Of Mechanic',
    placement: 'bottom-left' as LinePlacement,
  },
]

const Line: React.FC<{ placement: LinePlacement; rightSide?: boolean }> = ({ placement, rightSide }) => {
  let path = '/top-line.png'
  let width
  let height

  switch (placement) {
    case 'top-left':
      path = '/top-line.png'
      width = 225
      height = 145
      break

    case 'middle-left':
      path = '/middle-line.png'
      width = 248
      height = 15
      break

    case 'bottom-left':
      path = '/bottom-line.png'
      width = 150
      height = 15
      break

    default:
      break
  }

  return (
    <Box
      sx={{
        marginLeft: rightSide ? 0 : -8,
        marginRight: rightSide ? -8 : 0,
        marginTop: 3,
        transform: rightSide ? 'scaleX(-1)' : 'none',
        display: 'block',
        maxWidth: '100%',
      }}
    >
      <Image
        // layout='responsive'
        width={width}
        height={height}
        objectFit='contain'
        src={path}
        alt='line'
      />
    </Box>
  )
}

const Benefits = () => {
  return (
    <Container>
      <Heading
        width={450}
        desc={'You cannot put a price on your family’s safety and security on the road. Find a lower price?'}
        title='We Are Ensuring The Best Customer Experience'
        align='center'
      />
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'space-between',
          background: 'gray',
          width: '100%',
        }}
      >
        <Stack spacing={5} justifyContent='space-around'>
          {leftSideData.map((item) => (
            <Stack key={item.id} direction='row' justifyContent={'center'}>
              <Stack spacing={2} maxWidth={150}>
                <IconBox icon={item.icon} variant='small' />
                <Typography fontWeight={600}>{item.label}</Typography>
              </Stack>
              <Line placement={item.placement} />
            </Stack>
          ))}
        </Stack>

        <Box width={'600px'}>
          <Image
            width={500}
            height={900}
            layout='responsive'
            src='https://res.cloudinary.com/doea7ahfk/image/upload/v1667158574/Image_p5dapl.png'
            alt='car'
          />
        </Box>

        <Stack spacing={5} justifyContent='space-around'>
          {rightSideData.map((item) => (
            <Stack key={item.id} direction='row'>
              <Line rightSide placement={item.placement} />
              <Stack spacing={2} maxWidth={150} alignItems='flex-end' textAlign={'right'}>
                <IconBox icon={item.icon} variant='small' />
                <Typography fontWeight={600}>{item.label}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={8}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          mt: 1,
        }}
      >
        {leftSideData.map((item) => (
          <Grid key={item.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item.icon} variant='small' />
              <Typography fontWeight={600} variant='body2'>
                {item.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
        {rightSideData.map((item) => (
          <Grid key={item.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item.icon} variant='small' />
              <Typography fontWeight={600} variant='body2'>
                {item.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Benefits
