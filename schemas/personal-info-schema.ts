import * as yup from 'yup'
import { useLocale } from '../hooks/useLocale'
import { checkTcNum, passportRegExp, phoneRegExp } from '../utils/validations'

export const PersonalInfoSchema = () => {
  const t = useLocale()
  return yup
    .object({
      nationality: yup.string(),
      passportId: yup.string().when('nationality', (val) => {
        if (val === 'turk')
          return yup
            .string()
            .required(t.validation.required)
            .test('tc-validation', t.validation.personalInfo.idNumber.incorrectTC, checkTcNum)
        if (val === 'notTurk')
          return yup
            .string()
            .required(t.validation.required)
            .matches(passportRegExp, t.validation.personalInfo.idNumber.incorrectPasswordNum)
        else return yup.string().notRequired()
      }),

      fullName: yup
        .string()
        .max(20, t.validation.personalInfo.fullName.max)
        .required(t.validation.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.validation.personalInfo.fullName.matches)
        .trim(),
      email: yup.string().email(t.validation.personalInfo.email.isEmail).required(t.validation.required),
      phone: yup.string().required(t.validation.required).matches(phoneRegExp, t.validation.personalInfo.phone.matches),
      message: yup.string().max(300, t.validation.personalInfo.message.max).trim(),
      termsOfService: yup.boolean().required().oneOf([true]),
    })
    .required()
}
