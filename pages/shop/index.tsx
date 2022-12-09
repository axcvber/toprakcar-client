import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import VehicleShopCard from '../../components/VehicleShopCard'
import FilterNav from '../../components/filtration/FilterNav'
import FilterBar from '../../components/filtration/FilterBar'
import { useSaleCarsQuery } from '../../generated'
import Loader from '../../components/Loader'
import Skeleton from '@mui/material/Skeleton'

const ShopPage = () => {
  const { data, loading, error, refetch } = useSaleCarsQuery({
    // variables: {
    //   locale: router.locale,
    // },
    notifyOnNetworkStatusChange: true,
  })

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
          <FilterBar forShopPage />
        </Grid>
        <Grid item xs={12} lg={9}>
          <FilterNav forShopPage totalCount={data?.salesCars?.meta.pagination.total} isLoading={loading} />
          <Grid component='ul' container spacing={3}>
            {loading ? (
              <Loader quantity={6}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Skeleton width={'100%'} height={440} sx={{ borderRadius: 4 }} />
                </Grid>
              </Loader>
            ) : (
              data?.salesCars?.data.map((item: any) => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} component='li'>
                  <VehicleShopCard item={item} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShopPage
