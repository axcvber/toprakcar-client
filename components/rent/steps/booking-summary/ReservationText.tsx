import Paper from '../../../layout/Paper'
import { Stack, Typography } from '@mui/material'
import { useRentContext } from '../../../../context/rent/rent-context'
import OrderTable from '../../../OrderTable'

const ReservationText = () => {
  const { selectedCar, userData, orderSummary } = useRentContext()

  const orderResult = [
    {
      title: 'Order Number',
      value: '854783',
    },
    {
      title: 'Name',
      value: userData?.fullName,
    },
    {
      title: 'Phone',
      value: userData?.phone,
    },
    {
      title: 'Email',
      value: userData?.email,
    },
    {
      title: 'Vehicle',
      value: selectedCar?.attributes?.name,
    },
    {
      title: 'Day Count',
      value: orderSummary?.dayCount,
    },
    {
      title: 'Extras',
      value: orderSummary?.extrasPrice.toLocaleString(),
    },
    {
      title: 'Order Amount',
      value: orderSummary?.totalAmount.toLocaleString(),
    },
  ]

  return (
    <Paper>
      <Stack spacing={3}>
        <Typography variant='h5' fontWeight={600}>
          Thanks for your order!
        </Typography>

        <Typography variant='body2' color={'text.secondary'} lineHeight={1.8} fontWeight={500}>
          Dear{' '}
          <Typography variant='body2' fontWeight={600} component='span' mr={0.5}>
            {userData?.fullName}
          </Typography>
          ​​your pre-reservation has been received. The information you sent has reached our system. You will be
          informed by e-mail or telephone when your reservation is confirmed. We thank you. Toprakcar
        </Typography>

        <OrderTable data={orderResult} />

        <Stack spacing={1}>
          <Typography variant='body2' lineHeight={1.8} fontWeight={500} color={'text.secondary'}>
            <Typography color='primary' variant='body2' fontWeight={600} component='span' mr={0.5}>
              Note:
            </Typography>
            If we do not receive a response within 24 hours, you either entered your email address incorrectly or our
            emails are sent to you as spam (Junk Mail). Please enter your e -mail and mark https://www.kirmizicar.com/
            as a secure address. If your arrival date is within the next 24 hours, please contact us at the phone
            numbers below.
          </Typography>
          <Typography color='primary' variant='body2' fontWeight={600}>
            Tel : +90532 588 08 05 (You can call 7 / 24)
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ReservationText
