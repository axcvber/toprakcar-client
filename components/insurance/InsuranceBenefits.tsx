import React from 'react'
import { Stack, Typography, Divider, Button, Box, Grid } from '@mui/material'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { ComponentMainIconBox, Maybe } from '../../generated'
import SVG from 'react-inlinesvg'
import Paper from '../layout/Paper'

interface InsuranceBenefitsProps {
  data: Maybe<ComponentMainIconBox>[]
}

const InsuranceBenefits: React.FC<InsuranceBenefitsProps> = ({ data }) => {
  return (
    <Paper withShadow>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent={'space-around'}
        // alignItems='center'
        py={1}
      >
        {data.map((item) => (
          <BenefitItem key={item?.id} icon={item?.icon.data?.attributes?.url} label={item?.title} />
        ))}
      </Stack>
    </Paper>
  )
}

interface IBenefitItem {
  icon?: string
  label?: string
}

const BenefitItem: React.FC<IBenefitItem> = ({ icon, label }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
      maxWidth={340}
      sx={(theme) => ({
        '.benefit-icon': {
          width: 35,
          height: 35,
          fill: theme.palette.primary.main,
        },
      })}
    >
      <SVG className='benefit-icon' src={icon || ''} />
      <Typography flex={1} fontWeight={600} variant='body2' color='text.secondary'>
        {label}
      </Typography>
    </Stack>
  )
}

export default InsuranceBenefits
