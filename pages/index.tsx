import { Box, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Navbar from '../components/navbar/Navbar'

const Home: NextPage = () => {
  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'red',
        }}
      ></Box>
    </Container>
  )
}

export default Home
