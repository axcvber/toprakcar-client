import { Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import { CgBmw } from 'react-icons/cg'
import { SiAudi, SiHonda, SiMazda, SiMercedes, SiToyota } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react'
import { styled } from '@mui/material/styles'

const data = [
  {
    id: 1,
    icon: <SiMercedes />,
    label: 'Mercedes',
  },
  {
    id: 2,
    icon: <SiHonda />,
    label: 'Honda',
  },
  {
    id: 3,
    icon: <SiToyota />,
    label: 'Toyota',
  },
  {
    id: 4,
    icon: <CgBmw />,
    label: 'BMW',
  },
  {
    id: 5,
    icon: <SiAudi />,
    label: 'Audi',
  },
  {
    id: 6,
    icon: <SiMazda />,
    label: 'Mazda',
  },
]

const FleetsNavigation = () => {
  return (
    <StyledSwiper slidesPerView={'auto'} observer spaceBetween={15}>
      {data.map((item, inx) => (
        <SwiperSlide key={item.id} style={{ width: 'auto' }}>
          <Button
            size='large'
            variant='contained'
            color={inx === 0 ? 'primary' : 'inherit'}
            startIcon={item.icon}
            sx={{ fontWeight: 600, border: '1px solid', borderColor: 'divider' }}
          >
            {item.label}
          </Button>
        </SwiperSlide>
      ))}
      <SwiperSlide style={{ width: 'auto' }}>
        <Button
          size='large'
          variant='contained'
          color='inherit'
          sx={{ fontWeight: 600, border: '1px solid', borderColor: 'divider' }}
        >
          Explore
          <Typography ml={1} component='span' fontWeight={600} color='primary'>
            10+
          </Typography>
        </Button>
      </SwiperSlide>
    </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: 'auto',
  // background: 'red',
  padding: '10px 0 !important',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))

export default FleetsNavigation
