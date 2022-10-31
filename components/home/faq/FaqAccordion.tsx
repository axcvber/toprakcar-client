import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { FaChevronDown } from 'react-icons/fa'
import { SlQuestion } from 'react-icons/sl'
import { BsQuestionCircle, BsQuestionSquareFill } from 'react-icons/bs'
import { Divider, Stack } from '@mui/material'

interface IFaqAccordion {
  title: string
  content: string
}

const FaqAccordion: React.FC<IFaqAccordion> = ({ title, content }) => {
  return (
    <Accordion sx={{ boxShadow: 25 }}>
      <AccordionSummary
        sx={{
          py: 0.5,
          background: 'background.paper',
        }}
        expandIcon={<FaChevronDown color='inherit' />}
      >
        <Stack
          direction='row'
          spacing={1.5}
          alignItems={'center'}
          sx={{
            'svg': {
              color: 'primary.main',
              minWidth: '20px',
              fontSize: 22,
            },
          }}
        >
          <BsQuestionCircle className='icon' fontSize={22} />
          <Typography pr={2} fontWeight={600}>
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography fontSize={14} color='text.disabled'>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default FaqAccordion
