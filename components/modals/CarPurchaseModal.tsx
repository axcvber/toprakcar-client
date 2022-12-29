import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { useSnackbar } from 'notistack'
import { Button, Stack, Typography, Link as MUILink } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import Field from '../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import axios from 'axios'
import { useLocale } from '../../hooks/useLocale'
import { CarPurchaseSchema } from '../../schemas/car-purchase'
import FormCheckbox from '../form/FormCheckbox'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'

interface ICarPurchaseInputs {
  fullName: string
  email: string
  phone: string
  termsOfService: boolean
}

const CarPurchaseModal = () => {
  const { isOpen, hideModal, modalProps } = useModal()
  const t = useLocale()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ICarPurchaseInputs>({
    resolver: yupResolver(CarPurchaseSchema()),
  })
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit: SubmitHandler<ICarPurchaseInputs> = async (data) => {
    const { termsOfService, ...rest } = data

    const formData = {
      car: modalProps.car,
      model: modalProps.model,
      price: modalProps.price.currentPrice,
      year: modalProps.year,
      userData: rest,
    }

    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formName: 'Purchase', formData })
      enqueueSnackbar(t.notistack.successSubmit, { variant: 'success' })
      hideModal()
      reset()
    } catch (error) {
      enqueueSnackbar(t.notistack.errorSubmit, { variant: 'error' })
    }
  }

  return (
    <Modal open={isOpen} onClose={hideModal} title={t.forms.carPurchase.title}>
      <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)} maxWidth={350}>
        <Typography fontWeight={500} color='text.secondary' my={1} variant='body2'>
          {t.forms.carPurchase.desc}
        </Typography>
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
        <Stack direction='row' alignItems='center' gap={1} flexWrap='wrap'>
          <FormCheckbox name='termsOfService' control={control} label={t.forms.termsOfService} />
          <Link href={'/'} passHref>
            <MUILink underline='always' variant='body2' fontWeight={600}>
              {t.links.terms}
            </MUILink>
          </Link>
        </Stack>
        <Button disabled={isSubmitting} type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
          {isSubmitting ? t.button.loading : t.button.submit}
        </Button>
      </Stack>
    </Modal>
  )
}

export default CarPurchaseModal
