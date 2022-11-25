import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Box, Button, Stack, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { HiChevronDown } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import { styled } from '@mui/material/styles'

const DatePicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null)
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <DateTimePicker
      // disableOpenPicker
      hideTabs
      showToolbar={false}
      views={['month', 'day', 'hours', 'minutes']}
      PopperProps={{
        sx: {
          '& .MuiPaper-root': {
            border: '1px solid',
            borderColor: 'divider',
            my: 1,
            boxShadow: 2,
            borderRadius: 3,
          },
          '.MuiClock-clock': {
            background: '#FAFAFA',
            border: '1px solid',
            borderColor: 'divider',
          },
        },
      }}
      disablePast
      label='Pick-up date'
      value={value}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(newValue) => setValue(newValue)}
      renderInput={({ inputRef, inputProps }) => (
        <Button color='inherit' ref={inputRef} size='extra' onClick={() => setOpen(true)}>
          <Stack
            direction='row'
            alignItems='center'
            spacing={1.5}
            sx={{
              'svg': {
                color: 'primary.main',
              },
              '.arrow': {
                color: 'text.secondary',
              },
            }}
          >
            <BsCalendar3 fontSize={22} />
            <StyledInput {...inputProps} readOnly placeholder='Pick-up date' />
            <HiChevronDown fontSize={20} className='arrow' />
          </Stack>
        </Button>
      )}
      dateRangeIcon={<HiChevronDown />}
    />
  )
}

const StyledInput = styled('input')(({ theme }) => ({
  border: 'none',
  width: '160px',
  fontSize: 15,
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'transparent',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,

  '&::placeholder': {
    color: theme.palette.text.secondary,
  },
}))

export default DatePicker
