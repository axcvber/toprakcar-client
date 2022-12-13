import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {
  ComponentVehicleMoneyBackLabel,
  ComponentVehiclePrice,
  ComponentVehicleSidebarOptions,
  Maybe,
} from '../../../generated'

interface IVehicleSidebar {
  name: string
  year: number
  model?: string
  price: ComponentVehiclePrice
  mileage: number
  sidebarOptions: Maybe<ComponentVehicleSidebarOptions>[]
  moneyBackLabel: ComponentVehicleMoneyBackLabel
}

const VehicleSidebar: React.FC<IVehicleSidebar> = ({
  name,
  year,
  model,
  price,
  mileage,
  sidebarOptions,
  moneyBackLabel,
}) => {
  const showSidebarOption = () => {}

  return (
    <Stack spacing={2}>
      <Stack>
        <Typography fontWeight={500} color='text.secondary'>
          {year}
        </Typography>
        <Typography fontWeight={600} variant={'h4'}>
          {name}
        </Typography>
        <Typography fontWeight={500} color='text.secondary'>
          {model}
        </Typography>
      </Stack>

      <Stack direction='row' justifyContent='space-between'>
        <Stack>
          <Typography component='span' color='primary' variant='h5' fontWeight={600}>
            {price.currentPrice.toLocaleString()} ₺
          </Typography>
          {price.showDiscounted && price.fullPrice && (
            <Typography
              component='span'
              color='text.disabled'
              variant='body2'
              fontWeight={500}
              sx={{ textDecoration: 'line-through' }}
            >
              {price.fullPrice.toLocaleString()} ₺
            </Typography>
          )}
        </Stack>
        <Typography color='text.secondary'>{mileage.toLocaleString()} km</Typography>
      </Stack>

      <Stack component={'ul'} spacing={1}>
        {sidebarOptions.map((item) => (
          <Stack
            key={item?.id}
            component={'li'}
            direction='row'
            spacing={1}
            alignItems='center'
            sx={{
              '& .q-icon': {
                color: 'primary.main',
                fontSize: 18,
                cursor: 'pointer',
              },
            }}
          >
            <Typography fontWeight={500} color='text.primary'>
              {item?.label}
            </Typography>
            {item?.modalContent && <AiOutlineQuestionCircle className={'q-icon'} onClick={showSidebarOption} />}
          </Stack>
        ))}
      </Stack>

      <Box
        sx={{
          background: '#fff',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          p: 2,
          textAlign: 'center',
        }}
      >
        <Typography fontWeight={600}>{moneyBackLabel.title}</Typography>
        <Typography variant='body2' mt={0.5}>
          {moneyBackLabel.description}
        </Typography>
      </Box>

      <Button variant='contained' size='extra'>
        Get Started
      </Button>
      <Button
        onClick={showSidebarOption}
        startIcon={<AiOutlineQuestionCircle />}
        size='extra'
        sx={{ fontSize: 15, 'svg': { fontSize: 22 } }}
      >
        {"Ready to buy? Here's how it works."}
      </Button>
    </Stack>
  )
}

export default VehicleSidebar
