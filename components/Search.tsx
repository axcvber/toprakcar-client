import { Box, Button, Stack } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import TextField from '@mui/material/TextField'
import dayjs, { Dayjs } from 'dayjs'

const Search = () => {
  // const [value, setValue] = React.useState<any | null>()
  const [value, setValue] = React.useState<Dayjs | null>(dayjs())
  return (
    <Stack
      direction={'row'}
      justifyContent='space-between'
      alignItems='center'
      width={'100%'}
      spacing={3}
      sx={{
        background: '#fff',
        borderRadius: 3,
        p: 2,
        boxShadow: 12,
      }}
    >
      <Box>Choose a location</Box>
      <Box>
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat='p'
          timeIntervals={15}
          dateFormat='Pp'
          customInput={<ExampleCustomInput />}
          calendarClassName='rasta-stripes'
        /> */}
        <DateTimePicker
          // disableOpenPicker
          // views={['month', 'day', 'hours', 'minutes']}
          disablePast
          label='Pick-up date'
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField color='primary' size='small' {...params} />}
        />
      </Box>
      <Box>
        <DateTimePicker
          // disableOpenPicker
          // views={['month', 'day', 'hours', 'minutes']}
          disablePast
          label='Return date'
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
      </Box>
      <Button
        startIcon={<FiSearch />}
        variant='contained'
        size='large'
        sx={{ color: '#fff', textTransform: 'capitalize', fontSize: 20, px: 6, py: 1.5 }}
      >
        Search
      </Button>
    </Stack>
  )
}

export default Search
