import * as yup from 'yup'
import { useLocale } from '../hooks/useLocale'
import { phoneRegExp } from '../utils/validations'

export const CarPurchaseSchema = () => {
  const t = useLocale()
  return yup.object().shape({
    fullName: yup
      .string()
      .max(20, t.validation.personalInfo.fullName.max)
      .required(t.validation.required)
      .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.validation.personalInfo.fullName.matches)
      .trim(),
    email: yup.string().email(t.validation.personalInfo.email.isEmail).required(t.validation.required),
    phone: yup.string().required(t.validation.required).matches(phoneRegExp, t.validation.personalInfo.phone.matches),
    termsOfService: yup.boolean().required().oneOf([true]),
  })
}
