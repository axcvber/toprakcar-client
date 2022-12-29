import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { InsuranceContactsSchema } from '../../../schemas/insurance/insurance-contacts'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import { useSnackbar } from 'notistack'
import axios from 'axios'
import { useLocale } from '../../../hooks/useLocale'

export interface IContactInfoInputs {
  fullName: string
  phone: string
  email: string
}

const ContactInfoStep = () => {
  const { incrementCurrentStep, setThirdStepData, firstStepData, secondStepData, thirdStepData } = useInsuranceContext()
  const t = useLocale()
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<IContactInfoInputs>({
    resolver: yupResolver(InsuranceContactsSchema()),
    defaultValues: thirdStepData,
  })

  const { enqueueSnackbar } = useSnackbar()

  const onSubmit: SubmitHandler<IContactInfoInputs> = async (data) => {
    const formData = {
      firstStepData,
      secondStepData,
      thirdStepData: data,
    }
    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formName: 'Insurance', formData })
      setThirdStepData(data)
      incrementCurrentStep()
      enqueueSnackbar(t.notistack.successSubmit, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(t.notistack.errorSubmit, { variant: 'error' })
    }
  }

  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            {t.insurance.contactInfoStep.title}
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            {t.insurance.contactInfoStep.desc}
          </Typography>
        </Stack>
        <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Field
            name='fullName'
            control={control}
            label={t.forms.labels.fullName}
            placeholder={t.forms.labels.fullName}
          />
          <Field
            name='email'
            control={control}
            label={t.forms.labels.email}
            placeholder={t.forms.labels.email}
            type='email'
          />
          <Field
            name='phone'
            control={control}
            label={t.forms.labels.phone}
            placeholder={t.forms.labels.phone}
            type='number'
          />
          <Button disabled={isSubmitting} type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
            {isSubmitting ? t.button.loading : t.button.submit}
          </Button>
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image priority layout='responsive' width={200} height={150} src={'/contact-info.svg'} alt='svgicon' />
      </Box>
    </Stack>
  )
}

export default ContactInfoStep
