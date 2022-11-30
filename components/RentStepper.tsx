import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FiCheck } from 'react-icons/fi'
import ChooseVehicleStep from './steps/ChooseVehicleStep'
import ContactDetailsStep from './steps/ContactDetailsStep'
import BookingSummaryStep from './steps/BookingSummaryStep'
import { useRentContext } from '../context/rent-context'
import { useLocale } from '../hooks/useLocale'
import { BiArrowBack } from 'react-icons/bi'

interface IRentStepper {
  stepLabels: Array<string>
}

function getStepContent(step: number) {
  switch (step) {
    case 1:
      return <ChooseVehicleStep />

    case 2:
      return <ContactDetailsStep />

    case 3:
      return <BookingSummaryStep />

    default:
      return null
  }
}

function StepIcon(props: StepIconProps) {
  const { active, completed } = props
  return <StepIconRoot ownerState={{ active }}>{completed ? <FiCheck fontSize={22} /> : props.icon}</StepIconRoot>
}

const RentStepper: React.FC<IRentStepper> = ({ stepLabels }) => {
  const { currentStep, setCurrentStep } = useRentContext()
  const t = useLocale()

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: 'primary.main', py: 2, borderRadius: 4, mb: 2, boxShadow: 25 }}>
        <Stepper activeStep={currentStep} alternativeLabel connector={<Connector />}>
          {stepLabels.map((label, index) => (
            <Step key={index} disabled={index === 0} last={currentStep === 2}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    color: '#fff !important',
                    fontWeight: 500,
                    marginTop: '10px',
                  },
                }}
                StepIconComponent={StepIcon}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Button
        startIcon={<BiArrowBack />}
        // color='inherit'
        disabled={currentStep === 1 || currentStep === 3}
        onClick={handleBack}
        sx={{ mb: 2 }}
      >
        {t.button.back}
      </Button>
      <>{getStepContent(currentStep)}</>
    </>
  )
}

const Connector = styled(StepConnector)({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: 0,
    borderBottom: '3px dashed #fff',
    margin: '0 30px',
  },
})

const StepIconRoot = styled('div')<{
  ownerState: { active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: 'rgba(0,0,0,0.2)',
  zIndex: 1,
  color: '#fff',
  width: 45,
  height: 45,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  ...(ownerState.active && {
    backgroundColor: '#fff',
    color: theme.palette.text.primary,
  }),
}))

export default RentStepper
