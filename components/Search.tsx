import { Box, Button, Stack, Typography, Divider } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import TextField from '@mui/material/TextField'
import dayjs, { Dayjs } from 'dayjs'
import Dropdown from './Dropdown'
import { IoLocationSharp } from 'react-icons/io5'
import { HiChevronDown } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import DatePicker from './DatePicker'
import InputAdornment from '@mui/material/InputAdornment'

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
  {
    id: 9,
    location: 'Adana Hava Limanı İç Hatlar',
  },
  {
    id: 10,
    location: 'Adana Otobüs Terminali',
  },
  {
    id: 11,
    location: 'Antalya Hava Limanı Dış Hatlar',
  },
  {
    id: 12,
    location: 'Alanya Hava Limanı',
  },
  {
    id: 13,
    location: 'Gaziantep Hava Limanı İç Hatlar',
  },
  {
    id: 14,
    location: 'Muğla Dalaman',
  },
  {
    id: 15,
    location: 'Kahramanmaraş',
  },
  {
    id: 16,
    location: 'Kayseri Merkez',
  },
]

interface ISearch {
  forModal?: boolean
}

const Search: React.FC<ISearch> = ({ forModal }) => {
  // const [value, setValue] = React.useState<any | null>()
  const [value, setValue] = React.useState<Dayjs | null>(dayjs())
  const [open, setOpen] = React.useState<boolean>(false)
  const [sortTitle, setSortTitle] = useState('Recommended')
  const onSelectSort = (title: string) => {
    setSortTitle(title)
  }
  if (forModal) {
    return (
      <Stack spacing={2}>
        <Dropdown
          title={sortTitle}
          icon={<IoLocationSharp fontSize={24} color='#FF8A5D' />}
          menu={data.map((item) => (
            <Box key={item.id} onClick={() => onSelectSort(item.location)}>
              {item.location}
            </Box>
          ))}
        />

        <DatePicker />
        <DatePicker />
      </Stack>
    )
  }

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent='space-between'
      alignItems='center'
      width={'100%'}
      gap={3}
      sx={{
        background: '#fff',
        borderRadius: 3,
        p: 2,
        boxShadow: 12,
      }}
    >
      <Box minWidth={300}>
        <Dropdown
          title={sortTitle}
          icon={<IoLocationSharp fontSize={24} color='#FF8A5D' />}
          menu={data.map((item) => (
            <Box key={item.id} width={'100%'} onClick={() => onSelectSort(item.location)} px={2} py={1}>
              {item.location}
            </Box>
          ))}
        />
      </Box>
      <Box>{/* <DatePicker /> */}</Box>

      <Box>{/* <DatePicker /> */}</Box>
      <Button startIcon={<FiSearch />} variant='contained' size='extra' sx={{ color: '#fff', fontSize: 18, px: 6 }}>
        Search
      </Button>
    </Stack>
  )
}

export default Search
