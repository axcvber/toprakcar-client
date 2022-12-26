import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Stack, Typography, Divider, Button, Box, Container } from '@mui/material'
import Image from 'next/image'
import Field from '../../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import { useLocale } from '../../../hooks/useLocale'

const schema = yup.object().shape({
  licenseSerial: yup
    .string()
    .required()
    .matches(/^[A-Z]{2}$/, 'ds'),
  licenseNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits'),
})

export interface IVehicleInfoInputs {
  licenseSerial?: string
  licenseNumber?: string
}

const VehicleInfoStep = () => {
  const { incrementCurrentStep, setSecondStepData, secondStepData } = useInsuranceContext()
  const t = useLocale()
  const { handleSubmit, control, formState } = useForm<IVehicleInfoInputs>({
    resolver: yupResolver(schema),
    defaultValues: secondStepData,
  })

  const onSubmit: SubmitHandler<IVehicleInfoInputs> = (data) => {
    console.log('data', data)
    setSecondStepData(data)
    incrementCurrentStep()
  }
  return (
    <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={4} alignItems='flex-start'>
      <Box flex={1}>
        <Stack spacing={1} mb={3}>
          <Typography variant={'h4'} fontWeight={600}>
            {t.insurance.vehicleInfoStep.title}
          </Typography>
          <Typography variant='body2' fontWeight={500} color='text.secondary'>
            {t.insurance.vehicleInfoStep.desc}
          </Typography>
        </Stack>
        <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction='row' spacing={2}>
            <Field name='licenseSerial' control={control} label={t.forms.labels.licenseSerial} placeholder={'AA'} />
            <Field
              name='licenseNumber'
              control={control}
              label={t.forms.labels.licenseNumber}
              placeholder={'999999'}
              type='number'
            />
          </Stack>
          <Stack
            sx={{
              p: 2,
              background: '#fff',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 3,
            }}
            spacing={2}
          >
            <Typography variant={'h6'} fontWeight={600}>
              Ruhsat yanınızda değil mi?
            </Typography>
            <Typography variant={'caption'}>
              Buraya tıklayarak e-Devlet üzerinden ruhsat bilgilerine erişebilirsiniz.
            </Typography>
            <Typography variant={'caption'}>
              {"İnternet bankacılığı kullanıcı bilgileriniz ile buradan e-Devlet'e giriş yapabilirsiniz."}
            </Typography>
          </Stack>
          <Button type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
            {t.button.continue}
          </Button>
        </Stack>
      </Box>
      <Box flex={1} width={'100%'}>
        <Image
          priority
          layout='responsive'
          width={100}
          height={120}
          objectFit='contain'
          src={'/vehicle-info.png'}
          alt='vehicle'
        />
      </Box>
    </Stack>
  )
}

export default VehicleInfoStep
