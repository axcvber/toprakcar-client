import React from 'react'
import { Stack, Typography, Divider, Button, Box, Container } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Field from '../../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'

const schema = yup.object().shape({
  brand: yup.string().required(),
  year: yup.number().typeError("That doesn't look like a number").min(1960).max(new Date().getFullYear()).required(),
  model: yup.string().trim().required(),
})

export interface IVehicleSelectInputs {
  brand: string
  year: string
  model: string
}

const VehicleSelectStep = () => {
  const { incrementCurrentStep, setSecondStepData, secondStepData } = useInsuranceContext()
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    watch,
    reset,
  } = useForm<IVehicleSelectInputs>({
    resolver: yupResolver(schema),
    defaultValues: secondStepData,
  })

  const onSubmit: SubmitHandler<IVehicleSelectInputs> = (data) => {
    console.log('data', data)
    setSecondStepData(data)
    incrementCurrentStep()
  }

  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            Araç bilgilerini girin
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            Paylaşacağınız araç bilgileri Koalay ile her daim güvende olacak!
          </Typography>
        </Stack>
        <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Field name='brand' control={control} label={'Brand'} placeholder={'Brand'} />
          <Field name='year' control={control} label={'Year'} placeholder={'Year'} type='number' />
          <Field name='model' control={control} label={'Model'} placeholder={'Model'} />
          <Button disabled={isSubmitting} type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
            {isSubmitting ? 'Loading...' : 'Devam Et'}
          </Button>
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image priority layout='responsive' width={200} height={150} src={'/car-info.svg'} alt='svgicon' />
      </Box>
    </Stack>
  )
}

export default VehicleSelectStep
