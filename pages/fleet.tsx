import { Container, Typography, Grid, Stack } from '@mui/material'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import FilterBar from '../components/FilterBar'
import FilterNav from '../components/FilterNav'
import HCard from '../components/HCard'
import ImageHeading from '../components/ImageHeading'
import Search from '../components/Search'
import Pagination from '@mui/material/Pagination'

const vehicles = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667134669/pngwing.com_11_tfibsn.png',
    name: 'Mercedes-Benz SLS',
    price: '850 ₺ /d',
    year: 2019,
    options: [
      {
        id: 1,
        icon: <BsSpeedometer2 />,
        text: '120km Mileage',
      },
      {
        id: 2,
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        id: 3,
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        id: 4,
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
      {
        id: 5,
        icon: <BiSupport />,
        text: '24/7 Support',
      },
      {
        id: 6,
        icon: <MdOutlineCancel />,
        text: 'Free Cancellation',
      },
      {
        id: 7,
        icon: <FiBarChart />,
        text: 'Middle class',
      },
    ],
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137857/pngwing.com_29_fqxhrc.png',
    name: 'Mercedes-Benz G-Class',
    price: '850 ₺ /d',
    year: 2019,
    options: [
      {
        id: 1,
        icon: <BsSpeedometer2 />,
        text: '120km Mileage',
      },
      {
        id: 2,
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        id: 3,
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        id: 4,
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
      {
        id: 5,
        icon: <BiSupport />,
        text: '24/7 Support',
      },
      {
        id: 6,
        icon: <MdOutlineCancel />,
        text: 'Free Cancellation',
      },
      {
        id: 7,
        icon: <FiBarChart />,
        text: 'Middle class',
      },
    ],
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137858/pngegg_1_hv6crb.png',
    name: 'Mercedes-Benz Maybach',
    price: '850 ₺ /d',
    year: 2019,
    options: [
      {
        id: 1,
        icon: <BsSpeedometer2 />,
        text: '120km Mileage',
      },
      {
        id: 2,
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        id: 3,
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        id: 4,
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
      {
        id: 5,
        icon: <BiSupport />,
        text: '24/7 Support',
      },
      {
        id: 6,
        icon: <MdOutlineCancel />,
        text: 'Free Cancellation',
      },
      {
        id: 7,
        icon: <FiBarChart />,
        text: 'Middle class',
      },
    ],
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137868/pngegg_2_nwdfst.png',
    name: 'Mercedes-Benz AMG GT',
    price: '850 ₺ /d',
    year: 2019,
    options: [
      {
        id: 1,
        icon: <BsSpeedometer2 />,
        text: '120km Mileage',
      },
      {
        id: 2,
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        id: 3,
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        id: 4,
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
      {
        id: 5,
        icon: <BiSupport />,
        text: '24/7 Support',
      },
      {
        id: 6,
        icon: <MdOutlineCancel />,
        text: 'Free Cancellation',
      },
      {
        id: 7,
        icon: <FiBarChart />,
        text: 'Middle class',
      },
    ],
  },
  {
    id: 5,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667137867/pngegg_3_lwotia.png',
    name: 'Mercedes-Benz SLS',
    price: '850 ₺ /d',
    year: 2019,
    options: [
      {
        id: 1,
        icon: <BsSpeedometer2 />,
        text: '120km Mileage',
      },
      {
        id: 2,
        icon: <TbManualGearbox />,
        text: 'Auto',
      },
      {
        id: 3,
        icon: <TbGasStation />,
        text: 'Disel',
      },
      {
        id: 4,
        icon: <MdAirlineSeatLegroomNormal />,
        text: '4',
      },
      {
        id: 5,
        icon: <BiSupport />,
        text: '24/7 Support',
      },
      {
        id: 6,
        icon: <MdOutlineCancel />,
        text: 'Free Cancellation',
      },
      {
        id: 7,
        icon: <FiBarChart />,
        text: 'Middle class',
      },
    ],
  },
]

const FleetPage = () => {
  return (
    <Container maxWidth='xl'>
      <ImageHeading>
        {/* <Typography variant={'h3'} color='#fff'>
          Choose a Vehicle
        </Typography> */}
        <Search />
      </ImageHeading>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FilterBar />
        </Grid>
        <Grid item xs={9}>
          <FilterNav />
          <Stack spacing={2} mt={3}>
            {vehicles.map((item) => (
              <HCard key={item.id} {...item} />
            ))}
          </Stack>
          <Stack my={5} alignItems='center'>
            <Pagination color='primary' count={10} variant='outlined' shape='rounded' />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FleetPage
