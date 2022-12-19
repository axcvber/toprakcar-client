import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from './DatePicker'
import { LocationEntity } from '../generated'
import { useRentContext } from '../context/rent/rent-context'
import { useRouter } from 'next/router'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LocationDropdown from './dropdown/LocationDropdown'
import { useSnackbar } from 'notistack'

const schema = yup.object().shape({
  pickUpLocation: yup.object().required(),
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
  pickUpLocation: LocationEntity | null
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
}

const Search = () => {
  const { pickUpLocation, pickUpDate, dropOffDate, setPickUpLocation, setPickUpDate, setDropOffDate } = useRentContext()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
    watch,
  } = useForm<ISearchInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      pickUpLocation,
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

  const handleSelectPickUpLocation = (option: LocationEntity) => {
    setValue('pickUpLocation', option, { shouldValidate: true, shouldDirty: true })
  }

  const onSubmit: SubmitHandler<ISearchInputs> = (data) => {
    console.log('SearchformModalData', data)
    setPickUpLocation({
      id: data.pickUpLocation?.id as any,
      address: data.pickUpLocation?.attributes?.address as any,
    })
    setPickUpDate(dayjs(data.pickUpDate))
    setDropOffDate(dayjs(data.dropOffDate))
    if (router.pathname === '/') {
      router.push('/fleet')
    }
  }

  return (
    <>
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'stretch', md: 'center' }}
        gap={3}
        sx={{
          background: '#fff',
          borderRadius: 3,
          p: 2,
          boxShadow: 12,
          margin: 'auto',
        }}
      >
        <Box>
          <Controller
            name='pickUpLocation'
            control={control}
            render={({ fieldState }) => (
              <LocationDropdown
                title={pickUpLocationTrigger?.attributes?.address || pickUpLocation?.address || 'Choose a location'}
                onSelectLocation={handleSelectPickUpLocation}
                isError={!!fieldState.error}
              />
            )}
          />
        </Box>
        <Controller
          name='pickUpDate'
          control={control}
          render={({ field, fieldState }) => (
            <DatePicker
              value={field.value}
              handleChange={field.onChange}
              placeholder='Pick-up date'
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
              placeholder='Drop-off date'
              isError={!!fieldState.error}
            />
          )}
        />
        <Button
          type='submit'
          startIcon={<FiSearch />}
          variant='contained'
          size='extra'
          sx={{ color: '#fff', fontSize: 18, px: 6, alignSelf: 'stretch' }}
        >
          Search
        </Button>
      </Stack>
    </>
  )
}

export default Search
