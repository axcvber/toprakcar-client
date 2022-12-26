import React, { useEffect } from 'react'
import { CircularProgress, Container, Typography } from '@mui/material'
import { useRentContext } from '../../context/rent/rent-context'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import ImageHeading from '../../components/heading/ImageHeading'
import { useLocale } from '../../hooks/useLocale'
import RentStepper from '../../components/rent/steps/RentStepper'
import { FleetPage, GetFleetPageDocument, GetFleetPageQuery, GetFleetPageQueryVariables } from '../../generated'
import { GetStaticProps, NextPage } from 'next'
import client from '../../graphql/apollo-client'
import SeoSingle from '../../components/seo/SeoSingle'

interface IReservationPage {
  pageData: FleetPage
}

const ReservationPage: NextPage<IReservationPage> = ({ pageData }) => {
  const { pickUpLocation, currentStep } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  useEffect(() => {
    if (!pickUpLocation) {
      router.replace('/fleet')
    }
  }, [router, pickUpLocation])

  if (!pickUpLocation) {
    return (
      <Stack width={'100%'} minHeight={'calc(100vh - 70px)'} justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container maxWidth='xl'>
        <ImageHeading bgImage={pageData.headingImage.data?.attributes?.url || ''}>
          <Typography variant='h4' color='#fff'>
            {t.reservation.stepLabels[currentStep]}
          </Typography>
        </ImageHeading>
        <RentStepper stepLabels={t.reservation.stepLabels} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<GetFleetPageQuery, GetFleetPageQueryVariables>({
    query: GetFleetPageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.fleetPage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default ReservationPage
