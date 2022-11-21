import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Heading from '../components/Heading'

const AboutUsPage = () => {
  return (
    <Container>
      <Heading width={450} label={'About Us'} title='Who we are' withLine />
      <Box>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tristique orci. Ut eu ullamcorper mauris.
          Donec porta magna ut lectus porttitor, a dapibus orci eleifend. Sed vulputate, justo ut vehicula blandit, nunc
          ligula vulputate nunc, sit amet tempus ligula lacus molestie arcu. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Praesent elementum
        </Typography>
      </Box>
    </Container>
  )
}

export default AboutUsPage
