import React, { useEffect } from 'react'
import InsuranceStepper from '../../components/insurance/steps/InsuranceStepper'
import { Stack, Container, CircularProgress } from '@mui/material'
import { useInsuranceContext } from '../../context/insurance/insurance-context'
import { useRouter } from 'next/router'

const RegistrationPage = () => {
  const { firstStepData, clearData } = useInsuranceContext()
  const router = useRouter()

  useEffect(() => {
    if (!firstStepData) {
      router.replace('/insurance')
    }
  }, [router, firstStepData])

  if (!firstStepData) {
    return (
      <Stack width={'100%'} minHeight={'calc(100vh - 70px)'} justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Stack>
    )
  }

  return (
    <Container maxWidth={'md'} sx={{ my: 6 }}>
      <InsuranceStepper />
    </Container>
  )
}

export default RegistrationPage
