import React from 'react'
import { Box, Container, Stack, Grid, Typography } from '@mui/material'
import Heading from '../components/Heading'
import Image from 'next/image'
import ContactListItem from '../components/about/ContactListItem'
import AboutItem from '../components/about/AboutItem'

interface IAboutUsPage {
  data: any
}

const AboutUsPage: React.FC<IAboutUsPage> = ({ data }) => {
  return (
    <Container maxWidth={'xl'}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems='center'
        spacing={{ xs: 3, md: 6 }}
        mt={{ xs: 4, md: 6 }}
      >
        <Stack width={{ xs: '100%', md: '50%' }} spacing={3}>
          <Heading width={450} title='Who we are' withLine />
          <Typography lineHeight={2} color='text.secondary'>
            {data.text}
          </Typography>
        </Stack>
        <Box
          sx={{
            borderRadius: 3,
            boxShadow: 25,
            overflow: 'hidden',
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Image
            layout='responsive'
            width={500}
            height={350}
            objectFit='cover'
            src={data.image}
            blurDataURL={data.image}
            placeholder='blur'
            alt='sell'
          />
        </Box>
      </Stack>

      <Grid component='ol' container columnSpacing={{ xs: 4, md: 8 }} rowGap={{ xs: 4, md: 8 }} my={{ xs: 6, md: 10 }}>
        {data.aboutItems.map((item: any) => (
          <Grid key={item.id} component='li' item xs={12} md={4}>
            <AboutItem title={item.title} text={item.text} />
          </Grid>
        ))}
      </Grid>
      <Box mb={{ xs: 8, md: 12 }}>
        <Heading width={450} title='Contacts' withLine />
        <Stack component='ul' spacing={3} mt={3}>
          {data.contactItems.map((item: any) => (
            <ContactListItem key={item.id} title={item.title} text={item.text} />
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique orci. Ut eu ullamcorper
        mauris. Donec porta magna ut lectus porttitor, a dapibus orci eleifend. Sed vulputate, justo ut vehicula
        blandit, nunc ligula vulputate nunc, sit amet tempus ligula lacus molestie arcu. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent elementum
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique orci. Ut eu ullamcorper
        mauris. Donec porta magna ut lectus porttitor, a dapibus orci eleifend`,
        image: 'https://res.cloudinary.com/doea7ahfk/image/upload/v1669045684/pexels-antoni-shkraba-7144212_qpzh8i.jpg',
        aboutItems: [
          {
            id: 1,
            title: 'Our History',
            text: `The Red Car Company was first established in Adana, then continued with our branches opened in Nevşehir, Kayseri and Mersin provinces and 1 
            Center and 2 branches, while continuing its services under the name of Kırmızıcar. 
            `,
          },
          {
            id: 2,
            title: 'Our Mission',
            text: `Our company, which meets the short and long term vehicle needs of its customers throughout Çukurova and Adana, is a corporate, developing and reliable service company that is constantly developing by creating value for its business partners and society. 
            `,
          },
          {
            id: 3,
            title: 'Our vision',
            text: `The goal of our company is to become the company with the highest and best quality vehicle fleet by creating economic profitability in the short and long term car rental sector. In the car rental sector, as Kırmızı, we always got the best, we were never satisfied with what we did. 
            `,
          },
        ],
        contactItems: [
          {
            id: 1,
            title: 'Phone',
            text: `If you have questions about your purchase, sale, or service, give us a call. (888) DRV-EWAY or (888) 378-3929 Business hours are Mon - Fri: 5:00 am - 9:00 pm, Sat - Sun: 6:00 am - 9:00 pm PT. `,
          },
          {
            id: 2,
            title: 'Email',
            text: `Have questions about navigating our site?  Email us. support@driveway.com 
            `,
          },
          {
            id: 3,
            title: 'Write',
            text: `Looking for our corporate address? You’ll find us here: 

            Driveway Care Center
            150 N. Bartlett Street
            Medford, OR 97501  
            `,
          },
        ],
      },
    },
    revalidate: 10, // In seconds
  }
}

export default AboutUsPage
