import React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { HiChevronDown } from 'react-icons/hi'

interface IDropdown {
  title: string
  icon?: JSX.Element
  trigger?: any
  menu?: any
}
const Dropdown: React.FC<IDropdown> = ({ title, trigger, menu, icon }) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div>
      {/* {React.cloneElement(trigger, {
        onClick: handleToggle,
        ref: anchorRef,
      })} */}
      {/* <Button
        ref={anchorRef}
        id='locale-button'
        aria-controls={open ? 'locale-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        color='inherit'
        size='large'
        sx={(theme) => ({
          borderRadius: '8px',
          'span, svg': {
            color: theme.palette.text.disabled,
            transition: 'color 0.2s ease',
          },
          '&:hover, & .Mui-focusVisible': {
            'span, svg': {
              color: theme.palette.text.primary,
            },
          },
        })}
      >
        {icon && icon}
        <Typography component='span' ml={1} fontSize={14} fontWeight={600} textTransform='capitalize'>
          {title}
        </Typography>
        <HiChevronDown fontSize={20} />
      </Button> */}
      <Button
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        color='inherit'
        size='large'
        sx={{ position: 'relative' }}
      >
        {icon && icon}
        <Typography component='span' ml={1} fontSize={14} fontWeight={600} textTransform='capitalize'>
          {title}
        </Typography>
        <HiChevronDown fontSize={20} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-end'
        transition
        disablePortal
        keepMounted
        sx={{
          zIndex: 9,
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={
              {
                // transformOrigin: placement === 'bottom-end' ? 'right top' : 'left bottom',
              }
            }
          >
            <Paper
              sx={{
                mt: 1,
                overflow: 'visible',
                filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.32))',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default Dropdown
