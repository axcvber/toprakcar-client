import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { CarStateType, useFilterContext } from '../../context/filter/filter-context'
import { useLocale } from '../../hooks/useLocale'

const StatusToggle = () => {
  const { setCarState, carState } = useFilterContext()
  const t = useLocale()

  const handleChange = (_: React.MouseEvent<HTMLElement>, newAlignment: CarStateType) => {
    if (newAlignment !== null) {
      setCarState(newAlignment)
    }
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <StyledToggleButtonGroup
        color='primary'
        value={carState}
        exclusive
        onChange={handleChange}
        aria-label='Car Status'
        fullWidth
      >
        <ToggleButton value='used' selected={carState === 'used'}>
          {t.filter.usedCars}
        </ToggleButton>
        <ToggleButton value='new' selected={carState === 'new'}>
          {t.filter.newCars}
        </ToggleButton>
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
      height: 'auto',
      padding: '10px',
      fontWeight: 600,
      transition: 'all 0.1s linear',
      fontSize: 14,
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
