import React, { useEffect } from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { Button, Stack, Typography } from '@mui/material'
import { LocationOption, useRentContext } from '../../context/rent/rent-context'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from '../DatePicker'
import { LocationEntity } from '../../generated'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LocationDropdown from '../dropdown/LocationDropdown'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useLocale } from '../../hooks/useLocale'
import { SearchModalSchema } from '../../schemas/search-modal-schema'

interface ISearchInputs {
  pickUpLocation: LocationOption
  dropOffLocation: LocationOption
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
}

const SearchModal = () => {
  const { isOpen, hideModal, modalProps } = useModal()
  const { enqueueSnackbar } = useSnackbar()
  const { setCurrentStep, setSelectedCar } = useRentContext()
  const router = useRouter()
  const t = useLocale()

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
    resolver: yupResolver(SearchModalSchema()),
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
    <Modal open={isOpen} onClose={hideModal} title={t.reservation.rideDetails}>
      <Stack component={'form'} spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            {t.reservation.pickUp}
          </Typography>

          <Controller
            name='pickUpLocation'
            control={control}
            render={({ fieldState }) => (
              <LocationDropdown
                title={pickUpLocationTrigger?.address || pickUpLocation?.address || t.forms.placeholders.pickUpLocation}
                onSelectLocation={handleSelectPickUpLocation}
                isError={!!fieldState.error}
              />
            )}
          />

          <Controller
            name='pickUpDate'
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                value={field.value}
                handleChange={field.onChange}
                placeholder={t.forms.placeholders.pickupDate}
                isError={!!fieldState.error}
              />
            )}
          />
        </Stack>

        <Stack spacing={1}>
          <Typography pl={2} variant='body2' fontWeight={600} color='text.secondary'>
            {t.reservation.dropOff}
          </Typography>

          <Controller
            name='dropOffLocation'
            control={control}
            render={({ fieldState }) => (
              <LocationDropdown
                title={
                  dropOffLocationTrigger?.address || dropOffLocation?.address || t.forms.placeholders.dropOffLocation
                }
                onSelectLocation={handleSelectDropOffLocation}
                isError={!!fieldState.error}
              />
            )}
          />

          <Controller
            name='dropOffDate'
            control={control}
            render={({ field, fieldState }) => (
              <DatePicker
                value={field.value}
                handleChange={field.onChange}
                placeholder={t.forms.placeholders.returnDate}
                isError={!!fieldState.error}
              />
            )}
          />
        </Stack>
        <Button variant='contained' size='extra' type='submit'>
          {t.button.search}
        </Button>
      </Stack>
    </Modal>
  )
}

export default SearchModal
