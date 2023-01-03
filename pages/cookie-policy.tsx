import React from 'react'
import { Container, Stack } from '@mui/material'
import Heading from '../components/heading/Heading'
import { Markdown } from '../components/Markdown'
import { useLocale } from '../hooks/useLocale'
import { GetStaticProps, NextPage } from 'next'
import client from '../graphql/apollo-client'
import { gql } from '@apollo/client'

const CookiePolicy: NextPage<{ cookiePolicy?: string }> = ({ cookiePolicy }) => {
  const t = useLocale()

  return (
    <Container>
      <Stack spacing={3} my={3}>
        <Heading title={t.footer.footerLinks[2].label} withLine />
        <Markdown content={cookiePolicy} />
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
              cookiePolicy
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      cookiePolicy: data.policy?.data?.attributes?.cookiePolicy,
    },
    revalidate: 60,
  }
}
export default CookiePolicy
