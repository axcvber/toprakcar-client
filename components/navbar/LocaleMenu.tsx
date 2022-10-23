import React from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useRouter } from 'next/router'
import Skeleton from '@mui/material/Skeleton'
interface LocaleProps {
  icon: string
  label: string
  locale: string
}

const localeArr = [
  {
    icon: '/tr.png',
    label: 'Turkish',
    locale: 'tr',
  },
  {
    icon: '/en.png',
    label: 'English',
    locale: 'en',
  },
  {
    icon: '/ru.png',
    label: 'Russian',
    locale: 'ru',
  },
]

const LocaleMenu = () => {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = React.useState<LocaleProps | undefined>()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const onSelectLocale = (item: LocaleProps) => {
    if (router.locale !== item.locale) {
      router.push(router.asPath, undefined, { locale: item.locale })
      setCurrentLocale(item)
    }
    handleClose()
  }
  React.useEffect(() => {
    const currentLocale = localeArr.find((item) => item.locale === router.locale)
    if (currentLocale) {
      setCurrentLocale(currentLocale)
    }
  }, [router.locale])

  return (
    <div>
      {currentLocale?.icon ? (
        <IconButton
          onClick={handleClick}
          size='small'
          aria-controls={open ? 'locale-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          color='primary'
        >
          <Avatar sx={{ width: 28, height: 28, boxShadow: '0px 2px 8px rgba(0,0,0,0.5)' }} src={currentLocale.icon} />
        </IconButton>
      ) : (
        <Skeleton variant='circular' width={30} height={30} />
      )}

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
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
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {localeArr.map((item) => (
          <MenuItem key={item.label} onClick={() => onSelectLocale(item)} sx={{ fontSize: '15px' }}>
            <Avatar
              sx={{
                width: '24px !important',
                height: '24px !important',
              }}
              src={item.icon}
            />
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LocaleMenu
