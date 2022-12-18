import React from 'react'
import { Box, Button, Chip, Divider, Stack, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RentCarEntity } from '../generated'
import { BiCar, BiSupport } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbEngine, TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { BsSpeedometer2 } from 'react-icons/bs'
import { useModal } from '../hooks/useModal'
import { MODAL_TYPES } from '../context/modalContext'

interface IHCard {
  item: RentCarEntity
  handleSelect: () => void
}

const HCard: React.FC<IHCard> = ({ item, handleSelect }) => {
  const { showModal } = useModal()

  const showMoreInfo = (title?: string, content?: string) => {
    showModal(MODAL_TYPES.RENT_CAR_INFO_MODAL, {
      title,
      content,
    })
  }

  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      alignItems='flex-start'
      spacing={3}
      p={2.5}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        // boxShadow: 25,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', md: '300px' },
          backgroundColor: 'grey.100',
          borderRadius: 3,
        }}
      >
        <Image
          width='100%'
          height={60}
          layout='responsive'
          objectFit='contain'
          src={item.attributes?.image.data?.attributes?.url || ''}
          placeholder='blur'
          blurDataURL={item.attributes?.image.data?.attributes?.url || ''}
          alt='car'
        />
      </Box>
      <Stack width={'100%'} flex={1} spacing={3}>
        <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent='space-between' alignItems='flex-start' gap={3}>
          <div>
            <Typography variant='h6' fontWeight={600} mb={1}>
              {item.attributes?.name}
            </Typography>
            <Typography component='span' color='primary' variant='h5' fontWeight={600}>
              {item.attributes?.price.fullPrice?.toLocaleString()} ₺ /d
            </Typography>
          </div>

          <Stack
            direction={{ xs: 'row-reverse', lg: 'row' }}
            gap={2}
            alignItems='center'
            justifyContent='flex-end'
            flexWrap='wrap-reverse'
          >
            <Button
              size={'large'}
              variant='outlined'
              startIcon={<AiOutlineInfoCircle />}
              onClick={() => showMoreInfo(item.attributes?.name, item.attributes?.moreInfo)}
            >
              More Info
            </Button>
            <Button size={'large'} variant='contained' sx={{ px: 5 }} onClick={handleSelect}>
              Select
            </Button>
          </Stack>
        </Stack>

        <Divider />

        <Grid container component='ul' columnGap={4} rowGap={2}>
          {item.attributes?.vehicle_class?.data && (
            <CarOption icon={<FiBarChart />} label={item.attributes?.vehicle_class?.data?.attributes?.title} />
          )}
          {item.attributes?.fuel_type?.data && (
            <CarOption icon={<TbGasStation />} label={item.attributes?.fuel_type?.data?.attributes?.type} />
          )}

          {item.attributes?.transmission?.data && (
            <CarOption icon={<TbManualGearbox />} label={item.attributes?.transmission?.data?.attributes?.type} />
          )}

          {item.attributes?.passengers && (
            <CarOption icon={<MdAirlineSeatLegroomNormal />} label={item.attributes?.passengers} />
          )}
          {item.attributes?.body_style?.data && (
            <CarOption icon={<BiCar />} label={item.attributes?.body_style?.data?.attributes?.style} />
          )}
          <CarOption icon={<BsSpeedometer2 />} label={'Unlimited mileage'} />
          <CarOption icon={<BiSupport />} label={'24/7 Support'} />
          <CarOption icon={<MdOutlineCancel />} label={'Free Cancellation'} />
        </Grid>
      </Stack>
    </Stack>
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
        spacing={1}
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
        <Typography component='span' fontWeight={500} fontSize={{ xs: 14, md: 16 }}>
          {label}
        </Typography>
      </Stack>
    </Grid>
  )
}

export default HCard
