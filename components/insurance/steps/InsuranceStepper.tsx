import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { FaUser, FaUserTie } from 'react-icons/fa'
import { IoCarSportSharp } from 'react-icons/io5'
import { MdContacts } from 'react-icons/md'
import { HiDocumentCheck } from 'react-icons/hi2'
import { Box, Button } from '@mui/material'
import { BiArrowBack } from 'react-icons/bi'
import ContactInfoStep from './ContactInfoStep'
import Paper from '../../layout/Paper'
import FormSubmissionStep from './FormSubmissionStep'
import { useInsuranceContext } from '../../../context/insurance/insurance-context'
import VehicleSelectStep from './VehicleSelectStep'
import VehicleInfoStep from './VehicleInfoStep'
import { useRouter } from 'next/router'
import { useLocale } from '../../../hooks/useLocale'

function getStepContent(step: number, hasLicense: boolean) {
  switch (step) {
    case 1:
      return hasLicense ? <VehicleInfoStep /> : <VehicleSelectStep />
    case 2:
      return <ContactInfoStep />
    case 3:
      return <FormSubmissionStep />
    default:
      return 'Unknown step'
  }
}

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <FaUser />,
    2: <IoCarSportSharp />,
    3: <MdContacts />,
    4: <HiDocumentCheck />,
  }

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  )
}

const InsuranceStepper = () => {
  const { currentStep, decrementCurrentStep, firstStepData, clearData } = useInsuranceContext()
  const router = useRouter()
  const t = useLocale()
  // useEffect(() => {
  //   return () => {
  //     clearData()
  //   }
  // }, [clearData])

  const handleBack = async () => {
    if (currentStep > 1 && currentStep < 3) {
      decrementCurrentStep()
    } else {
      await router.replace('/insurance')
      clearData()
    }
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Box
        sx={{
          background: '#fff',
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          py: 3,
          px: 1,
        }}
      >
        <Stepper alternativeLabel activeStep={currentStep} connector={<ColorlibConnector />}>
          {t.insurance.stepLabels.map((label, inx: number) => (
            <Step key={label} disabled={inx === 0}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    color: 'text.primary',
                    fontWeight: '600 !important',
                    marginTop: '10px',
                    fontSize: { xs: '10px', md: '14px' },
                  },
                }}
                StepIconComponent={ColorlibStepIcon}
              >
                {inx === 1 && firstStepData?.hasLicense ? t.insurance.addStepLabel : label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <Button startIcon={<BiArrowBack />} color='inherit' disabled={currentStep === 3} onClick={handleBack}>
          {t.button.back}
        </Button>
      </Box>

      <>{getStepContent(currentStep, !!firstStepData?.hasLicense)}</>
    </Stack>
  )
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    [theme.breakpoints.down('md')]: {
      top: 16,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: 0,
    borderBottom: '3px dashed',
    borderColor: theme.palette.divider,
    margin: '0 20px',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.grey[200],
  zIndex: 1,
  color: theme.palette.grey[400],
  width: 45,
  height: 45,
  fontSize: 22,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#fff',
    backgroundImage: 'linear-gradient( 136deg, rgb(255,79,9) 0%, rgb(255,138,93) 50%, rgb(255,79,9) 100%)',
  }),
  ...(ownerState.completed && {
    color: '#fff',
    backgroundImage: 'linear-gradient( 136deg, rgb(255,79,9) 0%, rgb(255,138,93) 50%, rgb(255,79,9) 100%)',
  }),
  [theme.breakpoints.down('md')]: {
    width: 35,
    height: 35,
    'svg': {
      fontSize: 16,
    },
  },
}))

export default InsuranceStepper
