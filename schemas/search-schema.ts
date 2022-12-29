import * as yup from 'yup'
import { useLocale } from '../hooks/useLocale'

export const SearchSchema = () => {
  const t = useLocale()
  return yup.object().shape({
    pickUpLocation: yup.object().required(t.validation.search.pickUpLocation.required),
    pickUpDate: yup
      .date()
      .min(new Date(), t.validation.search.pickUpDate.min)
      .nullable()
      .required(t.validation.search.pickUpDate.required),
    dropOffDate: yup
      .date()
      .when('pickUpDate', (pickUpDate, schema) => {
        if (pickUpDate) {
          const dayAfter = new Date(pickUpDate.getTime() + 86400000)
          return schema.min(dayAfter, t.validation.search.dropOffDate.min)
        }

        return schema
      })
      .nullable()
      .required(t.validation.search.dropOffDate.required),
  })
}
