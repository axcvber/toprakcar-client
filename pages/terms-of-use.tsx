import React from 'react'
import { useLocale } from '../hooks/useLocale'
import { Container, Stack } from '@mui/material'
import Heading from '../components/heading/Heading'
import { Markdown } from '../components/Markdown'
import client from '../graphql/apollo-client'
import { gql } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'

const TermsOfUse: NextPage<{ termsOfUse?: string }> = ({ termsOfUse }) => {
  const t = useLocale()

  return (
    <Container>
      <Stack spacing={3} my={3}>
        <Heading title={t.footer.footerLinks[0].label} withLine />
        <Markdown content={termsOfUse} />
      </Stack>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query({
    query: gql`
      query {
        policy(locale: "${locale}") {
          data {
            attributes {
              termsOfUse
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      termsOfUse: data.policy?.data?.attributes?.termsOfUse,
    },
    revalidate: 60,
  }
}

export default TermsOfUse
