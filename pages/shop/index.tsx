import React, { useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import VehicleShopCard from '../../components/cards/VehicleShopCard'
import FilterNav from '../../components/filtration/FilterNav'
import FilterBar from '../../components/filtration/FilterBar'
import {
  GetShopPageDocument,
  GetShopPageQuery,
  GetShopPageQueryVariables,
  ShopPage,
  useSaleCarsQuery,
} from '../../generated'
import Loader from '../../components/Loader'
import Skeleton from '@mui/material/Skeleton'
import { useFilterContext } from '../../context/filter/filter-context'
import ShopFilter from '../../components/shop/ShopFilter'
import { useRouter } from 'next/router'
import { filterEmptyArray } from '../../utils/filterEmptyArray'
import Paginator from '../../components/Paginator'
import { GetStaticProps, NextPage } from 'next'
import client from '../../graphql/apollo-client'
import SeoSingle from '../../components/seo/SeoSingle'

interface IShopPage {
  pageData: ShopPage
}

const ShopPage: NextPage<IShopPage> = ({ pageData }) => {
  const { filtered, clearFilter, carState, sortBy } = useFilterContext()
  const router = useRouter()

  const { data, loading, error, refetch } = useSaleCarsQuery({
    variables: {
      locale: router.locale,
      start: 0,
      limit: 20,
      state: carState,
      price: filtered.priceRange ? filtered.priceRange.value : undefined,
      brands: filterEmptyArray(filtered.brands),
      bodyStyles: filterEmptyArray(filtered.bodyStyles),
      fuelTypes: filterEmptyArray(filtered.fuelTypes),
      transmissions: filterEmptyArray(filtered.transmissions),
      sortBy: [sortBy],
      mileage: filtered.mileageRange ? filtered.mileageRange.value : undefined,
      year: filtered.yearRange ? filtered.yearRange.value : undefined,
      exteriorColor: filterEmptyArray(filtered.exteriorColor),
      interiorColor: filterEmptyArray(filtered.interiorColor),
    },
  })

  const page = data?.salesCars?.meta.pagination.page
  const pageSize = data?.salesCars?.meta.pagination.pageSize
  const totalCount = data?.salesCars?.meta.pagination.total
  const pageCount = data?.salesCars?.meta.pagination.pageCount

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [data, loading])

  useEffect(() => {
    return () => clearFilter()
  }, [])

  const handlePageChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    console.log('selectedPage', selectedPage)

    if (selectedPage !== page) {
      if (pageSize) {
        refetch({
          start: (selectedPage - 1) * pageSize,
        })
      }
    }
  }

  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container maxWidth='xl' sx={{ my: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
            <FilterBar>
              <ShopFilter />
            </FilterBar>
          </Grid>
          <Grid item xs={12} lg={9}>
            <FilterNav totalResultCount={totalCount} isLoading={loading} />
            <Grid component='ul' container spacing={3}>
              {loading ? (
                <Loader quantity={20}>
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
            <Paginator page={page} pageCount={pageCount} totalCount={totalCount} handleChange={handlePageChange} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<GetShopPageQuery, GetShopPageQueryVariables>({
    query: GetShopPageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.shopPage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default ShopPage
