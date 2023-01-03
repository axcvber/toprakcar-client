import { Button, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { BrandEntity, Maybe } from '../../../generated'
import SVG from 'react-inlinesvg'
import { useLocale } from '../../../hooks/useLocale'

interface IFleetsNavigation {
  brands?: (Maybe<BrandEntity> | undefined)[]
  selectedBrand?: Maybe<string>
  onSelectBrand: (id?: Maybe<string>) => void
}

const FleetsNavigation: React.FC<IFleetsNavigation> = ({ brands, selectedBrand, onSelectBrand }) => {
  const t = useLocale()

  if (!brands?.length) {
    return null
  }

  return (
    <StyledSwiper slidesPerView={'auto'} observer spaceBetween={15}>
      {brands.map((item) => (
        <SwiperSlide key={item?.id} style={{ width: 'auto' }}>
          <Button
            sx={{
              '.icon': {
                transition: 'all 0.1s ease',
                width: 22,
                height: 22,
                fill: item?.id === selectedBrand ? '#fff' : '#777',
              },
            }}
            onClick={() => onSelectBrand(item?.id)}
            size='large'
            variant='contained'
            color={item?.id === selectedBrand ? 'primary' : 'inherit'}
            startIcon={<SVG className='icon' src={item?.attributes?.logoSvg.data?.attributes?.url || ''} />}
          >
            {item?.attributes?.name}
          </Button>
        </SwiperSlide>
      ))}
      <SwiperSlide style={{ width: 'auto' }}>
        <Link href='/fleet' passHref>
          <Button size='large' variant='contained' color='inherit'>
            {t.button.explore}
            <Typography ml={1} component='span' fontWeight={600} color='primary'>
              10+
            </Typography>
          </Button>
        </Link>
      </SwiperSlide>
    </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: 'auto',
  padding: '10px 0 !important',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))

export default FleetsNavigation
