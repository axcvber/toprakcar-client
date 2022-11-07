import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Benefits from '../components/home/benefits/Benefits'
import Brands from '../components/home/brands/Brands'
import Faq from '../components/home/faq/Faq'
import Fleets from '../components/home/fleets/Fleets'
import Hero from '../components/home/hero/Hero'
import Services from '../components/home/services/Services'
import Steps from '../components/home/steps/Steps'
import Navbar from '../components/navbar/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      {/* <Brands /> */}
      <Steps />
      <Services />
      <Fleets />
      <Benefits />
      <Faq />
    </>
  )
}

export default Home
