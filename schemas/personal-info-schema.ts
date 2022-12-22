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
            .required('Please fill out this field')
            .test('tc-validation', 'Incorrect TC Identification number', checkTcNum)
        if (val === 'notTurk')
          return yup
            .string()
            .required('Please fill out this field')
            .matches(passportRegExp, 'Incorrect Passport Number')
        else return yup.string().notRequired()
      }),

      fullName: yup
        .string()
        .max(20, t.personalInfoForm.validation.fullName.max)
        .required(t.personalInfoForm.validation.fullName.required)
        .matches(/^[a-zA-ZА-Яа-я\s]+$/, t.personalInfoForm.validation.fullName.matches)
        .trim(),

      // TCIdNumber: yup
      //   .string()
      //   .required('Please fill out this field')
      //   .test('tc-validation', 'Incorrect TC Identification number', checkTcNum),
      // passportIdNumber: yup
      //   .string()
      //   .required('Please fill out this field')
      //   .matches(passportRegExp, 'Incorrect Passport Number'),

      email: yup
        .string()
        .email(t.personalInfoForm.validation.email.isEmail)
        .required(t.personalInfoForm.validation.email.required),
      phone: yup
        .string()
        .required(t.personalInfoForm.validation.phone.required)
        .matches(phoneRegExp, t.personalInfoForm.validation.phone.matches),
      message: yup.string().max(300, t.personalInfoForm.validation.message.max).trim(),
      termsOfService: yup.boolean().required().oneOf([true]),
    })
    .required()
}
