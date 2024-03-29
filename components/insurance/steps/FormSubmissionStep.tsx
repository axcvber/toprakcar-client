import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Image from 'next/image'
import OrderTable from '../../OrderTable'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import { useLocale } from '../../../hooks/useLocale'

const FormSubmissionStep = () => {
  const { thirdStepData } = useInsuranceContext()
  const t = useLocale()

  const formData = [
    {
      title: t.forms.labels.fullName,
      value: thirdStepData?.fullName,
    },
    {
      title: t.forms.labels.email,
      value: thirdStepData?.email,
    },
    {
      title: t.forms.labels.phone,
      value: thirdStepData?.phone,
    },
  ]

  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            {t.insurance.formSubmissionStep.title}
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            {t.insurance.formSubmissionStep.desc}
          </Typography>
        </Stack>
        <Stack>
          <OrderTable data={formData} />
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image priority layout='responsive' width={200} height={150} src={'/form-submition.svg'} alt='form-submitted' />
      </Box>
    </Stack>
  )
}

export default FormSubmissionStep
