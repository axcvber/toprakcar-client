import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal } from 'react-icons/md'
import VehicleShopCard from '../../components/VehicleShopCard'
import FilterNav from '../../components/filtration/FilterNav'
import FilterBar from '../../components/filtration/FilterBar'
import {
  GetShopFiltersQuery,
  GetShopFiltersDocument,
  useSaleCarsQuery,
  FindAvailableShopFiltersQuery,
  FindAvailableShopFiltersDocument,
  GetShopFiltersQueryVariables,
} from '../../generated'
import Loader from '../../components/Loader'
import Skeleton from '@mui/material/Skeleton'
import { GetServerSideProps, NextPage } from 'next'
import client from '../../graphql/apollo-client'
import { useShopFilterContext } from '../../context/shop-filter/shop-filter-context'
import ShopFilter from '../../components/shop/ShopFilter'
import { useRouter } from 'next/router'
import { filterEmptyArray } from '../../utils/filterEmptyArray'

interface IFleetPage {
  filters: GetShopFiltersQuery
}

const ShopPage: NextPage<IFleetPage> = ({ filters }) => {
  const { setFilterData, filtered } = useShopFilterContext()
  const router = useRouter()

  const { data, loading, error, refetch } = useSaleCarsQuery({
    variables: {
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })

  useEffect(() => {
    setFilterData(filters)
  }, [])

  useEffect(() => {
    refetch({
      state: filtered.carState,
      price: filtered.priceRange.value,
      brands: filterEmptyArray(filtered.brands),
      bodyStyles: filterEmptyArray(filtered.bodyStyles),
      fuelTypes: filterEmptyArray(filtered.fuelTypes),
      transmissions: filterEmptyArray(filtered.transmissions),
      mileage: filtered.mileageRange.value,
      year: filtered.yearRange.value,
    })
  }, [filtered])

  console.log('shop data', data)

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
          <FilterBar>
            <ShopFilter />
          </FilterBar>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { locale } = context
  const { data: availableFilters } = await client.query<FindAvailableShopFiltersQuery>({
    query: FindAvailableShopFiltersDocument,
  })
  const brandsId = availableFilters.salesCars?.data.map((item) => item.attributes?.brand?.data?.id)
  const bodyStylesId = availableFilters.salesCars?.data.map((item) => item.attributes?.body_style?.data?.id)
  const fuelTypesId = availableFilters.salesCars?.data.map((item) => item.attributes?.fuel_type?.data?.id)
  const transmissionsId = availableFilters.salesCars?.data.map((item) => item.attributes?.transmission?.data?.id)
  const exteriorColorsId = availableFilters.salesCars?.data.map((item) => item.attributes?.exterior_color?.data?.id)
  const interiorColorsId = availableFilters.salesCars?.data.map((item) => item.attributes?.interior_color?.data?.id)

  const helper = (availableFilters: any): string[] | undefined => {
    if (!availableFilters.length) {
      return undefined
    }
    return Array.from(new Set(availableFilters))
  }

  const { data } = await client.query<GetShopFiltersQuery, GetShopFiltersQueryVariables>({
    query: GetShopFiltersDocument,
    variables: {
      brands: helper(brandsId),
      bodyStyles: helper(bodyStylesId),
      fuelTypes: helper(fuelTypesId),
      transmissions: helper(transmissionsId),
      exteriorColors: helper(exteriorColorsId),
      interiorColors: helper(interiorColorsId),
    },
  })

  return {
    props: {
      filters: data,
    },
  }
}

export default ShopPage
