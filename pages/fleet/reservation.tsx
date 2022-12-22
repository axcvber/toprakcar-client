import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { useShopFilterContext } from '../../context/shop-filter/shop-filter-context'
import { GetRentFiltersDocument, GetRentFiltersQuery, GetRentFiltersQueryVariables } from '../../generated'
import client from '../../graphql/apollo-client'
import { CircularProgress, Container, Typography } from '@mui/material'
import { useRentContext } from '../../context/rent/rent-context'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import ImageHeading from '../../components/heading/ImageHeading'
import { useLocale } from '../../hooks/useLocale'
import RentStepper from '../../components/rent/steps/RentStepper'

interface IReservationPage {
  filters: GetRentFiltersQuery
}

const ReservationPage: NextPage<IReservationPage> = ({ filters }) => {
  const { setFilterData } = useShopFilterContext()
  const { pickUpLocation, currentStep } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  useEffect(() => {
    if (!pickUpLocation) {
      router.replace('/fleet')
    }
    setFilterData(filters)
  }, [router, pickUpLocation])

  if (!pickUpLocation) {
    return (
      <Stack width={'100%'} minHeight={'100vh'} justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Container maxWidth='xl'>
      <ImageHeading>
        <Typography variant='h4' color='#fff'>
          {t.stepLabels[currentStep]}
        </Typography>
      </ImageHeading>
      <RentStepper stepLabels={t.stepLabels} />
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

export default ReservationPage
