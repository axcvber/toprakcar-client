import React from 'react'
import { Stack, Typography, Divider, Button } from '@mui/material'
import LocationItem from '../LocationItem'
import { useModal } from '../../hooks/useModal'
import { MODAL_TYPES } from '../../context/modalContext'
import { useRentContext } from '../../context/rent/rent-context'
import { useRouter } from 'next/router'
import { useLocale } from '../../hooks/useLocale'

const LocationFilter = () => {
  const { showModal } = useModal()
  const { pickUpLocation, dropOffLocation, pickUpDate, dropOffDate } = useRentContext()
  const router = useRouter()
  const t = useLocale()

  const onSearchModal = () => {
    showModal(MODAL_TYPES.SEARCH_MODAL)
  }

  return (
    <Stack
      spacing={3}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 4,
        // boxShadow: 25,
        border: ' 1px solid',
        borderColor: 'divider',
        p: 3,
        mb: 3,
      }}
    >
      <Typography variant='h6' fontWeight={600}>
        {t.reservation.prepareReservation}
      </Typography>
      <Divider />
      <LocationItem
        title={t.reservation.pickUp}
        address={pickUpLocation?.address}
        date={pickUpDate?.locale(router.locale as string).format('LLL')}
      />
      <LocationItem
        title={t.reservation.dropOff}
        address={dropOffLocation?.address}
        date={dropOffDate?.locale(router.locale as string).format('LLL')}
      />
      <Button variant='contained' size='extra' onClick={onSearchModal}>
        {t.button.changeSearch}
      </Button>
    </Stack>
  )
}

export default LocationFilter
