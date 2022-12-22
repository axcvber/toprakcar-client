import React from 'react'
import { Stack, Typography, Divider, Button, Box, Container } from '@mui/material'
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
      <Stack direction='row' justifyContent={'space-around'} py={1}>
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
          width: 40,
          height: 40,
          fill: theme.palette.primary.main,
        },
      })}
    >
      <SVG className='benefit-icon' src={icon || ''} />
      <Typography flex={1} fontWeight={600} color='text.secondary'>
        {label}
      </Typography>
    </Stack>
  )
}

export default InsuranceBenefits
