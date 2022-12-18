import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { Box, Button, Stack, Typography } from '@mui/material'
import Dropdown from '../Dropdown'
import { useRentContext } from '../../context/rent/rent-context'
import { Dayjs } from 'dayjs'
import DatePicker from '../DatePicker'
import { LocationEntity, useGetLocationsLazyQuery } from '../../generated'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LocationDropdown from '../dropdown/LocationDropdown'

const schema = yup
  .object({
    pickUpLocation: yup.object().required(),
    dropOffLocation: yup.object().required(),
    pickUpDate: yup.date().required(),
    dropOffDate: yup.date().required(),
  })
  .required()

interface ISearchInputs {
  pickUpLocation: LocationEntity
  dropOffLocation: LocationEntity
  pickUpDate: Dayjs
  dropOffDate: Dayjs
}

const SearchModal = () => {
  const { isOpen, hideModal, showModal } = useModal()
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
    formState: { isSubmitting, isSubmitSuccessful, errors },
    getValues,
    watch,
  } = useForm<ISearchInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      pickUpLocation: {
        id: pickUpLocation?.id,
        attributes: {
          address: pickUpLocation?.address,
        },
      },
      dropOffLocation: {
        id: dropOffLocation?.id,
        attributes: {
          address: dropOffLocation?.address,
        },
      },
      pickUpDate,
      dropOffDate,
    },
  })

  const pickUpLocationTrigger = watch('pickUpLocation')
  const dropOffLocationTrigger = watch('dropOffLocation')

  console.log('errors', errors)

  const onSubmit: SubmitHandler<ISearchInputs> = (data) => {
    console.log('formModalData', data)
    setPickUpLocation({
      id: data.pickUpLocation.id as any,
      address: data.pickUpLocation.attributes?.address as any,
    })
    setDropOffLocation({
      id: data.dropOffLocation.id as any,
      address: data.dropOffLocation.attributes?.address as any,
    })
    setPickUpDate(data.pickUpDate)
    setDropOffDate(data.dropOffDate)
  }

  const handleChangeSearch = () => {
    // if (tempPickUpLocation?.id && tempPickUpLocation?.attributes) {
    //   setLocation({
    //     id: tempPickUpLocation.id,
    //     address: tempPickUpLocation.attributes?.address,
    //   })
    // }
    // if (onModalClose) {
    //   onModalClose()
    // }
  }

  const handleSelectPickUpLocation = (option: LocationEntity) => {
    setValue('pickUpLocation', option)
  }

  const handleSelectDropOffLocation = (option: LocationEntity) => {
    setValue('dropOffLocation', option)
  }

  return (
    <Modal open={isOpen} onClose={hideModal} title='Ride Details'>
      <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            Pick Up
          </Typography>
          <LocationDropdown
            title={pickUpLocationTrigger?.attributes?.address || 'Pick-up Location'}
            onSelectLocation={handleSelectPickUpLocation}
          />

          {/* {errors.pickUpLocation && <span>{errors.pickUpLocation.message}</span>} */}
          <Controller
            name='pickUpDate'
            control={control}
            render={({ field }) => (
              <DatePicker value={field.value} handleChange={field.onChange} placeholder='Pick-up date' />
            )}
          />
          {errors.pickUpDate && <span>{errors.pickUpDate.message}</span>}
        </Stack>

        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            Drop Off
          </Typography>
          <LocationDropdown
            title={dropOffLocationTrigger?.attributes?.address || 'Drop Off Location'}
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
