import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import LocationFilter from '../filtration/LocationFilter'
import FilterBar from '../filtration/FilterBar'
import FilterNav from '../filtration/FilterNav'
import Loader from '../Loader'
import Skeleton from '@mui/material/Skeleton'
import { RentCarEntity, useRentCarsQuery } from '../../generated'
import HCard from '../cards/HCard'
import { useRouter } from 'next/router'
import FilterList from './RentFilter'
import { filterEmptyArray } from '../../utils/filterEmptyArray'
import { useFilterContext } from '../../context/filter/filter-context'
import { useRentContext } from '../../context/rent/rent-context'
import { useSnackbar } from 'notistack'
import Paginator from '../Paginator'
import { useLocale } from '../../hooks/useLocale'

interface IRentCarsList {
  withLocationChange?: boolean
}

const RentCarsList: React.FC<IRentCarsList> = ({ withLocationChange }) => {
  const { filtered, deleteFilter, clearFilter, carState, sortBy } = useFilterContext()
  const { pickUpLocation, pickUpDate, dropOffDate, currentStep, setCurrentStep, setSelectedCar } = useRentContext()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const t = useLocale()

  const router = useRouter()
  const { data, loading, error, refetch } = useRentCarsQuery({
    variables: {
      locale: router.locale,
      start: 0,
      limit: 20,
      sortBy: [sortBy],
      address: pickUpLocation ? pickUpLocation?.id : undefined,
      price: filtered.priceRange ? filtered.priceRange.value : undefined,
      brands: filterEmptyArray(filtered.brands),
      vehicleClasses: filterEmptyArray(filtered.vehicleClasses),
      bodyStyles: filterEmptyArray(filtered.bodyStyles),
      fuelTypes: filterEmptyArray(filtered.fuelTypes),
      transmissions: filterEmptyArray(filtered.transmissions),
    },
  })

  useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 300, left: 0 })
    }
  }, [data, loading])

  if (error) {
    console.error(error)
    return null
  }

  const page = data?.rentCars?.meta.pagination.page
  const pageSize = data?.rentCars?.meta.pagination.pageSize
  const totalCount = data?.rentCars?.meta.pagination.total
  const pageCount = data?.rentCars?.meta.pagination.pageCount

  const handleSelectCar = (carItem: RentCarEntity) => {
    if (pickUpLocation && pickUpDate && dropOffDate) {
      setSelectedCar(carItem)
      setCurrentStep(2)
      if (router.pathname === '/fleet') {
        router.push('/fleet/reservation')
      }
    } else {
      enqueueSnackbar(t.validation.search.required, { variant: 'error' })
    }
  }

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
    <Grid container spacing={3} mb={2}>
      <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
        {withLocationChange && <LocationFilter />}
        <FilterBar>
          <FilterList />
        </FilterBar>
      </Grid>
      <Grid item xs={12} lg={9}>
        <FilterNav totalResultCount={data?.rentCars?.meta.pagination.total} isLoading={loading} />

        <Grid container spacing={3}>
          {loading ? (
            <Loader quantity={6}>
              <Grid item xs={12} sm={6} md={4} lg={12}>
                <Skeleton width={'100%'} height={220} sx={{ borderRadius: 4 }} />
              </Grid>
            </Loader>
          ) : (
            data?.rentCars?.data.map((item: any) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={12}>
                <HCard item={item} handleSelect={() => handleSelectCar(item)} />
              </Grid>
            ))
          )}
        </Grid>
        <Paginator page={page} pageCount={pageCount} totalCount={totalCount} handleChange={handlePageChange} />
      </Grid>
    </Grid>
  )
}

export default RentCarsList
