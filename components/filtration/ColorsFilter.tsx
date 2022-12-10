import React from 'react'
import { Stack, Divider, Typography, Box, Grid } from '@mui/material'
import { ColorEntity } from '../../generated'
import { styled } from '@mui/material/styles'

type DataType =
  | {
      __typename?: 'ColorEntity' | undefined
      id?: string | null | undefined
      attributes?:
        | {
            __typename?: 'Color' | undefined
            name: string
            color: string
          }
        | null
        | undefined
    }[]
  | undefined

interface IColorsFilter {
  data: DataType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ColorsFilter: React.FC<IColorsFilter> = ({ data, handleChange }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Stack
              spacing={0.5}
              alignItems='center'
              // value={item.id}
              // name={FilterKeys.VEHICLE_CLASSES}
              // label={item.attributes?.title}
              // isChecked={!!filtered.vehicleClasses?.find((vehicleClass) => vehicleClass.value === item.id)}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background: item.attributes?.color,
                  borderRadius: '50px',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                s
              </Box>
              <Typography variant='caption' textAlign='center'>
                {item.attributes?.name}
              </Typography>

              {/* <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label> */}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const StyledCheckbox = styled('input')(({ theme }) => ({}))

export default ColorsFilter
