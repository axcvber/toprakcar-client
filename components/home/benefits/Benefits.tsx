import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../../Heading'
import IconBox from '../../IconBox'
import { ImPriceTags } from 'react-icons/im'
import { MdElectricalServices, MdPayments } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { RiMedal2Fill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { GiAutoRepair } from 'react-icons/gi'
import Image from 'next/image'
import AdditionalBenefits from './AdditionalBenefits'
import { TbEngine, TbManualGearbox } from 'react-icons/tb'
import { BsThermometerSnow } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'
import { CgMoreO } from 'react-icons/cg'

type LinePlacement = 'top-left' | 'middle-left' | 'bottom-left' | 'right-top' | 'right-middle' | 'right-bottom'

const addBenefits = [
  {
    id: 1,
    icon: <TbEngine />,
    label: 'Engine',
  },
  {
    id: 2,
    icon: <TbManualGearbox />,
    label: 'Transmission',
  },
  {
    id: 3,
    icon: <MdElectricalServices />,
    label: 'Electrical',
  },
  {
    id: 4,
    icon: <BsThermometerSnow />,
    label: 'Cooling',
  },
  {
    id: 5,
    icon: <CgMoreO />,
    label: '10+ More',
  },
]

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
      height = 149
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
        transform: rightSide ? 'scaleX(-1)' : 'none',
        display: 'block',
        // background: 'red',
        width: { sm: '130px', lg: '180px' },
        position: 'absolute',
        top: 25,
        right: rightSide ? 'auto' : { sm: '-40%', lg: '-90%' },
        left: rightSide ? { sm: '-40%', lg: '-90%' } : 'auto',
        zIndex: 0,
      }}
    >
      <Image width={width} height={height} objectFit='contain' src={path} alt='line' />
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
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-around',
          width: '100%',
          mt: 6,
        }}
      >
        <Stack spacing={5} justifyContent='space-around'>
          {leftSideData.map((item) => (
            <Stack key={item.id} position='relative'>
              <Stack spacing={2} maxWidth={150}>
                <IconBox icon={item.icon} variant='small' />
                <Typography fontWeight={600}>{item.label}</Typography>
              </Stack>
              <Line placement={item.placement} />
            </Stack>
          ))}
        </Stack>

        <Box width={'500px'} sx={{ zIndex: 1 }}>
          <Image
            width={500}
            height={900}
            layout='responsive'
            objectFit='contain'
            src='https://res.cloudinary.com/doea7ahfk/image/upload/v1667158574/Image_p5dapl.png'
            alt='car'
          />
        </Box>

        <Stack spacing={5} justifyContent='space-around'>
          {rightSideData.map((item) => (
            <Stack key={item.id} direction='row' position='relative'>
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
          display: { xs: 'flex', md: 'none' },
          pt: 4,
        }}
      >
        {leftSideData.map((item) => (
          <Grid key={item.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item.icon} rounded />
              <Typography fontWeight={600} variant='body2'>
                {item.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
        {rightSideData.map((item) => (
          <Grid key={item.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item.icon} rounded />
              <Typography fontWeight={600} variant='body2'>
                {item.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box display={{ xs: 'none', md: 'block' }} my={3}>
        <AdditionalBenefits data={addBenefits} />
      </Box>
    </Container>
  )
}

export default Benefits
