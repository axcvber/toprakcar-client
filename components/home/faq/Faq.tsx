import { Container, Grid } from '@mui/material'
import React from 'react'
import { ComponentHomeFaq } from '../../../generated'
import Heading from '../../heading/Heading'
import FaqAccordion from './FaqAccordion'

interface IFaq {
  data: ComponentHomeFaq
}

const Faq: React.FC<IFaq> = ({ data }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (id?: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (id) {
      setExpanded(isExpanded ? id : false)
    }
  }

  return (
    <Container sx={{ my: 10 }}>
      <Heading
        width={500}
        label={data.faqHeading.label}
        title={data.faqHeading.title}
        desc={data.faqHeading.description}
        align='left'
        withLine
      />

      <Grid container spacing={2} mt={2}>
        {data.faqItem.map((item) => (
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
    </Container>
  )
}

export default Faq
