import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { InsuranceContactsSchema } from '../../../schemas/insurance-contacts'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import { useSnackbar } from 'notistack'
import axios from 'axios'

export interface IContactInfoInputs {
  fullName: string
  phone: string
  email: string
}

const ContactInfoStep = () => {
  const { incrementCurrentStep, setThirdStepData, firstStepData, secondStepData, thirdStepData } = useInsuranceContext()

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<IContactInfoInputs>({
    resolver: yupResolver(InsuranceContactsSchema()),
    defaultValues: thirdStepData,
  })

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const onSubmit: SubmitHandler<IContactInfoInputs> = async (data) => {
    const formData = {
      firstStepData,
      secondStepData,
      thirdStepData: data,
    }
    console.log('data', data)
    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formName: 'Insurance', formData })
      setThirdStepData(data)
      incrementCurrentStep()
      enqueueSnackbar('Success', { variant: 'success' })
      // toast({
      //   description: t.form.notify.successFormSend,
      //   status: 'success',
      //   duration: 5000,
      //   isClosable: true,
      // })
      // reset()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            Teklifler Neredeyse Hazır!
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            Kaydettiğiniz tüm bilgiler Koalay ile her zaman güvende.
          </Typography>
        </Stack>
        <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Field name='fullName' control={control} label={'Full Name'} placeholder={'Full Name'} />
          <Field name='email' control={control} label={'Email'} placeholder={'Email'} type='email' />
          <Field name='phone' control={control} label={'Phone'} placeholder={'Phone'} type='tel' />
          <Button disabled={isSubmitting} type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
            {isSubmitting ? 'Loading...' : 'Devam Et'}
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
