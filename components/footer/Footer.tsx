import { Box, Container, Divider, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { useLocale } from '../../hooks/useLocale'
import Logo from '../Logo'
import SocialIcons from './SocialIcons'
import { styled } from '@mui/material/styles'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

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
    <Box sx={{ marginTop: 'auto', background: '#1D252C', pt: 8, pb: 4, color: 'text.secondary', boxShadow: 15 }}>
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
            <Title text={'Explore'} />
            <Stack component='ul' spacing={2}>
              {t.navLinks.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} passHref>
                    <Typography
                      component='a'
                      variant='body2'
                      fontWeight={500}
                      color='inherit'
                      sx={{
                        transition: 'color 0.1s linear',
                        '&:hover': {
                          color: '#fff',
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Title text={'Our working hours'} />
            <Stack spacing={2}>
              <Typography variant='body2' fontWeight={500}>
                Monday - Friday: 9:00 - 22:00
              </Typography>
              <Typography variant='body2' fontWeight={500}>
                Saturday: 10:00 - 17:00
              </Typography>
              <Typography variant='body2' fontWeight={500}>
                Sunday: 12:00 - 15:00
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Title text={'Contact Us'} />
            <Stack spacing={1} alignItems='flex-start'>
              <Button startIcon={<FiPhoneCall />}>+505 843 30 32</Button>
              <Button startIcon={<FiMail />}>toprakcar@gmail.com</Button>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ my: 4, borderColor: 'text.primary' }} />
        <Stack direction='row' justifyContent={'space-between'} flexWrap='wrap' gap={3}>
          <Stack direction='row' spacing={2} component='ul'>
            <li>
              <Link href={'terms'} passHref>
                <Typography color='inherit' component='a' variant='subtitle2'>
                  Terms
                </Typography>
              </Link>
            </li>
            <li>
              <Link href={'privacy-policy'} passHref>
                <Typography color='inherit' component='a' variant='subtitle2'>
                  Privacy Policy
                </Typography>
              </Link>
            </li>
            <li>
              <Link href={'cookie-policy'} passHref>
                <Typography color='inherit' component='a' variant='subtitle2'>
                  Cookie Policy
                </Typography>
              </Link>
            </li>
          </Stack>
          <Stack>
            <Typography variant='subtitle2'>© 2022 toprakcar.com All rights reserved.</Typography>
          </Stack>
          <Stack>
            <Typography variant='subtitle2'>Created by AXCVBER</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
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
