import React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { HiChevronDown } from 'react-icons/hi'
import Popover from '@mui/material/Popover'
import Fade from '@mui/material/Fade'
import Loader from '../Loader'
import Skeleton from '@mui/material/Skeleton'
import { Box } from '@mui/material'

interface IDropdown {
  title: string
  icon?: JSX.Element
  trigger?: any
  menu?: any
  onTriggerClick?: () => void
  placement?: 'bottom-end' | 'bottom-start'
  isContentLoading?: boolean
  width?: number
}

const Dropdown: React.FC<IDropdown> = ({
  title,
  trigger,
  menu,
  width = '100%',
  icon,
  onTriggerClick,
  placement = 'bottom-end',
  isContentLoading,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const prevOpen = React.useRef(open)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
    if (onTriggerClick) {
      onTriggerClick()
    }
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setOpen(false)

    setTimeout(() => {
      setSelectedIndex(index)
    }, 500)
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <>
      <Button
        // startIcon={icon}
        // endIcon={<HiChevronDown />}
        color='inherit'
        id='dropdown-button'
        aria-label='when device is locked'
        size='extra'
        ref={anchorRef}
        aria-controls={open ? 'locale-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        fullWidth
        sx={{
          'svg': {
            fontSize: 22,
          },
        }}
      >
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
          <Stack direction='row' spacing={1}>
            {icon}
            <Typography noWrap fontWeight={600} fontSize={15} maxWidth={width} textAlign='left'>
              {title}
            </Typography>
          </Stack>

          <HiChevronDown fontSize={22} className='arrow' />
        </Stack>
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement={placement}
        transition
        sx={{
          zIndex: 99999999,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Paper
              elevation={0}
              sx={{
                width: '100%',
                overflow: 'hidden',
                filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.32))',
                my: 1,
                borderRadius: 3,

                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='locale-menu'
                  aria-labelledby='locale-button'
                  onKeyDown={handleListKeyDown}
                  sx={{
                    p: 1,
                  }}
                >
                  {menu ? (
                    menu.map((menuItem: any, inx: number) => (
                      <MenuItem
                        key={inx}
                        selected={inx === selectedIndex}
                        disableGutters
                        sx={{
                          width: '100%',
                          padding: '0',
                          fontSize: 14,
                          fontWeight: 500,
                          borderRadius: 2,
                          color: 'text.secondary',
                          '&:not(:last-child)': {
                            mb: 1,
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'primary.light',
                            color: '#fff',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: 'primary.light',
                            },
                          },
                        }}
                      >
                        {React.cloneElement(menuItem, {
                          onClick: (event: React.MouseEvent<HTMLElement>) => {
                            menuItem.props.onClick()
                            handleMenuItemClick(event, inx)
                          },
                        })}
                      </MenuItem>
                    ))
                  ) : (
                    <Stack spacing={1} width={250} p={1}>
                      <Loader quantity={6}>
                        <Skeleton width={'100%'} height={30} animation='wave' />
                      </Loader>
                    </Stack>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default Dropdown
