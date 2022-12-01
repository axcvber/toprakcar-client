import React from 'react'
import { Typography } from '@mui/material'
import ImageHeading from './ImageHeading'
import { useLocale } from '../hooks/useLocale'
import { useRentContext } from '../context/rent-context'
import RentStepper from './RentStepper'

const RentSteps = () => {
  const { currentStep } = useRentContext()
  const t = useLocale()

  return (
    <>
      <ImageHeading>
        <Typography variant='h4' color='#fff'>
          {t.stepLabels[currentStep]}
        </Typography>
        {/* <Box width={1200}>
          <Search />
        </Box> */}
      </ImageHeading>
      <RentStepper stepLabels={t.stepLabels} />
    </>
  )
}

export default RentSteps
