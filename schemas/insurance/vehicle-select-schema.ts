import * as yup from 'yup'
import { useLocale } from '../../hooks/useLocale'

export const VehicleSelectSchema = () => {
  const t = useLocale()
  return yup.object().shape({
    brand: yup.string().required(t.validation.required),
    year: yup
      .number()
      .typeError(t.validation.required)
      .required(t.validation.required)
      .min(1970, t.validation.insurance.vehicleSelect.min)
      .max(new Date().getFullYear(), t.validation.insurance.vehicleSelect.max),
    model: yup.string().trim().required(t.validation.required),
  })
}
