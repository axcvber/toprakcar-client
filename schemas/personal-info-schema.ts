import * as yup from 'yup'
import { useLocale } from '../hooks/useLocale'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const PersonalInfoSchema = () => {
  const t = useLocale()
  return yup
    .object({
      email: yup
        .string()
        .email(t.personalInfoForm.validation.email.isEmail)
        .required(t.personalInfoForm.validation.email.required),
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
      message: yup.string().max(300, t.personalInfoForm.validation.message.max).trim(),
    })
    .required()
}
