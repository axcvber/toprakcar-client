import React from 'react'
import { LocationEntity, useGetLocationsLazyQuery } from '../../generated'
import { Box, Button, Stack, Typography } from '@mui/material'
import { IoLocationSharp } from 'react-icons/io5'
import { HiChevronDown } from 'react-icons/hi'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Fade from '@mui/material/Fade'
import Skeleton from '@mui/material/Skeleton'
import Loader from '../Loader'

interface ILocationDropdown {
  title: string
  onSelectLocation: (option: LocationEntity) => void
  placement?: 'bottom-end' | 'bottom-start'
  width?: number
  isError?: boolean
}

const LocationDropdown: React.FC<ILocationDropdown> = ({
  title,
  onSelectLocation,
  isError,
  width = 200,
  placement,
}) => {
  const [getLocations, { loading, error, data }] = useGetLocationsLazyQuery({
    notifyOnNetworkStatusChange: true,
  })
  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const prevOpen = React.useRef(open)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
    if (!data) {
      getLocations()
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
            color: isError ? 'error.main' : 'text.secondary',
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
          <Stack direction='row' spacing={1}>
            <IoLocationSharp fontSize={24} />
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
                  {data?.locations?.data ? (
                    data.locations.data.map((item, inx: number) => (
                      <MenuItem
                        key={item.id}
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
                        <Box
                          component='span'
                          key={item.id}
                          width={'100%'}
                          onClick={(event: React.MouseEvent<HTMLElement>) => {
                            onSelectLocation(item)
                            handleMenuItemClick(event, inx)
                          }}
                          px={2}
                          py={1}
                        >
                          {item.attributes?.address}
                        </Box>
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

export default LocationDropdown
