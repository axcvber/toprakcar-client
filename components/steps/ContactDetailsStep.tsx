import React from 'react'
import { Grid } from '@mui/material'
import OrderSummary from '../OrderSummary'
import AdditionalServices from '../AdditionalServices'
import PersonalInfoForm from '../forms/PersonalInfoForm'
import { useRentContext } from '../../context/rent-context'

const ContactDetailsStep = () => {
  const { setCurrentStep } = useRentContext()

  const handleSubmit = () => {
    setCurrentStep(3)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OrderSummary />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <AdditionalServices />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <PersonalInfoForm />
      </Grid>
    </Grid>
  )
}

export default ContactDetailsStep
