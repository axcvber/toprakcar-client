import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import { UploadFileEntity } from '../../../generated'

interface IBrands {
  data: UploadFileEntity[]
}

const Brands: React.FC<IBrands> = ({ data }) => {
  return (
    <Container maxWidth={'xl'} sx={{ my: { xs: 8, md: 10 } }}>
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
        spaceBetween={30}
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
                width: '100%',
                height: '80px',
                userSelect: 'none',
                position: 'relative',
              }}
            >
              <Image
                priority
                layout='fill'
                objectFit='contain'
                src={item.attributes?.url || ''}
                alt={item.attributes?.alternativeText || ''}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Brands
