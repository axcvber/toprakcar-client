import * as yup from 'yup'
import { useLocale } from '../hooks/useLocale'
import { phoneRegExp } from '../utils/validations'

export const InsuranceContactsSchema = () => {
  const t = useLocale()
  return yup
    .object({
      fullName: yup
        .string()
        .max(20, t.personalInfoForm.validation.fullName.max)
        .required(t.personalInfoForm.validation.fullName.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.personalInfoForm.validation.fullName.matches)
        .trim(),
      phone: yup
        .string()
        .required(t.personalInfoForm.validation.phone.required)
        .matches(phoneRegExp, t.personalInfoForm.validation.phone.matches),
      email: yup
        .string()
        .email(t.personalInfoForm.validation.email.isEmail)
        .required(t.personalInfoForm.validation.email.required),
    })
    .required()
}
