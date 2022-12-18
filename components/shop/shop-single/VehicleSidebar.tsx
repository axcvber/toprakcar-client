import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {
  ComponentVehicleMoneyBackLabel,
  ComponentVehiclePrice,
  ComponentVehicleSidebarOptions,
  Maybe,
} from '../../../generated'
import SVG from 'react-inlinesvg'
import { useModal } from '../../../hooks/useModal'
import { MODAL_TYPES } from '../../../context/modalContext'

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
  const { showModal } = useModal()

  const showSidebarOptionModal = (title: string, content: string) => {
    showModal(MODAL_TYPES.SHOP_SIDEBAR_MODAL, {
      title,
      content,
    })
  }

  const showWorkSteps = () => {
    showModal(MODAL_TYPES.SHOP_WORK_STEPS)
  }

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

      <Stack component={'ul'} spacing={2}>
        {sidebarOptions.map((item) => (
          <Stack
            key={item?.id}
            component={'li'}
            direction='row'
            spacing={1}
            alignItems='center'
            sx={{
              '& .option-icon': {
                width: 22,
                height: 22,
                color: 'text.primary',
              },
              '& .q-icon': {
                color: 'primary.main',
                fontSize: 18,
                cursor: 'pointer',
              },
            }}
          >
            <SVG className='option-icon' src={item?.icon.data?.attributes?.url || ''} />
            <Typography fontWeight={500} color='text.primary'>
              {item?.label}
            </Typography>
            {item?.modalContent && (
              <AiOutlineQuestionCircle
                className={'q-icon'}
                onClick={() => showSidebarOptionModal(item.label, item.modalContent || '')}
              />
            )}
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
        onClick={showWorkSteps}
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
