import Paper from '../../../layout/Paper'
import { Stack, Typography } from '@mui/material'
import { useRentContext } from '../../../../context/rent/rent-context'
import OrderTable from '../../../OrderTable'
import { useLocale } from '../../../../hooks/useLocale'
import { useAppContext } from '../../../../context/appContext'

const ReservationText = () => {
  const { selectedCar, userData, orderSummary } = useRentContext()
  const { initialData } = useAppContext()
  const phoneNumbers = initialData?.contact?.data?.attributes?.phoneNumbers

  const t = useLocale()

  const orderResult = [
    {
      title: t.forms.labels.fullName,
      value: userData?.fullName,
    },
    {
      title: t.forms.labels.email,
      value: userData?.email,
    },
    {
      title: t.forms.labels.phone,
      value: userData?.phone,
    },
    {
      title: t.reservation.summary.vehicle,
      value: selectedCar?.attributes?.name,
    },
    {
      title: t.reservation.summary.daysNum,
      value: orderSummary?.dayCount,
    },
    {
      title: t.reservation.summary.extras,
      value: `${orderSummary?.extrasPrice.toLocaleString()} ₺`,
    },
    {
      title: t.reservation.summary.totalAmount,
      value: `${orderSummary?.totalAmount.toLocaleString()} ₺`,
    },
  ]

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h5' fontWeight={600}>
          {t.reservation.bookingSummary.title}
        </Typography>

        <Typography variant='body2' color={'text.secondary'} lineHeight={1.8} fontWeight={500}>
          {t.reservation.bookingSummary.desc}
        </Typography>

        <OrderTable data={orderResult} />

        <Stack spacing={1}>
          <Typography variant='body2' lineHeight={1.8} fontWeight={500} color={'text.secondary'}>
            <Typography color='primary' variant='body2' fontWeight={600} component='span' mr={0.5}>
              {t.reservation.bookingSummary.note}:
            </Typography>
            {t.reservation.bookingSummary.noteText}
          </Typography>
          <Stack direction='row' gap={1} flexWrap='wrap'>
            <Typography color='primary' variant='body2' fontWeight={600}>
              Tel :
            </Typography>
            <Stack direction='row' gap={1} flexWrap='wrap' alignItems='center'>
              {phoneNumbers &&
                phoneNumbers.map((item) => (
                  <Typography key={item?.id} color='primary' variant='body2' fontWeight={600}>
                    {item?.phone}
                  </Typography>
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ReservationText
