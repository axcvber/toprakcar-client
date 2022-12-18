import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Button, Stack } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { HiChevronDown } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import { styled } from '@mui/material/styles'
import Fade from '@mui/material/Fade'
import { TransitionProps } from '@mui/material/transitions'

interface IDatePicker {
  value: Dayjs
  handleChange: (newValue: Dayjs | null) => void
  placeholder: string
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} timeout={300} />
})

const DatePicker: React.FC<IDatePicker> = ({ value, handleChange, placeholder }) => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <DateTimePicker
      //@ts-ignore
      TransitionComponent={Transition}
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
      value={value}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(newValue) => {
        handleChange(newValue)
        console.log('newValue', newValue)
      }}
      renderInput={({ inputRef, inputProps }) => (
        <Button color='inherit' fullWidth ref={inputRef} size='extra' onClick={() => setOpen(true)}>
          <Stack
            width={'100%'}
            direction='row'
            alignItems='center'
            justifyContent={'space-between'}
            spacing={1.5}
            sx={{
              'svg': {
                color: 'primary.main',
                fontSize: 22,
                minWidth: 22,
              },
              '.arrow': {
                color: 'text.secondary',
              },
            }}
          >
            <BsCalendar3 fontSize={22} />
            <StyledInput {...inputProps} readOnly placeholder={placeholder} />
            <HiChevronDown fontSize={22} className='arrow' />
          </Stack>
        </Button>
      )}
      dateRangeIcon={<HiChevronDown />}
    />
  )
}

const StyledInput = styled('input')(({ theme }) => ({
  border: 'none',
  width: '100%',
  // width: '100%',
  // maxWidth: 200,
  fontSize: 15,
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'transparent',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '...',
  WebkitBoxOrient: 'vertical',

  '&::placeholder': {
    color: theme.palette.text.secondary,
  },
}))

export default DatePicker
