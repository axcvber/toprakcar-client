import React, { useEffect } from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { Box, Button, Stack, Typography } from '@mui/material'
import Dropdown from '../dropdown/Dropdown'
import { LocationOption, useRentContext } from '../../context/rent/rent-context'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from '../DatePicker'
import { LocationEntity, useGetLocationsLazyQuery } from '../../generated'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LocationDropdown from '../dropdown/LocationDropdown'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

const schema = yup.object().shape({
  pickUpLocation: yup.object().required(),
  dropOffLocation: yup.object().required(),
  pickUpDate: yup.date().min(new Date(), 'Please choose future date').nullable().required(),
  dropOffDate: yup
    .date()
    .when('pickUpDate', (pickUpDate, schema) => {
      if (pickUpDate) {
        const dayAfter = new Date(pickUpDate.getTime() + 86400000)
        return schema.min(dayAfter, 'End date has to be after than start date')
      }

      return schema
    })
    .nullable()
    .required(),
})

interface ISearchInputs {
  pickUpLocation: LocationOption
  dropOffLocation: LocationOption
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
}

const SearchModal = () => {
  const { isOpen, hideModal, modalProps } = useModal()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { setCurrentStep, setSelectedCar } = useRentContext()
  const router = useRouter()
  const {
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    setPickUpLocation,
    setDropOffLocation,
    setPickUpDate,
    setDropOffDate,
  } = useRentContext()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<ISearchInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
    },
  })

  useEffect(() => {
    const text = Object.values(errors)
    if (text[0]?.message) {
      enqueueSnackbar(text[0].message, { variant: 'error' })
    }
  }, [errors])

  const pickUpLocationTrigger = watch('pickUpLocation')
  const dropOffLocationTrigger = watch('dropOffLocation')

  const onSubmit: SubmitHandler<ISearchInputs> = (data) => {
    console.log('formModalData', data)
    setPickUpLocation(data.pickUpLocation)
    setDropOffLocation(data.dropOffLocation)
    setPickUpDate(dayjs(data.pickUpDate))
    setDropOffDate(dayjs(data.dropOffDate))

    if (router.pathname === '/') {
      setSelectedCar(modalProps.rentCar)
      setCurrentStep(2)
      router.push('/fleet/reservation')
    }
    hideModal()
  }

  const handleSelectPickUpLocation = (option: LocationEntity) => {
    if (option.id && option.attributes?.address) {
      setValue(
        'pickUpLocation',
        {
          id: option.id,
          address: option.attributes?.address,
        },
        { shouldValidate: true, shouldDirty: true }
      )
    }
  }

  const handleSelectDropOffLocation = (option: LocationEntity) => {
    if (option.id && option.attributes?.address) {
      setValue(
        'dropOffLocation',
        {
          id: option.id,
          address: option.attributes?.address,
        },
        { shouldValidate: true, shouldDirty: true }
      )
    }
  }

  return (
    <Modal open={isOpen} onClose={hideModal} title='Ride Details'>
      <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            Pick Up
          </Typography>
          <LocationDropdown
            title={pickUpLocationTrigger?.address || pickUpLocation?.address || 'Pick-up Location'}
            onSelectLocation={handleSelectPickUpLocation}
          />

          <Controller
            name='pickUpDate'
            control={control}
            render={({ field }) => (
              <DatePicker value={field.value} handleChange={field.onChange} placeholder='Pick-up date' />
            )}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            Drop Off
          </Typography>
          <LocationDropdown
            title={dropOffLocationTrigger?.address || dropOffLocation?.address || 'Drop Off Location'}
            onSelectLocation={handleSelectDropOffLocation}
          />

          <Controller
            name='dropOffDate'
            control={control}
            render={({ field }) => (
              <DatePicker value={field.value} handleChange={field.onChange} placeholder='Drop-off date' />
            )}
          />
        </Stack>
        <Button variant='contained' size='extra' type='submit'>
          Search
        </Button>
      </Stack>
    </Modal>
  )
}

export default SearchModal
