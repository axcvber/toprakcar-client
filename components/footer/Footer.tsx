import { Box, Container, Divider, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { useLocale } from '../../hooks/useLocale'
import Logo from '../Logo'
import SocialIcons from './SocialIcons'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

interface IFooterLink {
  path: string
  label: string
  variant?: any
  fontWeight?: number
}

interface CreatorLink {
  name: string
  link: string
  createdText: string
}

const workTime = [
  {
    id: 1,
    text: 'Monday - Friday: 9:00 - 22:00',
  },
  {
    id: 2,
    text: 'Saturday: 10:00 - 17:00',
  },
  {
    id: 3,
    text: 'Sunday: 12:00 - 15:00',
  },
]

const icons = [
  {
    id: 1,
    icon: <FaInstagram />,
    link: '#',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: '#',
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    link: '#',
  },
  {
    id: 4,
    icon: <FaFacebookF />,
    link: '#',
  },
]

const Footer = () => {
  const t = useLocale()
  return (
    <Box sx={{ marginTop: 'auto', background: '#1D252C', pt: 8, pb: 3, color: 'text.secondary', boxShadow: 15 }}>
      <Container maxWidth='xl'>
        <Stack gap={6} direction={'row'} justifyContent={'space-between'} flexWrap='wrap'>
          <Stack spacing={3} width={300}>
            <Logo placement='footer' />
            <Typography variant='body2' lineHeight={2}>
              Toprak Car provides services. Green Car, one of the strongest and most meticulous working companies in the
              rent a car market, considers customer satisfaction as its first duty.
            </Typography>
            <SocialIcons icons={icons} />
          </Stack>
          <Stack>
            <Title text={t.footer.explore} />
            <Stack component='ul' spacing={2}>
              {t.navLinks.map((item) => (
                <li key={item.path}>
                  <FooterLink path={item.path} label={item.label} />
                </li>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Title text={t.footer.workHours} />
            <Stack spacing={2}>
              {workTime.map((item) => (
                <Typography key={item.id} variant='body2' fontWeight={500}>
                  {item.text}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Title text={t.footer.contactUs} />
            <Stack spacing={1} alignItems='flex-start'>
              <Button startIcon={<FiPhoneCall />}>+505 843 30 32</Button>
              <Button startIcon={<FiMail />}>toprakcar@gmail.com</Button>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ mt: 4, mb: 3, borderColor: 'text.primary' }} />
        <Stack direction='row' justifyContent={'space-between'} flexWrap='wrap' gap={2} alignItems='center'>
          <Stack direction='row' flexWrap='wrap' gap={2} alignItems='center'>
            <Typography variant='caption' fontWeight={600} fontSize={13}>
              © 2022 toprakcar.com {t.footer.rights}
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={2} component='ul'>
              {t.footer.footerLinks.map((item) => (
                <li key={item.path}>
                  <FooterLink path={item.path} label={item.label} variant='caption' fontWeight={400} />
                </li>
              ))}
            </Stack>
          </Stack>
          <CreatorLink createdText={t.footer.createdBy} name='AXCVBER' link='#' />
        </Stack>
      </Container>
    </Box>
  )
}

const CreatorLink: React.FC<CreatorLink> = ({ createdText, name, link }) => {
  return (
    <Stack direction='row' spacing={0.5}>
      <Typography variant='caption' color='inherit'>
        {createdText}
      </Typography>
      <Typography
        component='a'
        href={link}
        fontWeight={500}
        target='_blank'
        rel='noopener noreferrer'
        variant='caption'
        color='inherit'
        sx={{
          transition: 'color 0.1s linear',
          '&:hover': {
            color: '#fff',
            borderColor: '#fff',
          },
        }}
      >
        {name}
      </Typography>
    </Stack>
  )
}

const FooterLink: React.FC<IFooterLink> = ({ path, label, variant = 'body2', fontWeight = 500 }) => {
  return (
    <Link href={path} passHref>
      <Typography
        component='a'
        variant={variant}
        fontWeight={fontWeight}
        color='inherit'
        sx={{
          transition: 'color 0.1s linear',
          '&:hover': {
            color: '#fff',
          },
        }}
      >
        {label}
      </Typography>
    </Link>
  )
}

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Typography variant='h6' fontWeight={600} color='#fff' mb={2}>
      {text}
    </Typography>
  )
}

export default Footer
