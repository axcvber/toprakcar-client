import { Container, Typography, Grid, Stack, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiBarChart } from 'react-icons/fi'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { GetServerSideProps, NextPage } from 'next'
import { GetRentFiltersDocument, GetRentFiltersQuery, GetRentFiltersQueryVariables } from '../../generated'
import ImageHeading from '../../components/ImageHeading'
import Search from '../../components/Search'
import RentCarsList from '../../components/rent/RentCarsList'
import RentSteps from '../../components/RentSteps'
import client from '../../graphql/apollo-client'
import { useShopFilterContext } from '../../context/shop-filter/shop-filter-context'
import { useRouter } from 'next/router'

interface IFleetPage {
  filters: GetRentFiltersQuery
}

const FleetPage: NextPage<IFleetPage> = ({ filters }) => {
  const { setFilterData, clearFilter } = useShopFilterContext()

  useEffect(() => {
    setFilterData(filters)
  }, [])

  return (
    <Container maxWidth='xl'>
      <ImageHeading>
        <Search />
      </ImageHeading>

      <RentCarsList />

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
