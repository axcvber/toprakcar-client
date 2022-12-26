import React from 'react'
import { Box, Container, Stack, Grid, Typography } from '@mui/material'
import Heading from '../components/heading/Heading'
import Image from 'next/image'
import ContactListItem from '../components/about/ContactListItem'
import AboutItem from '../components/about/AboutItem'
import client from '../graphql/apollo-client'
import { AboutPage, GetAboutPageDocument, GetAboutPageQuery, GetAboutPageQueryVariables } from '../generated'
import { GetStaticProps, NextPage } from 'next'
import SeoSingle from '../components/seo/SeoSingle'

interface IAboutUsPage {
  pageData: AboutPage
}

const AboutUsPage: NextPage<IAboutUsPage> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems='center'
          spacing={{ xs: 3, md: 6 }}
          mt={{ xs: 4, md: 6 }}
        >
          <Stack width={{ xs: '100%', md: '50%' }} spacing={3}>
            <Heading width={450} title={pageData.heading.title} withLine />
            <Typography lineHeight={2} color='text.secondary'>
              {pageData.heading.description}
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
              src={pageData.heading.image.data?.attributes?.url || ''}
              blurDataURL={pageData.heading.image.data?.attributes?.url || ''}
              placeholder='blur'
              alt={pageData.heading.image.data?.attributes?.alternativeText || ''}
            />
          </Box>
        </Stack>

        <Grid
          component='ol'
          container
          columnSpacing={{ xs: 4, md: 8 }}
          rowGap={{ xs: 4, md: 8 }}
          my={{ xs: 6, md: 10 }}
        >
          {pageData.aboutItem.map((item) => (
            <Grid key={item?.id} component='li' item xs={12} md={4}>
              <AboutItem title={item?.title} text={item?.description} />
            </Grid>
          ))}
        </Grid>
        <Box mb={{ xs: 8, md: 12 }}>
          <Heading width={450} title='Contacts' withLine />
          <Stack component='ul' spacing={3} mt={3}>
            {pageData.contactInfo.map((item) => (
              <ContactListItem key={item?.id} title={item?.title} text={item?.description} />
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<GetAboutPageQuery, GetAboutPageQueryVariables>({
    query: GetAboutPageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.aboutPage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default AboutUsPage
