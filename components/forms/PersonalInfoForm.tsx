import React from 'react'
import { Box, Grid, Stack, Typography, Divider, Button } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { FiArrowUpRight } from 'react-icons/fi'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Field from '../Field'
import Paper from '../Paper'
const PersonalInfoForm = () => {
  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h6' fontWeight={600}>
          Personal Information
        </Typography>
        <Divider />
        <Stack spacing={4}>
          <Box>
            <FormControl>
              <FormLabel required id='nationality-label' sx={{ fontWeight: 600 }}>
                Nationality
              </FormLabel>
              <RadioGroup row aria-labelledby='nationality-label' name='row-radio-buttons-group'>
                <FormControlLabel
                  value='Turkish'
                  control={<Radio disableRipple disableFocusRipple disableTouchRipple />}
                  label='I am a Turkish citizen'
                />
                <FormControlLabel value='notTurkish' control={<Radio disableRipple />} label='I am a Turkish citizen' />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field label={'Full Name'} />
            </Grid>
            <Grid item xs={6}>
              <Field label={'TC Identification number'} />
            </Grid>
          </Grid> */}
          <Stack direction='row' spacing={4}>
            <Field label={'Full Name'} placeholder={'John Doe'} />
            <Field label={'TC Identification number'} placeholder={'YYMMDDSSSSCAZ'} />
          </Stack>

          <Stack direction='row' spacing={4}>
            <Field label={'Email'} placeholder={'johndoe@gmail.com'} />
            <Field label={'Phone number'} placeholder={'+35843949521'} />
          </Stack>

          <Field label={'Additional Note'} placeholder={'Message'} />

          <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' alignItems='center' spacing={0.5}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        padding: 0,
                        mr: 1,
                        '& .MuiSvgIcon-root': {
                          fontSize: 22,
                        },
                      }}
                    />
                  }
                  label='I Have Read na Aprove'
                  sx={{
                    margin: 0,
                    userSelect: 'none',
                    'span': {
                      fontSize: '14px',
                    },
                  }}
                />
              </FormGroup>
              <Typography variant='body2' color='primary.main' fontWeight={500}>
                Terms & Conditions
              </Typography>
            </Stack>

            <Button variant='contained' size='large' endIcon={<FiArrowUpRight />}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default PersonalInfoForm
