import { Box, Button, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import Heading from '../../Heading'
import VCard from '../../VCard'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { TbGasStation } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import FleetsNavigation from './FleetsNavigation'
import { FaCarAlt } from 'react-icons/fa'
import { IoCarSportOutline } from 'react-icons/io5'
import { HiOutlineExternalLink } from 'react-icons/hi'

const data = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667134669/pngwing.com_11_tfibsn.png',
    name: 'Mercedes-Benz SLS',
    price: '850 ₺ /d',
    year: 2020,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137857/pngwing.com_29_fqxhrc.png',
    name: 'Mercedes-Benz G-Class',
    price: '850 ₺ /d',
    year: 2016,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137858/pngegg_1_hv6crb.png',
    name: 'Mercedes-Benz Maybach',
    price: '850 ₺ /d',
    year: 2019,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137868/pngegg_2_nwdfst.png',
    name: 'Mercedes-Benz AMG GT',
    price: '850 ₺ /d',
    year: 2020,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
  {
    id: 5,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137867/pngegg_3_lwotia.png',
    name: 'Mercedes-Benz E-Class',
    price: '850 ₺ /d',
    year: 2017,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
  {
    id: 6,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137866/pngegg_4_buxr5j.png',
    name: 'Mercedes-Benz C-Class',
    price: '850 ₺ /d',
    year: 2016,
    widthButton: true,
    btnText: 'Rent Now',
    options: [
      {
        icon: <BsSpeedometer2 />,
        text: '20k',
      },
      {
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
    ],
  },
]

const Fleets = () => {
  return (
    <Container sx={{ my: 20 }}>
      <Heading
        width={500}
        label={'Our Fleets'}
        title='Explore Our Top Deal From Top-Rated Dealer'
        align='center'
        withLine
      />
      <Stack alignItems='center' mt={4} gap={4}>
        {/* <FleetsNavigation /> */}
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
              <VCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Button startIcon={<HiOutlineExternalLink />} variant='outlined' size='large'>
          More Vehicles
        </Button>
      </Stack>
    </Container>
  )
}

export default Fleets
