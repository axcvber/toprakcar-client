import React, { useEffect } from 'react'
import { Grid, Stack } from '@mui/material'
import LocationFilter from '../filtration/LocationFilter'
import FilterBar from '../filtration/FilterBar'
import FilterNav from '../filtration/FilterNav'
import Loader from '../Loader'
import Skeleton from '@mui/material/Skeleton'
import { GetRentFiltersQuery, RentCarEntity, useRentCarsQuery } from '../../generated'
import HCard from '../HCard'
import { FilterOption, useFilterContext } from '../../context/filter-context'
import { useRouter } from 'next/router'
import FilterList from '../filtration/FilterList'
import { filterEmptyArray } from '../../utils/filterEmptyArray'
import { useShopFilterContext } from '../../context/shop-filter/shop-filter-context'
import { useRentContext } from '../../context/rent/rent-context'

interface IRentCarsList {
  withLocationChange?: boolean
}

const RentCarsList: React.FC<IRentCarsList> = ({ withLocationChange }) => {
  // const { filtered, deleteFilter, clearFilter } = useFilterContext()
  const { setFilterData, filtered, deleteFilter, clearFilter, carState } = useShopFilterContext()
  const { pickUpLocation, currentStep, setCurrentStep, setSelectedCar } = useRentContext()

  const router = useRouter()
  const { data, loading, error, refetch } = useRentCarsQuery({
    variables: {
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })

  useEffect(() => {
    console.log('changed filtered', filtered)

    refetch({
      address: pickUpLocation ? pickUpLocation?.id : undefined,
      brands: filterEmptyArray(filtered.brands),
      // vehicleClasses: filterEmptyArray(filtered.vehicleClasses),
      bodyStyles: filterEmptyArray(filtered.bodyStyles),
      fuelTypes: filterEmptyArray(filtered.fuelTypes),
      transmissions: filterEmptyArray(filtered.transmissions),
    })
  }, [filtered, refetch, pickUpLocation])

  if (error) {
    console.error(error)
    return null
  }

  const handleSelectCar = (carItem: RentCarEntity) => {
    setSelectedCar(carItem)
    setCurrentStep(2)
    router.push('/fleet/reservation')
  }

  return (
    <Grid container spacing={3}>
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
      </Grid>
    </Grid>
  )
}

export default RentCarsList
