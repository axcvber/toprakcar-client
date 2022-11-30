import React from 'react'
import { Container, Typography, Grid, Stack, Box } from '@mui/material'
import LocationFilter from '../filtration/LocationFilter'
import FilterBar from '../FilterBar'
import FilterNav from '../FilterNav'
import HCard from '../HCard'
import Pagination from '@mui/material/Pagination'
import { BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { useRentContext } from '../../context/rent-context'

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

const ChooseVehicleStep = () => {
  const { setCurrentStep, setSelectedCar } = useRentContext()

  const handleSelectCar = (id: number) => {
    setSelectedCar(id)
    setCurrentStep(2)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
        <LocationFilter />
        <FilterBar />
      </Grid>
      <Grid item xs={12} lg={9}>
        <FilterNav />
        <Grid container spacing={3}>
          {vehicles.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={12}>
              <HCard {...item} buttonCallback={handleSelectCar} />
            </Grid>
          ))}
        </Grid>
        <Stack my={5} alignItems='center'>
          <Pagination color='primary' count={10} variant='outlined' shape='rounded' />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ChooseVehicleStep
