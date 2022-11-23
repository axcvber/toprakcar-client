import { Box, Button, Stack, Typography } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import TextField from '@mui/material/TextField'
import dayjs, { Dayjs } from 'dayjs'
import Dropdown from './Dropdown'
import { IoLocationSharp } from 'react-icons/io5'

const data = [
  {
    id: 1,
    location: 'Adana Hava Limanı İç Hatlar',
  },
  {
    id: 2,
    location: 'Adana Otobüs Terminali',
  },
  {
    id: 3,
    location: 'Antalya Hava Limanı Dış Hatlar',
  },
  {
    id: 4,
    location: 'Alanya Hava Limanı',
  },
  {
    id: 5,
    location: 'Gaziantep Hava Limanı İç Hatlar',
  },
  {
    id: 6,
    location: 'Muğla Dalaman',
  },
  {
    id: 7,
    location: 'Kahramanmaraş',
  },
  {
    id: 8,
    location: 'Kayseri Merkez',
  },
]

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
      <Box>
        <Dropdown
          title={'Choose a location'}
          icon={<IoLocationSharp fontSize={24} color='#FF8A5D' />}
          //   <Stack direction='row' spacing={1}>
          //   <IoLocationSharp fontSize={24} color='#FF8A5D' />
          //   <Typography>Choose a location</Typography>
          // </Stack>
          // menu={[<Box>Create</Box>, <Box>Edit</Box>, <Box>Delete</Box>]}
        />
      </Box>
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
