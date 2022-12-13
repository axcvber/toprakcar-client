import React, { ReactNode } from 'react'
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
import Popover from '@mui/material/Popover'
import Fade from '@mui/material/Fade'
import Menu from '@mui/material/Menu'

interface IDropdown {
  title: string
  icon?: JSX.Element
  trigger?: any
  menu?: any
  onTriggerClick?: () => void
}
const Dropdown: React.FC<IDropdown> = ({ title, trigger, menu, icon, onTriggerClick }) => {
  // const [open, setOpen] = React.useState(false)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const open = Boolean(anchorEl)
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    if (onTriggerClick) {
      onTriggerClick()
    }
  }

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const handleClose = (event: Event | React.SyntheticEvent) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
  //     return
  //   }

  //   setOpen(false)
  // }

  // function handleListKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault()
  //     setOpen(false)
  //   } else if (event.key === 'Escape') {
  //     setOpen(false)
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open)
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current!.focus()
  //   }

  //   prevOpen.current = open
  // }, [open])

  return (
    <div>
      {/* <Button
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        startIcon={icon}
        endIcon={<HiChevronDown />}
        color='inherit'
      >
        {title}
      </Button> */}
      <Button
        startIcon={icon}
        endIcon={<HiChevronDown />}
        color='inherit'
        id='lock-button'
        aria-haspopup='listbox'
        aria-controls='lock-menu'
        aria-label='when device is locked'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickListItem}
        size='large'
      >
        {title}
      </Button>
      <Menu
        elevation={0}
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '& .Mui-selected': {
            backgroundColor: 'lightblue',
          },
          '& .MuiPaper-root': {
            borderRadius: 3,
            marginTop: '8px',
            minWidth: 180,
            maxHeight: 300,
            // color: 'red',
            boxShadow:
              'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
              padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
              fontSize: 15,
              fontWeight: 500,
              color: 'text.secondary',
            },
          },
        }}
      >
        {menu.map((menuItem: any, inx: number) => (
          <MenuItem key={inx} selected={inx === selectedIndex} disableGutters sx={{ padding: '0' }}>
            {React.cloneElement(menuItem, {
              onClick: (event: React.MouseEvent<HTMLElement>) => {
                menuItem.props.onClick()
                handleMenuItemClick(event, inx)
              },
            })}
          </MenuItem>
        ))}
      </Menu>
      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          width: '100%',
        }}
        PaperProps={{
          sx: {
            position: 'absolute',
            top: 0,
            left: 0,
            // width: '100%',
          },
        }}
        TransitionComponent={Fade}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover> */}
      {/* <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-start'
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  {menu.map((menuItem: any, inx: number) => (
                    <MenuItem key={inx}>
                      {React.cloneElement(menuItem, {
                        onClick: () => {
                          menuItem.props.onClick()
                          setOpen(false)
                        },
                      })}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}

      {/* <Popper
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
                my: 1,
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
                  {menu.map((menuItem: any, inx: number) => (
                    <MenuItem key={inx}>
                      {React.cloneElement(menuItem, {
                        onClick: () => {
                          menuItem.props.onClick()
                          setOpen(false)
                        },
                      })}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper> */}
    </div>
  )
}

export default Dropdown
