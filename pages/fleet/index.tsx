import { Container } from '@mui/material'
import ImageHeading from '../../components/heading/ImageHeading'
import Search from '../../components/Search'
import RentCarsList from '../../components/rent/RentCarsList'
import { FleetPage, GetFleetPageDocument, GetFleetPageQuery, GetFleetPageQueryVariables } from '../../generated'
import client from '../../graphql/apollo-client'
import { GetStaticProps, NextPage } from 'next'
import SeoSingle from '../../components/seo/SeoSingle'

interface IFleetPage {
  pageData: FleetPage
}

const FleetPage: NextPage<IFleetPage> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Container maxWidth='xl'>
        <ImageHeading bgImage={pageData.headingImage.data?.attributes?.url || ''}>
          <Search />
        </ImageHeading>
        <RentCarsList />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<GetFleetPageQuery, GetFleetPageQueryVariables>({
    query: GetFleetPageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.fleetPage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default FleetPage
