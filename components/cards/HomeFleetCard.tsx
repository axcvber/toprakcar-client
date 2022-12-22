import { Box, Button, Grid, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BiCar } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MODAL_TYPES } from '../../context/modalContext'
import { useRentContext } from '../../context/rent/rent-context'
import { RentCarEntity } from '../../generated'
import { useModal } from '../../hooks/useModal'
import CarOption from '../CarOption'

interface IHomeFleetCard {
  item: RentCarEntity
}

const HomeFleetCard: React.FC<IHomeFleetCard> = ({ item }) => {
  const { showModal } = useModal()

  const handleSelectCar = () => {
    showModal(MODAL_TYPES.SEARCH_MODAL, {
      rentCar: item,
    })
  }

  return (
    <Stack
      p={2}
      spacing={2}
      sx={{
        background: '#fff',
        borderRadius: 4,
        // boxShadow: 25,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: 4,
        }}
      >
        <Image
          width='100%'
          height={80}
          layout='responsive'
          objectFit='contain'
          src={item.attributes?.image.data?.attributes?.url || ''}
          placeholder='blur'
          blurDataURL={item.attributes?.image.data?.attributes?.url || ''}
          alt={item.attributes?.image.data?.attributes?.alternativeText || ''}
        />
      </Box>
      <Stack direction='row' justifyContent={'space-between'} spacing={1}>
        <div>
          <Typography variant='h6' fontWeight={600} mb={0.5}>
            {item.attributes?.name}
          </Typography>

          <Stack direction='row' spacing={1}>
            <Typography component='span' color='primary' variant='h6' fontWeight={600}>
              {item.attributes?.price.currentPrice.toLocaleString()} ₺ /d
            </Typography>
            {item.attributes?.price.showDiscounted && item.attributes?.price.fullPrice && (
              <Typography
                component='span'
                color='text.disabled'
                variant='body2'
                fontWeight={500}
                sx={{ textDecoration: 'line-through', pt: 0.3 }}
              >
                {item.attributes?.price.fullPrice.toLocaleString()} ₺ /d
              </Typography>
            )}
          </Stack>
        </div>
      </Stack>

      <Divider />

      <Grid container component='ul' columnGap={4} rowGap={2}>
        {item.attributes?.vehicle_class?.data && (
          <CarOption icon={<FiBarChart />} label={item.attributes?.vehicle_class?.data?.attributes?.title} />
        )}
        {item.attributes?.fuel_type?.data && (
          <CarOption icon={<TbGasStation />} label={item.attributes?.fuel_type?.data?.attributes?.type} />
        )}
        {item.attributes?.passengers && (
          <CarOption icon={<MdAirlineSeatLegroomNormal />} label={item.attributes?.passengers} />
        )}
        {item.attributes?.transmission?.data && (
          <CarOption icon={<TbManualGearbox />} label={item.attributes?.transmission?.data?.attributes?.type} />
        )}

        {item.attributes?.body_style?.data && (
          <CarOption icon={<BiCar />} label={item.attributes?.body_style?.data?.attributes?.style} />
        )}
      </Grid>

      <Button variant='contained' size='extra' onClick={handleSelectCar}>
        Rent Now
      </Button>
    </Stack>
  )
}

export default HomeFleetCard
