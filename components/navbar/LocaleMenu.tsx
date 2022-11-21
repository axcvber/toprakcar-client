import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useRouter } from 'next/router'
import Skeleton from '@mui/material/Skeleton'
import { Button, Stack, Typography } from '@mui/material'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import { HiChevronDown } from 'react-icons/hi'

interface LocaleProps {
  icon: string
  label: string
  locale: string
}

const localeArr = [
  {
    icon: '/tr2.png',
    label: 'Türkçe',
    locale: 'tr',
  },
  {
    icon: '/us2.png',
    label: 'English',
    locale: 'en',
  },
  {
    icon: '/ru2.png',
    label: 'Русский',
    locale: 'ru',
  },
]

interface ILocaleMenu {
  scrolledToDown?: boolean
}

const LocaleMenu: React.FC<ILocaleMenu> = ({ scrolledToDown }) => {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = React.useState<LocaleProps | undefined>()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const prevOpen = React.useRef(open)

  React.useEffect(() => {
    if (scrolledToDown) setOpen(false)
  }, [scrolledToDown])

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  React.useEffect(() => {
    const currentLocale = localeArr.find((item) => item.locale === router.locale)
    if (currentLocale) {
      setCurrentLocale(currentLocale)
    }
  }, [router.locale])

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

  const onSelectLocale = (item: LocaleProps) => {
    if (router.locale !== item.locale) {
      router.push(router.asPath, undefined, { locale: item.locale })
      setCurrentLocale(item)
    }
    setOpen(false)
  }

  return (
    <>
      {currentLocale ? (
        <Stack direction={'row'} alignItems='center'>
          <Button
            ref={anchorRef}
            id='locale-button'
            aria-controls={open ? 'locale-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            color='inherit'
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
            <Image priority width={28} height={28} src={currentLocale.icon} alt='lang' />
            <Typography component='span' ml={1} fontSize={14} fontWeight={600} textTransform='capitalize'>
              {currentLocale.locale.charAt(0).toUpperCase() + currentLocale.locale.slice(1)}
            </Typography>
            <HiChevronDown fontSize={20} />
          </Button>
        </Stack>
      ) : (
        <Skeleton width={91} height={55} />
      )}

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-end'
        transition
        disablePortal
        sx={{
          zIndex: 9,
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'right top',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                overflow: 'visible',
                filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.32))',
                mt: 1.5,
                borderRadius: 2,
                background: '#fff',
                position: 'relative',
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: -5,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: '#fff',
                  transform: 'rotate(45deg)',
                  zIndex: 0,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='locale-menu'
                  aria-labelledby='locale-button'
                  onKeyDown={handleListKeyDown}
                >
                  {localeArr.map((item) => (
                    <MenuItem key={item.label} color='primary' onClick={() => onSelectLocale(item)}>
                      <Image priority width={24} height={24} src={item.icon} alt='lang' />
                      <Typography component='span' ml={1} fontSize={14} fontWeight={500} color='text.secondary'>
                        {item.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default LocaleMenu
