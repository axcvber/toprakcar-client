import React from 'react'
import { Box, Grid, Stack, Typography, Divider } from '@mui/material'
import Image from 'next/image'
import LocationItem from '../../../layout/LocationItem'
import Paper from '../../../layout/Paper'
import { useRentContext } from '../../../../context/rent/rent-context'
import CarOption from '../../../cards/components/CarOption'
import { FiBarChart } from 'react-icons/fi'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { BiCar, BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useLocale } from '../../../../hooks/useLocale'

const OrderSummary = () => {
  const { pickUpLocation, dropOffLocation, selectedCar, dropOffDate, pickUpDate, orderSummary } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  return (
    <Paper>
      <Grid container spacing={{ xs: 6, md: 3, lg: 6 }}>
        <Grid item xs={12} md={3.5} lg={3}>
          <Stack spacing={3}>
            <Typography variant='h6' fontWeight={600}>
              {t.reservation.rideDetails}
            </Typography>
            <Divider />
            <LocationItem
              title={t.reservation.pickUp}
              address={pickUpLocation?.address}
              date={pickUpDate?.locale(router.locale as string).format('LLL')}
            />
            <LocationItem
              title={t.reservation.dropOff}
              address={dropOffLocation?.address}
              date={dropOffDate?.locale(router.locale as string).format('LLL')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <Stack spacing={2}>
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'grey.100',
                borderRadius: 3,
                height: { xs: 200, sm: 300, md: 200 },
                position: 'relative',
              }}
            >
              <Image
                layout='fill'
                objectFit='contain'
                src={selectedCar?.attributes?.image.data?.attributes?.url || ''}
                placeholder='blur'
                blurDataURL={selectedCar?.attributes?.image.data?.attributes?.url || ''}
                alt={selectedCar?.attributes?.image.data?.attributes?.alternativeText || ''}
              />
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={600} mb={2}>
                {selectedCar?.attributes?.name}
              </Typography>
              <Grid container component='ul' columnGap={4} rowGap={2}>
                {selectedCar?.attributes?.vehicle_class?.data && (
                  <CarOption
                    icon={<FiBarChart />}
                    label={selectedCar?.attributes?.vehicle_class?.data?.attributes?.title}
                  />
                )}
                {selectedCar?.attributes?.fuel_type?.data && (
                  <CarOption
                    icon={<TbGasStation />}
                    label={selectedCar?.attributes?.fuel_type?.data?.attributes?.type}
                  />
                )}

                {selectedCar?.attributes?.transmission?.data && (
                  <CarOption
                    icon={<TbManualGearbox />}
                    label={selectedCar?.attributes?.transmission?.data?.attributes?.type}
                  />
                )}

                {selectedCar?.attributes?.passengers && (
                  <CarOption icon={<MdAirlineSeatLegroomNormal />} label={selectedCar?.attributes?.passengers} />
                )}
                {selectedCar?.attributes?.body_style?.data && (
                  <CarOption icon={<BiCar />} label={selectedCar?.attributes?.body_style?.data?.attributes?.style} />
                )}
                <CarOption icon={<BsSpeedometer2 />} label={'Unlimited mileage'} />
                <CarOption icon={<BiSupport />} label={'24/7 Support'} />
                <CarOption icon={<MdOutlineCancel />} label={'Free Cancellation'} />
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.5} lg={3}>
          <Stack spacing={3}>
            <Typography variant='h6' fontWeight={600}>
              {t.reservation.summary.title}
            </Typography>
            <Divider />

            <Stack direction='row' justifyContent={'space-between'} color='text.secondary'>
              <Stack spacing={2}>
                <Typography fontWeight={500}>{t.reservation.summary.daysNum}:</Typography>
                <Typography fontWeight={500}>{t.reservation.summary.rentPrice}:</Typography>
                <Typography fontWeight={500}>{t.reservation.summary.extras}:</Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography fontWeight={600}>{orderSummary?.dayCount}</Typography>
                <Typography fontWeight={600}>{orderSummary?.rentPrice.toLocaleString()} ₺</Typography>
                <Typography fontWeight={600}>{orderSummary?.extrasPrice.toLocaleString()} ₺</Typography>
              </Stack>
            </Stack>

            <Divider />
            <Stack direction='row' justifyContent={'space-between'}>
              <Typography variant='h6' fontWeight={600}>
                {t.reservation.summary.totalAmount}:
              </Typography>
              <Typography variant='h6' color='primary.main' fontWeight={600}>
                {orderSummary?.totalAmount.toLocaleString()} ₺
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OrderSummary
