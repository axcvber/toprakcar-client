import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { Box, Button, Stack, Typography, Divider, Grid } from '@mui/material'

const ShopWorkStepsModal = () => {
  const { isOpen, hideModal } = useModal()

  return (
    <Modal open={isOpen} onClose={hideModal} title={"Ready to buy? Here's how it works"}>
      <Stack spacing={3}>
        <Box>
          <Typography>Tell us your contact info</Typography>
        </Box>
        <Box>
          <Typography>Pick a delivery location</Typography>
        </Box>
        <Box>
          <Typography>Submit your order</Typography>
        </Box>
      </Stack>
    </Modal>
  )
}

export default ShopWorkStepsModal
