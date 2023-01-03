import Image from 'next/image'
import { Stack, Typography, Box } from '@mui/material'
import { useLocale } from '../../hooks/useLocale'

const ErrorState = () => {
  const t = useLocale()
  return (
    <Stack spacing={4} justifyContent='center' alignItems={'center'} mt={10} mb={6}>
      <Box>
        <Image priority width={200} height={150} src={'/error.svg'} alt='error' />
      </Box>
      <Stack spacing={1} maxWidth={400}>
        <Typography variant='h5' fontWeight={500} color='text.secondary' textAlign='center'>
          {t.dataState.error.title}
        </Typography>
        <Typography variant='caption' color='text.secondary' textAlign='center' lineHeight={1.8}>
          {t.dataState.error.subtitle}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ErrorState
