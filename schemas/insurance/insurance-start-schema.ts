import * as yup from 'yup'
import { useLocale } from '../../hooks/useLocale'
import { checkTcNum, drivingLicenseRegExp } from '../../utils/validations'

export const InsuranceStartSchema = () => {
  const t = useLocale()
  return yup
    .object({
      hasLicense: yup.boolean(),
      licensePlate: yup.string().when('hasLicense', {
        is: true,
        then: yup
          .string()
          .required(t.validation.required)
          .matches(drivingLicenseRegExp, t.validation.insurance.licensePlate.incorrect),
        otherwise: yup.string(),
      }),
      TCIdNumber: yup
        .string()
        .required(t.validation.required)
        .test('tc-validation', t.validation.personalInfo.idNumber.incorrectTC, checkTcNum),
      termsOfService: yup.boolean().required().oneOf([true]),
    })
    .required()
}
