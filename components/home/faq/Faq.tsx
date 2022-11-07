import { Container, Grid } from '@mui/material'
import React from 'react'
import Heading from '../../Heading'
import FaqAccordion from './FaqAccordion'

const data = [
  {
    id: 1,
    question: 'What Are The Required Procedures For Renting A Car?',
    answer:
      'For economy and middle class vehicles, it will be sufficient to be at least 23 years old and have a driving license for 2 years',
  },
  {
    id: 2,
    question: 'Is It Possible To Rent A Car Without Prepayment?',
    answer: 'Evet Firmamızda ödemeleri araç teslimi sırasında kabul ediyoruz.',
  },
  {
    id: 3,
    question: 'How Can We Make The Payment?',
    answer:
      'Ödemeyi kendi adınıza kayıtlı kredi kartıyla veya İkinci Sürücü var ise Ona ait Kredi kartı ilede ödeme yapabilirsiniz.',
  },
  {
    id: 4,
    question: 'Reservation Cancellation & Postponement Conditions',
    answer:
      'All of our customers have the right to cancel their reservation free of charge, and when changing a reservation, changes can be made free of charge according to the availability of the appropriate vehicle. However, if the rented vehicle is in a different segment from the existing vehicle, there may be a difference in price.',
  },
  {
    id: 5,
    question: 'Do Vehicles Have Hgs (Highway Transit System)?',
    answer:
      'Araçlarımızda Entegre Hgs sistemi mevcuttur. Kiralama süresince yapılan geçişlerden kaynaklanan ücretler dönüşte tahsil edilir.',
  },
  {
    id: 6,
    question: 'What Is The Drop Cost And How Is It Calculated?',
    answer:
      'Drop bedeli genellikle Araç teslim alınan ve Teslim edilen lokasyonların farklı olmasından kaynaklanan durumlarda yansıtılan bir hizmet bedelidir. Örneğin Aracı Adana Havalimanından teslim aldınız fakat Gaziantep Havalimanı veya Şehir merkezinde teslim etmek istediniz bu durumda oluşan ek hizmet (Şoför ve Yakıt ücreti) bedelidir. Bu durumlarda lokasyon mesafesine göre hesaplama yapılmaktadır.',
  },
]

const Faq = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false)

  const handleChange = (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false)
  }
  return (
    <Container sx={{ my: 10 }}>
      <Heading width={450} label={'Find Your Answer Here'} title='Frequently asked questions' align='left' withLine />

      <Grid container spacing={2} mt={2}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} md={6}>
            <FaqAccordion
              id={item.id}
              title={item.question}
              content={item.answer}
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
