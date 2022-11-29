import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCarAlt } from 'react-icons/fa'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { BsFillCartCheckFill } from 'react-icons/bs'
import Box from '@mui/material/Box'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FiCheck } from 'react-icons/fi'
import ChooseVehicleStep from './steps/ChooseVehicleStep'
import ContactDetailsStep from './steps/ContactDetailsStep'
import BookingSummaryStep from './steps/BookingSummaryStep'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    // top: 10,
    // left: 'calc(-50% + 16px)',
    // right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // borderColor: 'red',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#fff',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    // borderColor: 'red',
    margin: '0 20px',
    // // borderTopWidth: 3,
    // borderRadius: 0,
    // borderWidth: 2,
    // borderStyle: 'dashed',
    border: '2px dashed #fff',
  },
}))

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    // top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: 'red',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: 'red',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background: '#fff',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}))

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
  color: 'rgba(0,0,0,0.3)',
  display: 'flex',
  // height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: 'red',
  }),
  '& .QontoStepIcon-completedIcon': {
    // color: '#333',
    zIndex: 1,
    fontSize: 22,
  },
  '& .QontoStepIcon-circle': {
    width: 45,
    height: 45,
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
    ...(ownerState.active && {
      background: '#fff',
      color: '#333',
    }),
  },
}))

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
  }

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props
  const icons: { [index: string]: React.ReactElement } = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
  }
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Box className='QontoStepIcon-circle' sx={{ background: '#fff', color: '#333' }}>
          <FiCheck className='QontoStepIcon-completedIcon' />
        </Box>
      ) : (
        <div className='QontoStepIcon-circle'>{icons[String(props.icon)]}</div>
      )}
    </QontoStepIconRoot>
  )
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

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1)
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean
  }>({})

  const steps = [
    {
      label: 'Ride Details',
      content: 'ride',
    },
    {
      label: 'Choose a Vehicle',
      content: 'choose',
    },
    {
      label: 'Contact Details',
      content: 'contact',
    },
    {
      label: 'Booking Summary',
      content: 'Booking',
    },
  ]

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <>
      <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ width: '100%', backgroundColor: 'primary.main', py: 3, borderRadius: 4, my: 3 }}>
        {/* <Stepper nonLinear alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step key={label} activeStep={activeStep} completed={completed[index]}>
            <StepLabel onClick={handleStep(index)} StepIconComponent={QontoStepIcon}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper> */}
        <Stepper nonLinear activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
          {steps.map((item, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                <StepLabel
                  sx={{
                    '.MuiStepLabel-label': {
                      color: '#fff',
                      fontWeight: 500,
                    },
                  }}
                  StepIconComponent={QontoStepIcon}
                >
                  {item.label}
                </StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>{getStepContent(activeStep)}</div>
    </>
  )
}
