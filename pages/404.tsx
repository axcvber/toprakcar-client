import { Stack, Typography, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { useLocale } from '../hooks/useLocale'

const NotFoundPage = () => {
  const t = useLocale()

  return (
    <Container>
      <Stack width={'100%'} pt={10} pb={20} justifyContent='center' alignItems='center' spacing={3}>
        <Image width={400} height={300} src={'/404.svg'} alt='404' />
        <Stack spacing={2} alignItems='center'>
          <Typography variant='h4' textAlign='center' fontWeight={600} color='text.primary'>
            {t.page404.title}
          </Typography>
          <Typography variant='body1' textAlign='center' fontWeight={500} color='text.secondary'>
            {t.page404.subtitle}
          </Typography>

          <Link href='/' passHref>
            <Button startIcon={<HiOutlineExternalLink />} variant='outlined' size='large'>
              {t.page404.btn}
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default NotFoundPage
