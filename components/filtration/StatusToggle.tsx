import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

const StatusToggle = () => {
  const [alignment, setAlignment] = React.useState('used')

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <StyledToggleButtonGroup
        color='primary'
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='Car Status'
        fullWidth
      >
        <ToggleButton value='used'>Used Cars</ToggleButton>
        <ToggleButton value='new'>New Cars</ToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  )
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: '10px !important',
    '&.Mui-disabled': {
      border: 0,
    },
    '&.MuiToggleButton-root': {
      textTransform: 'none',
      height: '40px',
      fontWeight: 600,
      transition: 'all 0.1s linear',
      '&:hover': {
        background: theme.palette.grey[100],
      },
    },
    '&.Mui-selected': {
      background: theme.palette.primary.main,
      color: '#fff',
      '&:hover': {
        color: '#fff',
        background: theme.palette.primary.main,
      },
    },
  },
}))

export default StatusToggle
