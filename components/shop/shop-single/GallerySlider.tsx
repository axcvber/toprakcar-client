import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { UploadFileEntity } from '../../../generated'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { Stack, Box, Typography } from '@mui/material'
import { BiImages } from 'react-icons/bi'
import { Swiper as ST, ThumbsOptions } from 'swiper/types'
import IconButton from '@mui/material/IconButton'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

interface IGallerySlider {
  data: UploadFileEntity[]
}

const GallerySlider: React.FC<IGallerySlider> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <MainSlider
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          watchSlidesProgress={true}
          watchOverflow
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          loop={true}
          updateOnWindowResize
          observer
          observeParents
          onSlideChange={(swiper: ST) => setActiveIndex(swiper.realIndex + 1)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                width='100%'
                priority
                height={65}
                layout='responsive'
                objectFit='cover'
                src={item.attributes?.url || ''}
                placeholder='blur'
                blurDataURL={item.attributes?.url || ''}
                alt={item.attributes?.alternativeText || ''}
              />
            </SwiperSlide>
          ))}
        </MainSlider>
        <SliderControl prevRef={prevRef} nextRef={nextRef} activeSlide={activeIndex} totalSlidesCount={data.length} />
      </Box>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={7}
        observer
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          0: {
            slidesPerView: 5,
          },
          600: {
            slidesPerView: 7,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
        style={{ padding: '10px 0' }}
      >
        {data.map((item, inx: number) => (
          <BottomNavSlide key={item.id} isActive={inx + 1 === activeIndex}>
            <Image
              width={100}
              height={100}
              layout='responsive'
              objectFit='cover'
              src={item.attributes?.url || ''}
              placeholder='blur'
              blurDataURL={item.attributes?.url || ''}
              alt={item.attributes?.alternativeText || ''}
            />
          </BottomNavSlide>
        ))}
      </Swiper>
    </>
  )
}

interface ISliderControl {
  totalSlidesCount: number
  activeSlide: number
  prevRef: React.MutableRefObject<null>
  nextRef: React.MutableRefObject<null>
}

const SliderControl: React.FC<ISliderControl> = ({ activeSlide, totalSlidesCount, prevRef, nextRef }) => {
  return (
    <Stack
      width={'100%'}
      height={50}
      direction='row'
      justifyContent={'space-between'}
      alignItems='center'
      sx={{
        px: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: '#fff',
      }}
    >
      <Stack direction='row' alignItems='center' spacing={1} sx={{ color: 'primary.main' }}>
        <BiImages fontSize={20} />
        <Typography variant='body2' fontWeight={600}>
          {activeSlide} / {totalSlidesCount}
        </Typography>
      </Stack>

      <Stack direction='row' alignItems='center' spacing={1}>
        <IconButton
          ref={prevRef}
          aria-label='prev'
          color='primary'
          size='small'
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        >
          <FiChevronLeft />
        </IconButton>
        <IconButton
          ref={nextRef}
          aria-label='prev'
          color='primary'
          size='small'
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        >
          <FiChevronRight />
        </IconButton>
      </Stack>
    </Stack>
  )
}

const MainSlider = styled(Swiper)(({ theme }) => ({
  width: '100%',
  userSelect: 'none',
}))

const BottomNavSlide = styled(SwiperSlide, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  boxSizing: 'border-box',
  maxWidth: '100px',
  maxHeight: '100px',
  userSelect: 'none',
  borderRadius: '10px',
  border: '2px solid',
  borderColor: isActive ? theme.palette.primary.main : theme.palette.divider,
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    zIndex: 999,
    opacity: 0,
    transition: 'opacity 0.1s ease',
  },
  '&:hover': {
    '&:after': {
      opacity: 1,
    },
  },
}))

export default GallerySlider
