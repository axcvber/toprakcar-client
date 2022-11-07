import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { FaChevronDown } from 'react-icons/fa'
import { BsQuestionCircle } from 'react-icons/bs'
import { Divider, Stack } from '@mui/material'

interface IFaqAccordion {
  id: number
  title: string
  content: string
  expanded: number | boolean
  onChange: (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const FaqAccordion: React.FC<IFaqAccordion> = ({ id, title, content, expanded, onChange }) => {
  return (
    <Accordion
      disableGutters
      expanded={expanded === id}
      onChange={onChange(id)}
      elevation={0}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <AccordionSummary
        sx={{
          py: 0.5,
          background: 'background.paper',
          '.MuiAccordionSummary-expandIconWrapper': {
            mt: 2,
            alignSelf: 'flex-start',
          },
        }}
        expandIcon={<FaChevronDown color='inherit' />}
      >
        <Stack
          direction='row'
          spacing={1.5}
          alignItems={'flex-start'}
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
