import React from 'react'
import { Stack, Grid, Box, Container } from '@mui/material'
import Heading from '../../components/heading/Heading'
import InsuranceStartForm from '../../components/insurance/InsuranceStartForm'
import { GetStaticProps, NextPage } from 'next'
import {
  GetInsurancePageDocument,
  GetInsurancePageQuery,
  GetInsurancePageQueryVariables,
  InsurancePage,
} from '../../generated'
import client from '../../graphql/apollo-client'
import InsuranceBenefits from '../../components/insurance/InsuranceBenefits'
import FaqAccordion from '../../components/home/faq/FaqAccordion'
import SeoSingle from '../../components/seo/SeoSingle'
import Background from '../../components/layout/Background'

interface InsurancePageProps {
  pageData: InsurancePage
}

const InsurancePage: NextPage<InsurancePageProps> = ({ pageData }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false) //refactor

  const handleChange = (id?: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (id) {
      setExpanded(isExpanded ? id : false)
    }
  }

  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Box
        sx={{
          pt: 8,
          pb: 16,
          width: '100%',
          position: 'relative',
        }}
      >
        <Background
          src={pageData.background.data?.attributes?.url || ''}
          alt={pageData.background.data?.attributes?.alternativeText || ''}
        />

        <Container maxWidth={'sm'}>
          <Heading
            width={800}
            title={pageData.title}
            desc={pageData.description}
            withLine
            align='center'
            color='#fff'
          />

          <Box my={4} />
          <InsuranceStartForm />
        </Container>
      </Box>

      <Container maxWidth={'lg'}>
        <Box sx={{ mt: -6, zIndex: 2, position: 'relative' }}>
          <InsuranceBenefits data={pageData.insuranceBenefits} />
        </Box>
        <Stack spacing={6} my={6}>
          <div>
            <Heading
              label={pageData.insuranceQuestions.heading.label}
              title={pageData.insuranceQuestions.heading.title}
              desc={pageData.insuranceQuestions.heading.description}
              withLine
            />

            <Grid container spacing={2} mt={2}>
              {pageData.insuranceQuestions.faqItem.map((item) => (
                <Grid key={item?.id} item xs={12} md={6}>
                  <FaqAccordion
                    id={item?.id}
                    title={item?.question}
                    content={item?.answer}
                    expanded={expanded}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Stack>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<GetInsurancePageQuery, GetInsurancePageQueryVariables>({
    query: GetInsurancePageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.insurancePage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default InsurancePage
