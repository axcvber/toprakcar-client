import React, { useEffect } from 'react'
import { Stack, Typography, Divider } from '@mui/material'
import Paper from './Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { ComponentVehicleAdditionalRentServices } from '../generated'
import { ExtrasType, useRentContext } from '../context/rent/rent-context'

interface IAdditionalServices {
  data: ComponentVehicleAdditionalRentServices[]
}

const AdditionalServices: React.FC<IAdditionalServices> = ({ data }) => {
  const [values, setValues] = React.useState<ExtrasType[]>([])
  const { orderSummary, setExtrasData } = useRentContext()
  const dayCount = orderSummary?.dayCount

  useEffect(() => {
    setExtrasData(values.filter((item) => item.value === 'yes'))
  }, [values])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, price: number) => {
    const { value, name } = event.target
    const isMatch = values.find((item) => item.name === event.target.name)
    if (isMatch) {
      setValues((prev) => prev.filter((item) => item.name !== name))
    }
    setValues((prev) => [...prev, { value, name, price }])
  }

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Additional services
        </Typography>
        <Divider />
        <Stack spacing={3}>
          {data &&
            data.map((item) => (
              <Stack key={item.id} direction='row' justifyContent='space-between'>
                <Stack spacing={1}>
                  <Typography fontWeight={600}>{item.label}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Daily Price {item.dailyPrice} ₺
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby='demo-controlled-radio-buttons-group'
                      name={item.label}
                      value={values}
                      onChange={(e) => handleChange(e, (dayCount && dayCount * item.dailyPrice) || 0)}
                    >
                      <FormControlLabel
                        checked={!!values.find((c) => c.name === item.label && c.value === 'yes')}
                        name={item.label}
                        value={'yes'}
                        control={<Radio size='small' />}
                        label='Yes'
                      />

                      <FormControlLabel
                        value={'no'}
                        name={item.label}
                        checked={!!values.find((c) => c.name === item.label && c.value === 'no')}
                        control={<Radio size='small' />}
                        label='No'
                      />
                    </RadioGroup>
                  </FormControl>
                </Stack>
                <Typography variant='h6' color='primary.main' fontWeight={600}>
                  {dayCount && dayCount * item.dailyPrice} ₺
                </Typography>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AdditionalServices
