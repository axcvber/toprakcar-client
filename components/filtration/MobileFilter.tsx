import React, { ReactNode } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Badge from '@mui/material/Badge'
import { FiTarget } from 'react-icons/fi'
import { Box, Stack, Typography, Button } from '@mui/material'
import { HiOutlineFilter } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import ChipNavigation from './ChipNavigation'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useFilterContext } from '../../context/filter/filter-context'
import { useLocale } from '../../hooks/useLocale'

interface IMobileFilter {
  isOpen?: boolean
  onClose?: () => void
  children: ReactNode
}

const MobileFilter: React.FC<IMobileFilter> = ({ children }) => {
  const {  filtered } = useFilterContext()
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true })
  const t = useLocale()

  const totalFiltersCount = Object.values(filtered).reduce(
    (acc, val) => acc + (Array.isArray(val) ? val.length : val !== null),
    0
  )

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button color='inherit' onClick={handleOpen} size='large'>
        <Badge
          color='primary'
          badgeContent={totalFiltersCount}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Stack direction='row' spacing={0.8} px={1} alignItems='center'>
            <HiOutlineFilter fontSize={20} />
            <Typography fontWeight={600} variant='body2'>
              {t.filterNav.filters}
            </Typography>
          </Stack>
        </Badge>
      </Button>

      <SwipeableDrawer
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: { xs: '100%', sm: '350px' },
            height: { xs: '95%', sm: '100%' },
            borderTopLeftRadius: { xs: '15px', sm: 0 },
            borderTopRightRadius: { xs: '15px', sm: 0 },
          },
        }}
        anchor={matches ? 'left' : 'bottom'}
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <FilterHeader onClose={handleClose} title={t.filter.title} />
        <Stack spacing={3} p={3}>
          <ChipNavigation />
          {children}
        </Stack>
        <FilterBottom onClose={handleClose} btnText={t.button.showResults} />
      </SwipeableDrawer>
    </>
  )
}

const FilterHeader: React.FC<{ onClose: () => void, title: string }> = ({ onClose, title }) => {
  return (
    <Stack
      direction='row'
      justifyContent={'space-between'}
      alignItems='center'
      sx={{
        background: '#fff',
        position: 'sticky',
        top: 0,
        py: 3,
        px: 3,
        boxShadow: 25,
        zIndex: 9,
      }}
    >
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        sx={{
          'svg': {
            color: 'primary.main',
            fontSize: 28,
          },
        }}
      >
        <FiTarget />
        <Typography variant='h6' fontWeight={600}>
          {title}
        </Typography>
      </Stack>
      <Button
        onClick={onClose}
        variant='outlined'
        color='primary'
        size='small'
        sx={{
          minWidth: 'auto',
          p: 0.3,
          borderRadius: 2,
        }}
      >
        <IoClose fontSize={22} />
      </Button>
    </Stack>
  )
}

const FilterBottom: React.FC<{ onClose: () => void, btnText: string }> = ({ onClose, btnText }) => {
  return (
    <Box
      sx={{
        background: '#fff',
        position: 'sticky',
        bottom: 0,
        py: 2,
        px: 3,
        boxShadow: 25,
      }}
    >
      <Button fullWidth variant='contained' size='extra' onClick={onClose}>
        {btnText}
      </Button>
    </Box>
  )
}

export default MobileFilter
