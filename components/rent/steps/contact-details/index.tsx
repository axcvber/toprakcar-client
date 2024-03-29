import React from 'react'
import { Grid } from '@mui/material'
import OrderSummary from './OrderSummary'
import AdditionalServices from './AdditionalServices'
import PersonalInfoForm from './PersonalInfoForm'
import { useRentContext } from '../../../../context/rent/rent-context'
import { useGetAddRentServicesQuery } from '../../../../generated'

const ContactDetailsStep = () => {
  const { selectedCar } = useRentContext()

  const { data, loading, error, refetch } = useGetAddRentServicesQuery({
    variables: {
      id: selectedCar?.id,
      // locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OrderSummary />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <AdditionalServices data={data?.rentCar?.data?.attributes?.additionalServices as any} />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <PersonalInfoForm />
      </Grid>
    </Grid>
  )
}

export default ContactDetailsStep
