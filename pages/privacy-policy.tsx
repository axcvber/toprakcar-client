import React from 'react'
import { Container, Stack } from '@mui/material'
import Heading from '../components/heading/Heading'
import { Markdown } from '../components/Markdown'
import { useLocale } from '../hooks/useLocale'
import client from '../graphql/apollo-client'
import { gql } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'

const PrivacyPolicy: NextPage<{ privacyPolicy?: string }> = ({ privacyPolicy }) => {
  const t = useLocale()

  return (
    <Container>
      <Stack spacing={3} my={3}>
        <Heading title={t.footer.footerLinks[1].label} withLine />
        <Markdown content={privacyPolicy} />
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
              privacyPolicy
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      privacyPolicy: data.policy?.data?.attributes?.privacyPolicy,
    },
    revalidate: 60,
  }
}

export default PrivacyPolicy
