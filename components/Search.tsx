import { Box, Button, Stack, Typography, Divider, Grid } from '@mui/material'
import React, { forwardRef, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from './DatePicker'
import { LocationEntity, useGetLocationsLazyQuery } from '../generated'
import { useRentContext } from '../context/rent/rent-context'
import { useRouter } from 'next/router'
import DropdownItem from './dropdown/DropdownItem'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LocationDropdown from './dropdown/LocationDropdown'

const schema = yup.object().shape({
  pickUpLocation: yup.object().required(),
  pickUpDate: yup.date().min(new Date(), 'Please choose future date'),
  dropOffDate: yup.date().when('pickUpDate', (pickUpDate, schema) => {
    if (pickUpDate) {
      const dayAfter = new Date(pickUpDate.getTime() + 86400000)

      return schema.min(dayAfter, 'End date has to be after than start date')
    }

    return schema
  }),
})

// const schema = yup
//   .object({
//     pickUpLocation: yup.object().required(),
//     pickUpDate: yup.date().required(),
//     dropOffDate: yup.date().test('same_dates_test', 'Start and end dates must not be equal.', function (value: any) {
//       const { startDate } = this.parent
//       return value.getTime() !== startDate.getTime()
//     }),
//   })
//   .required()

interface ISearchInputs {
  pickUpLocation: LocationEntity
  pickUpDate: Dayjs
  dropOffDate: Dayjs
}

const Search = () => {
  const { pickUpLocation, pickUpDate, dropOffDate, setPickUpLocation, setPickUpDate, setDropOffDate } = useRentContext()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    getValues,
    watch,
  } = useForm<ISearchInputs>({
    resolver: yupResolver(schema),
  })

  const pickUpLocationTrigger = watch('pickUpLocation')

  useEffect(() => {
    if (errors.dropOffDate?.message) {
      setErrorMessage(errors.dropOffDate?.message)
      setOpen(true)
    }
  }, [errors])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSelectPickUpLocation = (option: LocationEntity) => {
    setValue('pickUpLocation', option)
  }

  // if(!location) {
  //   setErrorMessage('Select Location')
  // }

  // handleClick()
  // if(router.pathname === '/') {
  //   router.push('/fleet')
  // }
  const onSubmit: SubmitHandler<ISearchInputs> = (data) => {
    console.log('SearchformModalData', data)

    console.log(
      'test',
      dayjs(data.pickUpDate)
        .locale(router.locale as string)
        .format('LLL')
    )

    setPickUpLocation({
      id: data.pickUpLocation.id as any,
      address: data.pickUpLocation.attributes?.address as any,
    })
    setPickUpDate(data.pickUpDate)
    setDropOffDate(data.dropOffDate)
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
          border: '2px solid',
          borderColor: 'error.main',
        }}
      >
        <Box>
          <LocationDropdown
            title={pickUpLocationTrigger?.attributes?.address || 'Choose a location'}
            onSelectLocation={handleSelectPickUpLocation}
          />
        </Box>
        <Controller
          name='pickUpDate'
          control={control}
          render={({ field }) => (
            <DatePicker value={field.value} handleChange={field.onChange} placeholder='Pick-up date' />
          )}
        />

        <Controller
          name='dropOffDate'
          control={control}
          render={({ field }) => (
            <DatePicker value={field.value} handleChange={field.onChange} placeholder='Drop-off date' />
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant='filled' severity='error' sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Search
