import React, { useEffect } from 'react'
import { Stack, Typography, Divider, Button, Link as MUILink } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { FiArrowUpRight } from 'react-icons/fi'
import Field from '../../../form/Field'
import Paper from '../../../layout/Paper'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PersonalInfoSchema } from '../../../../schemas/personal-info-schema'
import { useRentContext } from '../../../../context/rent/rent-context'
import Textarea from '../../../form/Textarea'
import { Controller } from 'react-hook-form'
import Link from 'next/link'
import FormCheckbox from '../../../form/FormCheckbox'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useLocale } from '../../../../hooks/useLocale'

export interface UserDataFormInputs {
  nationality: string
  fullName: string
  passportId: string
  email: string
  phone: number
  message: string
  termsOfService: boolean
}

const PersonalInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    watch,
    clearErrors,
  } = useForm<UserDataFormInputs>({
    resolver: yupResolver(PersonalInfoSchema()),
    defaultValues: {
      nationality: 'turk',
    },
  })
  const {
    setCurrentStep,
    setUserData,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    selectedCar,
    orderSummary,
  } = useRentContext()
  const router = useRouter()
  const t = useLocale()
  const { enqueueSnackbar } = useSnackbar()
  const nationalityType = watch('nationality')

  useEffect(() => {
    clearErrors()
  }, [nationalityType, clearErrors])

  const onSubmit: SubmitHandler<UserDataFormInputs> = async (data) => {
    const formData = {
      userData: data,
      pickUpLocation: pickUpLocation?.address,
      dropOffLocation: dropOffLocation?.address,
      pickUpDate: pickUpDate?.locale(router.locale as string).format('LLL'),
      dropOffDate: dropOffDate?.locale(router.locale as string).format('LLL'),
      selectedCar: selectedCar?.attributes?.name,
      orderSummary,
    }

    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formName: 'Rent', formData })
      setUserData(data)
      setCurrentStep(4)
      enqueueSnackbar(t.notistack.successSubmit, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(t.notistack.errorSubmit, { variant: 'error' })
    }
  }

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          {t.reservation.personalInformation}
        </Typography>
        <Divider />
        <Stack component={'form'} spacing={3} onSubmit={handleSubmit(onSubmit)}>
          <FormControl component='fieldset'>
            <FormLabel
              component='legend'
              required
              id='nationality-label'
              sx={{ fontSize: 14, fontWeight: 500, mb: 1.3 }}
            >
              {t.forms.labels.nationality}
            </FormLabel>
            <Controller
              control={control}
              name='nationality'
              render={({ field }) => (
                <RadioGroup {...field} row sx={{ ml: 1, gap: 2 }}>
                  <FormControlLabel
                    checked={nationalityType === 'turk'}
                    value='turk'
                    control={
                      <Radio
                        sx={{
                          mr: 0.5,
                          padding: 0,
                        }}
                      />
                    }
                    label={t.forms.labels.isTurk}
                    sx={{
                      userSelect: 'none',
                      color: 'text.secondary',
                      'span': {
                        fontWeight: 500,
                        fontSize: 14,
                      },
                    }}
                  />
                  <FormControlLabel
                    checked={nationalityType === 'notTurk'}
                    value='notTurk'
                    control={
                      <Radio
                        sx={{
                          mr: 0.5,
                          padding: 0,
                        }}
                      />
                    }
                    label={t.forms.labels.notTurk}
                    sx={{
                      color: 'text.secondary',
                      userSelect: 'none',
                      'span': {
                        fontWeight: 500,
                        fontSize: 14,
                      },
                    }}
                  />
                </RadioGroup>
              )}
            />
          </FormControl>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Field name='fullName' control={control} label={t.forms.labels.fullName} placeholder={'John Doe'} />

            {nationalityType === 'turk' && (
              <Field
                name='passportId'
                control={control}
                label={t.forms.labels.TCnumber}
                placeholder={'YYMMDDSSSSCAZ'}
              />
            )}
            {nationalityType === 'notTurk' && (
              <Field
                name='passportId'
                control={control}
                label={t.forms.labels.passportIdNumber}
                placeholder={'YYMMDDSSSSCAZ'}
              />
            )}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Field
              name='email'
              control={control}
              label={t.forms.labels.email}
              placeholder={'johndoe@gmail.com'}
              type={'email'}
            />
            <Field
              name='phone'
              control={control}
              label={t.forms.labels.phone}
              placeholder={'+35843949521'}
              type={'number'}
            />
          </Stack>

          <Textarea
            name='message'
            control={control}
            label={t.forms.labels.additionalNote}
            placeholder={t.forms.placeholders.message}
          />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent='space-between'
            alignItems={{ xs: 'stretch', sm: 'flex-start' }}
          >
            <Stack direction='row' alignItems='center' gap={1} flexWrap='wrap'>
              <FormCheckbox name='termsOfService' control={control} label={t.forms.termsOfService} />
              <Link href={'/'} passHref>
                <MUILink underline='always' variant='body2' fontWeight={600}>
                  {t.links.terms}
                </MUILink>
              </Link>
            </Stack>

            <Button disabled={isSubmitting} type='submit' variant='contained' size='large' endIcon={<FiArrowUpRight />}>
              {isSubmitting ? t.button.loading : t.button.submit}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default PersonalInfoForm
