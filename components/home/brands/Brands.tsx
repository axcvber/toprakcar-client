import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Box, Container } from '@mui/material'
import Image from 'next/image'

const data = [
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580699/pngwing.com_27_ztq9hf.png',
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580703/pngwing.com_23_ciwmvv.png',
  },
  {
    id: 3,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580708/pngwing.com_21_lpujuc.png',
  },
  {
    id: 4,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580711/pngwing.com_22_sdukyv.png',
  },
  {
    id: 5,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580724/pngwing.com_25_abvmjw.png',
  },
  {
    id: 6,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580733/pngwing.com_20_qlilx0.png',
  },
  {
    id: 7,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580736/pngwing.com_24_m7etvk.png',
  },
  {
    id: 8,
    imageUrl: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1667580741/pngwing.com_26_eaei3w.png',
  },
]

const Brands = () => {
  return (
    <Container maxWidth={'xl'} sx={{ my: 10 }}>
      <Swiper
        wrapperTag='ul'
        observer
        slidesPerView={4}
        loop
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} tag='li'>
            <Box
              sx={{
                filter: 'saturate(0)',
                opacity: 0.5,
                // background: 'red',
                width: '100%',
                height: '80px',
                userSelect: 'none',
              }}
            >
              <Image priority layout='fill' objectFit='contain' src={item.imageUrl} alt='brand' />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Brands
