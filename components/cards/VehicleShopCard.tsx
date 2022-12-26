import React from 'react'
import { Box, Divider, Stack, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { SalesCarEntity } from '../../generated'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import { BiCar, BiCrosshair } from 'react-icons/bi'

interface IVehicleShopCard {
  item: SalesCarEntity
}

const VehicleShopCard: React.FC<IVehicleShopCard> = ({ item }) => {
  return (
    <Link href={`/shop/${item.attributes?.slug}`} passHref>
      <Stack
        component='a'
        p={2}
        spacing={2}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'background 0.1s linear',
          '&:hover': {
            backgroundColor: 'grey.50',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <Image
            width='100%'
            height={80}
            layout='responsive'
            objectFit='cover'
            src={item.attributes?.image.data?.attributes?.url || ''}
            placeholder='blur'
            blurDataURL={item.attributes?.image.data?.attributes?.url || ''}
            alt='car'
          />
        </Box>
        <Stack spacing={1}>
          <Stack spacing={0.5}>
            <Typography variant='h6' color='text.primary' fontWeight={600}>
              {item.attributes?.name}
            </Typography>

            <Typography variant='body2' color='text.secondary' fontWeight={500}>
              {item.attributes?.model?.data?.attributes?.model}
            </Typography>
            <Stack direction='row' spacing={1}>
              <Typography component='span' color='primary' variant='h6' fontWeight={600}>
                {item.attributes?.price.currentPrice.toLocaleString()} ₺
              </Typography>
              {item.attributes?.price.showDiscounted && item.attributes?.price.fullPrice && (
                <Typography
                  component='span'
                  color='text.disabled'
                  variant='body2'
                  fontWeight={500}
                  sx={{ textDecoration: 'line-through', pt: 0.3 }}
                >
                  {item.attributes?.price.fullPrice.toLocaleString()} ₺
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Grid container component='ul' gap={2}>
          <CarOption icon={<BsSpeedometer2 />} label={item.attributes?.mileage.toLocaleString()} />

          {item.attributes?.transmission?.data && (
            <CarOption icon={<TbManualGearbox />} label={item.attributes?.transmission?.data?.attributes?.type} />
          )}
          {item.attributes?.body_style?.data && (
            <CarOption icon={<BiCar />} label={item.attributes?.body_style?.data?.attributes?.style} />
          )}

          {item.attributes?.fuel_type?.data && (
            <CarOption icon={<TbGasStation />} label={item.attributes?.fuel_type?.data.attributes?.type} />
          )}
          <CarOption icon={<MdAirlineSeatLegroomNormal />} label={item.attributes?.passengers} />
          <CarOption icon={<BiCrosshair />} label={item.attributes?.year} />
        </Grid>
      </Stack>
    </Link>
  )
}

interface ICarOption {
  icon: JSX.Element
  label?: string | number
}

const CarOption: React.FC<ICarOption> = ({ icon, label }) => {
  return (
    <Grid item component='li'>
      <Stack
        spacing={0.5}
        direction='row'
        alignItems={'center'}
        sx={{
          color: 'text.disabled',
          'svg': {
            fontSize: 18,
          },
        }}
      >
        {icon}
        <Typography component='span' variant='body2' fontWeight={500}>
          {label}
        </Typography>
      </Stack>
    </Grid>
  )
}

export default VehicleShopCard
