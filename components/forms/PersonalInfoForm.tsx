import React from 'react'
import { Box, Grid, Stack, Typography, Divider, Button } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { FiArrowUpRight } from 'react-icons/fi'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Field from './components/Field'
import Paper from '../Paper'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PersonalInfoSchema } from '../../schemas/personal-info-schema'
import { useRentContext } from '../../context/rent/rent-context'

export interface UserDataFormInputs {
  fullName: string
  idNumber: string
  email: string
  phone: number
  message: string
}

const PersonalInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<UserDataFormInputs>({
    resolver: yupResolver(PersonalInfoSchema()),
  })
  const { setCurrentStep, setUserData } = useRentContext()

  const onSubmit: SubmitHandler<UserDataFormInputs> = async (data) => {
    console.log('data', data)
    setUserData(data)
    setCurrentStep(4)
  }

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Personal Information
        </Typography>
        <Divider />
        <Stack component={'form'} spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl>
              <FormLabel required id='nationality-label' sx={{ fontSize: 14 }}>
                Nationality
              </FormLabel>
              <RadioGroup row aria-labelledby='nationality-label' name='row-radio-buttons-group'>
                <FormControlLabel value='Turkish' control={<Radio size='small' />} label='I am a Turkish citizen' />
                <FormControlLabel value='notTurkish' control={<Radio size='small' />} label='I am a Turkish citizen' />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field label={'Full Name'} />
            </Grid>
            <Grid item xs={6}>
              <Field label={'TC Identification number'} />
            </Grid>
          </Grid> */}
          <Stack direction='row' spacing={4}>
            <Field name='fullName' control={control} label={'Full Name'} placeholder={'John Doe'} />
            <Field name='idNumber' control={control} label={'TC Identification number'} placeholder={'YYMMDDSSSSCAZ'} />
          </Stack>

          <Stack direction='row' spacing={4}>
            <Field name='email' control={control} label={'Email'} placeholder={'johndoe@gmail.com'} />
            <Field name='phone' control={control} label={'Phone number'} placeholder={'+35843949521'} />
          </Stack>

          <Field name='message' control={control} label={'Additional Note'} placeholder={'Message'} />

          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' alignItems='center' spacing={0.5}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        padding: 0,
                        mr: 1,
                        '& .MuiSvgIcon-root': {
                          fontSize: 22,
                        },
                      }}
                    />
                  }
                  label='I Have Read na Aprove'
                  sx={{
                    margin: 0,
                    userSelect: 'none',
                    'span': {
                      fontSize: '14px',
                    },
                  }}
                />
              </FormGroup>
              <Typography variant='body2' color='primary.main' fontWeight={500}>
                Terms & Conditions
              </Typography>
            </Stack>

            <Button type='submit' variant='contained' size='large' endIcon={<FiArrowUpRight />}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default PersonalInfoForm
