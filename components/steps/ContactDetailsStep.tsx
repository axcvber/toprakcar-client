import React from 'react'
import { Box, Container, Grid, Stack, Typography, Divider, Paper } from '@mui/material'
import LocationItem from '../LocationItem'
import Image from 'next/image'
import { BsSpeedometer2 } from 'react-icons/bs'
import { TbGasStation, TbManualGearbox } from 'react-icons/tb'
import { MdAirlineSeatLegroomNormal, MdOutlineCancel } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
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
      <Grid item xs={12} md={8} lg={9} onClick={handleSubmit}>
        <PersonalInfoForm />
      </Grid>
    </Grid>
  )
}

export default ContactDetailsStep
