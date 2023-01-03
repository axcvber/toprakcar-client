import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Stack, Button, Link as MUILink } from '@mui/material'
import Field from '../form/Field'
import FormCheckbox from '../form/FormCheckbox'
import Paper from '../layout/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useInsuranceContext } from '../../context/insurance/insurance-context'
import { useRouter } from 'next/router'
import { useLocale } from '../../hooks/useLocale'
import Link from 'next/link'
import { InsuranceStartSchema } from '../../schemas/insurance/insurance-start-schema'

export interface InsuranceStartFormInputs {
  hasLicense: boolean
  licensePlate: string
  TCIdNumber: string
  termsOfService: boolean
}

const InsuranceStartForm = () => {
  const { setFirstStepData, firstStepData } = useInsuranceContext()
  const [tabValue, setTabValue] = React.useState(firstStepData?.hasLicense ? 0 : 1)
  const router = useRouter()
  const t = useLocale()

  const { handleSubmit, control, setValue, clearErrors, resetField } = useForm<InsuranceStartFormInputs>({
    resolver: yupResolver(InsuranceStartSchema()),
    defaultValues: firstStepData,
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    setValue('hasLicense', newValue === 0 ? true : false)
    resetField('licensePlate')
    clearErrors()
  }

  const onSubmit: SubmitHandler<InsuranceStartFormInputs> = async (data) => {
    setFirstStepData(data)
    router.push('insurance/registration')
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
          <Tab label={t.insurance.tabs.hasPlate} />
          <Tab label={t.insurance.tabs.hasNotPlate} />
        </Tabs>

        <Stack direction='row' spacing={2}>
          <Field
            name='licensePlate'
            control={control}
            label={t.forms.labels.licensePlate}
            placeholder={'34P3169'}
            disabled={tabValue === 1}
          />
          <Field name='TCIdNumber' control={control} label={t.forms.labels.TRIdentity} placeholder={'56437878965'} />
        </Stack>

        <Stack spacing={2}>
          <Stack direction='row' alignItems='center' gap={1} flexWrap='wrap'>
            <FormCheckbox name='termsOfService' control={control} label={t.forms.termsOfService} />
            <Link href={'/'} passHref>
              <MUILink underline='always' variant='body2' fontWeight={600}>
                {t.links.terms}
              </MUILink>
            </Link>
          </Stack>

          <Button type='submit' variant='contained' size='extra'>
            {t.button.geTrafficInsuranceOffers}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default InsuranceStartForm
