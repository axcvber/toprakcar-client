import * as yup from 'yup'
import { useLocale } from '../../hooks/useLocale'

export const VehicleInfoSchema = () => {
  const t = useLocale()
  return yup.object().shape({
    licenseSerial: yup
      .string()
      .required(t.validation.required)
      .matches(/^[A-Z]{2}$/, t.validation.insurance.vehicleInfo.licenseSerial.incorrect),
    licenseNumber: yup
      .string()
      .required(t.validation.required)
      .matches(/^[0-9]+$/, t.validation.insurance.vehicleInfo.licenseNumber.incorrect)
      .min(6, t.validation.insurance.vehicleInfo.licenseNumber.minMax)
      .max(6, t.validation.insurance.vehicleInfo.licenseNumber.minMax),
  })
}
