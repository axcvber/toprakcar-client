import React from 'react'
import { Grid, Stack } from '@mui/material'
import LocationFilter from '../filtration/LocationFilter'
import FilterBar from '../filtration/FilterBar'
import FilterNav from '../filtration/FilterNav'
import HCard from '../HCard'
import Pagination from '@mui/material/Pagination'
import { BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { useRentContext } from '../../context/rent/rent-context'
import { useRentCarsQuery } from '../../generated'
import Skeleton from '@mui/material/Skeleton'
import Loader from '../Loader'
import RentCarsList from '../rent/RentCarsList'
import { useShopFilterContext } from '../../context/shop-filter/shop-filter-context'

const ChooseVehicleStep = () => {
  const { setFilterData, filtered, clearFilter, carState, sortBy, data } = useShopFilterContext()

  // const { setCurrentStep, setSelectedCar } = useRentContext()
  // const handleSelectCar = (item: any) => {
  //   setSelectedCar(item)
  //   setCurrentStep(2)
  // }

  return (
    <>
      <RentCarsList withLocationChange />
      {/* <span>sadas</span> */}
    </>

    // <Grid container spacing={3}>
    //   <Grid item xs={0} lg={3} display={{ xs: 'none', lg: 'block' }}>
    //     <LocationFilter />
    //     {/* <FilterBar /> */}
    //   </Grid>
    //   <Grid item xs={12} lg={9}>
    //     <FilterNav totalCount={data?.rentCars?.meta.pagination.total} isLoading={loading} />

    //     <Grid container spacing={3}>
    //       {loading ? (
    //         <Loader quantity={6}>
    //           <Grid item xs={12} sm={6} md={4} lg={12}>
    //             <Skeleton width={'100%'} height={220} sx={{ borderRadius: 4 }} />
    //           </Grid>
    //         </Loader>
    //       ) : (
    //         data?.rentCars?.data.map((item: any) => (
    //           <Grid key={item.id} item xs={12} sm={6} md={4} lg={12}>
    //             <HCard item={item} buttonCallback={handleSelectCar} />
    //           </Grid>
    //         ))
    //       )}
    //     </Grid>
    //     <Stack my={5} alignItems='center'>
    //       <Pagination color='primary' count={10} variant='outlined' shape='rounded' />
    //     </Stack>
    //   </Grid>
    // </Grid>
  )
}

export default ChooseVehicleStep
