import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Image from 'next/image'
import OrderTable from '../../OrderTable'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'

const FormSubmissionStep = () => {
  const { thirdStepData } = useInsuranceContext()

  const formData = [
    {
      title: 'Full Name',
      value: thirdStepData?.fullName,
    },
    {
      title: 'Email',
      value: thirdStepData?.email,
    },
    {
      title: 'Phone',
      value: thirdStepData?.phone,
    },
  ]

  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            {"Toprakcar'i terci̇h etti̇ği̇ni̇z i̇çi̇n teşekkür ederi̇z"}
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            Yöneticilerimiz kısa süre içinde sizinle iletişime geçecektir
          </Typography>
        </Stack>
        <Stack>
          <OrderTable data={formData} />
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image priority layout='responsive' width={200} height={150} src={'/form-submition.svg'} alt='svgicon' />
      </Box>
    </Stack>
  )
}

export default FormSubmissionStep
