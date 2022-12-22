import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { checkTcNum } from '../../utils/validations'
import { Stack, Typography, Divider, Button, Box, Container } from '@mui/material'
import Field from '../form/Field'
import FormCheckbox from '../form/FormCheckbox'
import Paper from '../layout/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Controller } from 'react-hook-form'

const schema = yup
  .object({
    tabValue: yup.number(),
    licensePlate: yup.string().when('tabValue', {
      is: 0,
      then: yup.string().required(),
      otherwise: yup.string(),
    }),
    TCIdNumber: yup
      .string()
      .required('Please fill out this field')
      .test('tc-validation', 'Incorrect TC Identification number', checkTcNum),
    termsOfService: yup.boolean().required().oneOf([true]),
  })
  .required()

interface InsuranceStartFormInputs {
  tabValue: number
  licensePlate: string
  TCIdNumber: string
  termsOfService: boolean
}

const InsuranceStartForm = () => {
  const [tabValue, setTabValue] = React.useState(0)

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    clearErrors,
    watch,
    reset,
  } = useForm<InsuranceStartFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      tabValue,
    },
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    setValue('tabValue', newValue)
    clearErrors()
  }

  const onSubmit: SubmitHandler<InsuranceStartFormInputs> = async (data) => {
    console.log('data', data)
  }

  return (
    <Paper>
      <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} spacing={3}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          centered
          sx={{
            '& .MuiTabs-flexContainer': {
              width: '100%',

              borderBottom: '1px solid',
              borderColor: 'divider',
              // gap: '24px',
            },
            '& .MuiTabs-scroller': {
              display: 'flex',
            },
            '& .MuiTabs-indicator': {
              height: '2px',
              borderRadius: '10px',
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: 15,
              width: '50%',

              fontWeight: 600,
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab label='I have a plate' />
          <Tab label="I don't have a license plate" />
        </Tabs>

        <Stack direction='row' spacing={2}>
          <Field name='licensePlate' control={control} placeholder={'License Plate'} disabled={tabValue === 1} />
          <Field name='TCIdNumber' control={control} placeholder={'TR Identity'} />
        </Stack>

        <Stack spacing={2}>
          <FormCheckbox name='termsOfService' control={control} label={'I Have Read and Approve Terms & Conditions'} />
          <Button type='submit' variant='contained' size='extra'>
            Get Traffic Insurance Offers
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default InsuranceStartForm
