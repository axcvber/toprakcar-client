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

const ContactDetailsStep = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <OrderSummary />
      </Grid>
      <Grid item xs={3}>
        <AdditionalServices />
      </Grid>
      <Grid item xs={9}>
        <PersonalInfoForm />
      </Grid>
    </Grid>
  )
}

export default ContactDetailsStep
