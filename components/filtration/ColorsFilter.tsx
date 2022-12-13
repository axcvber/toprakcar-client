import React from 'react'
import { Stack, Grid } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { FiCheck } from 'react-icons/fi'
import { getContrastYIQ } from '../../utils/getContrastYIQ'
interface IColorsFilter {
  value?: string | null
  name: string
  label?: string
  isChecked: boolean
  color?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ColorsFilter: React.FC<IColorsFilter> = ({ value, name, label, isChecked, color, handleChange }) => {
  return (
    <Grid item xs={3}>
      <Stack spacing={0.5} alignItems='center'>
        <FormControlLabel
          sx={{
            'span': {
              color: 'text.secondary',
              fontWeight: 500,
              fontSize: 12,
              mt: 0.5,
            },
          }}
          value='bottom'
          control={
            <Checkbox
              name={name}
              checked={isChecked}
              value={value}
              onChange={handleChange}
              inputProps={{ 'aria-label': label }}
              checkedIcon={<FiCheck />}
              sx={{
                width: 40,
                height: 40,
                background: color,
                borderRadius: '50px',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                'svg': {
                  color: getContrastYIQ(color),
                },
                '& .MuiSvgIcon-root': {
                  display: 'none',
                },
              }}
            />
          }
          label={label}
          labelPlacement='bottom'
        />
      </Stack>
    </Grid>
  )
}

export default ColorsFilter
