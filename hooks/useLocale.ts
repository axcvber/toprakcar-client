import { useRouter } from 'next/router'
import { en, ru, tr, uk } from '../locales'

export const useLocale = () => {
  const router = useRouter()
  let t
  switch (router.locale) {
    case 'tr':
      t = tr
      break
    case 'en':
      t = en
      break
    case 'ru':
      t = ru
      break
    case 'uk':
      t = uk
      break
    default:
      t = tr
  }
  return t
}
