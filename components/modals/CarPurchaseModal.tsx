import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Field from '../form/Field'
import { FiArrowUpRight } from 'react-icons/fi'
import axios from 'axios'
import { useLocale } from '../../hooks/useLocale'

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
})

interface ICarPurchaseInputs {
  fullName: string
  email: string
  phone: string
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
    resolver: yupResolver(schema),
  })
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const onSubmit: SubmitHandler<ICarPurchaseInputs> = async (data) => {
    console.log('data', data)
    try {
      await axios.post(`${process.env.SERVER_API}/api/ezforms/submit`, { formName: 'Purchase', formData: data })
      enqueueSnackbar('Success', { variant: 'success' })
      hideModal()
      reset()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Modal open={isOpen} onClose={hideModal} title={t.forms.carPurchase.title}>
      <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)} width={350}>
        <Typography fontWeight={500} color='text.secondary' my={1}>
          {t.forms.carPurchase.desc}
        </Typography>
        <Field name='fullName' control={control} label={t.forms.labels.fullName} placeholder={t.forms.labels.fullName} />
        <Field name='email' control={control} label={t.forms.labels.email} placeholder={t.forms.labels.email} type='email' />
        <Field name='phone' control={control} label={t.forms.labels.phone} placeholder={t.forms.labels.phone} type='tel' />
        <Button disabled={isSubmitting} type='submit' variant='contained' size='extra' endIcon={<FiArrowUpRight />}>
          {isSubmitting ? t.button.loading : t.button.submit}
        </Button>
      </Stack>
    </Modal>
  )
}

export default CarPurchaseModal
