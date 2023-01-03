import { Stack, Typography, Box } from '@mui/material'
import Image from 'next/image'
import { useLocale } from '../../hooks/useLocale'

const EmptyState = () => {
  const t = useLocale()

  return (
    <Stack spacing={4} justifyContent='center' alignItems={'center'} mt={10} mb={6}>
      <Box>
        <Image priority width={200} height={150} src={'/empty.svg'} alt='error' />
      </Box>
      <Stack spacing={1} maxWidth={400}>
        <Typography variant='h5' fontWeight={500} color='text.secondary' textAlign='center'>
          {t.dataState.notFound.title}
        </Typography>
        <Typography variant='caption' color='text.secondary' textAlign='center' lineHeight={1.8}>
          {t.dataState.notFound.subtitle}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default EmptyState
