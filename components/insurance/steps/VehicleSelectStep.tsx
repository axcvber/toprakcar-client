import React from 'react'
import { Stack, Typography, Button, Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Field from '../../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import { useLocale } from '../../../hooks/useLocale'

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
  const t = useLocale()
  const { handleSubmit, control } = useForm<IVehicleSelectInputs>({
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
            {t.insurance.vehicleSelectStep.title}
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            {t.insurance.vehicleSelectStep.desc}
          </Typography>
        </Stack>
        <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Field name='brand' control={control} label={t.forms.labels.brand} placeholder={t.forms.labels.brand} />
          <Field
            name='year'
            control={control}
            label={t.forms.labels.year}
            placeholder={t.forms.labels.year}
            type='number'
          />
          <Field name='model' control={control} label={t.forms.labels.model} placeholder={t.forms.labels.model} />
          <Button type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
            {t.button.continue}
          </Button>
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image priority layout='responsive' width={200} height={150} src={'/car-info.svg'} alt='vehicle' />
      </Box>
    </Stack>
  )
}

export default VehicleSelectStep
