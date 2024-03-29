import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Button, Stack, Tooltip } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { HiChevronDown } from 'react-icons/hi'
import { BsCalendar3 } from 'react-icons/bs'
import { styled } from '@mui/material/styles'
import Fade from '@mui/material/Fade'
import { TransitionProps } from '@mui/material/transitions'

interface IDatePicker {
  value: Dayjs | null
  handleChange: (newValue: Dayjs | null) => void
  placeholder: string
  isError?: boolean
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} timeout={300} />
})

const DatePicker: React.FC<IDatePicker> = ({ value, handleChange, placeholder, isError }) => {
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
                color: isError ? 'error.main' : 'primary.main',
                fontSize: 22,
                minWidth: 22,
              },
              '.arrow': {
                color: isError ? 'error.main' : 'text.secondary',
              },
            }}
          >
            <BsCalendar3 fontSize={22} />
            <StyledInput {...inputProps} readOnly placeholder={placeholder} isError={isError} />
            <HiChevronDown fontSize={22} className='arrow' />
          </Stack>
        </Button>
      )}
      dateRangeIcon={<HiChevronDown />}
    />
  )
}

const StyledInput = styled('input', {
  shouldForwardProp: (prop) => prop !== 'isError',
})<{ isError?: boolean }>(({ isError, theme }) => ({
  border: 'none',
  width: '100%',
  // width: '100%',
  // maxWidth: 200,
  fontSize: 15,
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'transparent',
  color: isError ? theme.palette.error.main : theme.palette.text.secondary,
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '...',
  WebkitBoxOrient: 'vertical',

  '&::placeholder': {
    color: isError ? theme.palette.error.main : theme.palette.text.secondary,
    opacity: 1,
  },
}))

export default DatePicker
