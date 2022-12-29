import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from './DatePicker'
import { LocationEntity } from '../generated'
import { LocationOption, useRentContext } from '../context/rent/rent-context'
import { useRouter } from 'next/router'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LocationDropdown from './dropdown/LocationDropdown'
import { useSnackbar } from 'notistack'
import { useLocale } from '../hooks/useLocale'
import { SearchSchema } from '../schemas/search-schema'

interface ISearchInputs {
  pickUpLocation: LocationOption
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
}

const Search = () => {
  const { pickUpLocation, pickUpDate, dropOffDate, setPickUpLocation, setPickUpDate, setDropOffDate } = useRentContext()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const router = useRouter()
  const t = useLocale()

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<ISearchInputs>({
    resolver: yupResolver(SearchSchema()),
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

  const onSubmit: SubmitHandler<ISearchInputs> = (data) => {
    setPickUpLocation(data.pickUpLocation)
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
                title={pickUpLocationTrigger?.address || pickUpLocation?.address || t.forms.placeholders.chooseLocation}
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
              placeholder={t.forms.placeholders.pickupDate}
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
        <Button
          type='submit'
          startIcon={<FiSearch />}
          variant='contained'
          size='extra'
          sx={{ color: '#fff', fontSize: 18, px: 6, alignSelf: 'stretch' }}
        >
          {t.button.search}
        </Button>
      </Stack>
    </>
  )
}

export default Search
