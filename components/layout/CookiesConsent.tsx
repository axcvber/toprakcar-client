import React from 'react'
import { useSnackbar } from 'notistack'
import { SnackbarContent } from 'notistack'
import { Stack, Typography, Button, Link as MUILink } from '@mui/material'
import { BiCookie } from 'react-icons/bi'
import { setCookie } from 'cookies-next'
import { useLocale } from '../../hooks/useLocale'
import Link from 'next/link'

const CookiesConsent = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { closeSnackbar } = useSnackbar()
  const t = useLocale()

  const onAcceptCookie = () => {
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 })
    closeSnackbar()
  }

  return (
    <SnackbarContent ref={ref} role='alert'>
      <Stack
        sx={{
          width: { xs: '100%', sm: '550px', md: '700px', lg: '1140px' },
          backgroundColor: '#fff',
          boxShadow: 25,
          p: 3,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          'svg': {
            color: 'primary.main',
            fontSize: 40,
          },
        }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <BiCookie />
        <Typography
          variant='body2'
          color='text.secondary'
          fontWeight={500}
          flex={1}
          textAlign={{ xs: 'center', md: 'left' }}
          lineHeight={1.8}
        >
          {t.cookiesConsent.text}{' '}
          <Link href={'/cookie-policy'} passHref>
            <MUILink component='a' underline='always' variant='body2' fontWeight={500}>
              {t.links.readMore}
            </MUILink>
          </Link>
        </Typography>
        <Button
          variant='contained'
          size='large'
          onClick={onAcceptCookie}
          sx={{ alignSelf: { xs: 'stretch', md: 'inherit' } }}
        >
          {t.button.acceptAll}
        </Button>
      </Stack>
    </SnackbarContent>
  )
})

CookiesConsent.displayName = 'CookiesConsent'

export default CookiesConsent
