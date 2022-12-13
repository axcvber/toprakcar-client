import { Container, Typography, Grid, Stack, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import FilterBar from '../components/filtration/FilterBar'
import FilterNav from '../components/filtration/FilterNav'
import HCard from '../components/HCard'
import ImageHeading from '../components/ImageHeading'
import Search from '../components/Search'
import Pagination from '@mui/material/Pagination'
import LocationFilter from '../components/filtration/LocationFilter'
import CustomizedSteppers from '../components/RentStepper'
import { useRentContext } from '../context/rent/rent-context'
import RentSteps from '../components/RentSteps'
import { GetServerSideProps, NextPage } from 'next'
import client from '../graphql/apollo-client'
import RentCarsList from '../components/rent/RentCarsList'
import { GetRentFiltersDocument, GetRentFiltersQuery, GetRentFiltersQueryVariables } from '../generated'
import { useFilterContext } from '../context/filter-context'

interface IFleetPage {
  filters: GetRentFiltersQuery
}

const FleetPage: NextPage<IFleetPage> = ({ filters }) => {
  const { currentStep } = useRentContext()

  return (
    <Container maxWidth='xl'>
      <ImageHeading>
        <Box width={1200}>
          <Search />
        </Box>
      </ImageHeading>

      <RentCarsList filters={filters} />
      {/* <RentSteps /> */}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { locale } = context
  const { data } = await client.query<GetRentFiltersQuery, GetRentFiltersQueryVariables>({
    query: GetRentFiltersDocument,
    // variables: {
    //   locale: locale,
    // },
  })

  return {
    props: {
      filters: data,
    },
  }
}

export default FleetPage
