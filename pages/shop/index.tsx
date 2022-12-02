import React from 'react'
import { Grid, Container } from '@mui/material'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import VehicleShopCard from '../../components/VehicleShopCard'
import FilterNav from '../../components/filtration/FilterNav'
import FilterBar from '../../components/filtration/FilterBar'

const data = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667134669/pngwing.com_11_tfibsn.png',
    name: 'Mercedes-Benz SLS',
    fullPrice: '613 899 ₺',
    currentPrice: '603 899 ₺',
    isDiscount: true,
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
    fullPrice: '613 899 ₺',
    currentPrice: '603 899 ₺',
    isDiscount: true,
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
    fullPrice: '613 899 ₺',
    currentPrice: '603 899 ₺',
    isDiscount: true,
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
    fullPrice: '613 899 ₺',
    currentPrice: '603 899 ₺',
    isDiscount: true,
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
    fullPrice: '613 899 ₺',
    currentPrice: '603 899 ₺',
    isDiscount: true,
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
    fullPrice: null,
    currentPrice: '613 899 ₺',
    isDiscount: false,
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

const ShopPage = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
          <FilterBar />
        </Grid>
        <Grid item xs={12} lg={9}>
          <FilterNav />
          <Grid component='ul' container spacing={3}>
            {data.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} component='li'>
                <VehicleShopCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShopPage
