import type { GetStaticProps, NextPage } from 'next'
import Benefits from '../components/home/benefits/Benefits'
// import Brands from '../components/home/brands/Brands'
import Faq from '../components/home/faq/Faq'
import Fleets from '../components/home/fleets/Fleets'
import Hero from '../components/home/hero/Hero'
import Services from '../components/home/services/Services'
import Steps from '../components/home/steps/Steps'
import dynamic from 'next/dynamic'
import { HomePage, HomePageDocument, HomePageQuery, HomePageQueryVariables } from '../generated'
import client from '../graphql/apollo-client'
import SeoSingle from '../components/seo/SeoSingle'

const Brands = dynamic(() => import('../components/home/brands/Brands'), {
  ssr: false,
})

interface IHomePage {
  pageData: HomePage
}

const Home: NextPage<IHomePage> = ({ pageData }) => {
  return (
    <>
      <SeoSingle seo={pageData.seo} />
      <Hero data={pageData?.hero} />
      <Brands data={pageData?.brands.images.data} />
      <Steps data={pageData.steps} />
      <Services data={pageData.services} />
      <Fleets data={pageData.fleets} />
      <Benefits data={pageData.benefits} />
      <Faq data={pageData.faq} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<HomePageQuery, HomePageQueryVariables>({
    query: HomePageDocument,
    variables: {
      locale: locale,
    },
  })

  return {
    props: {
      pageData: data.homePage?.data?.attributes,
    },
    revalidate: 60,
  }
}

export default Home
