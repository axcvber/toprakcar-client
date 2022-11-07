import * as React from 'react'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { HiMinus, HiPlus } from 'react-icons/hi'

interface IFilterAccordion {
  title: string
  children: React.ReactNode
}

const FilterAccordion: React.FC<IFilterAccordion> = ({ title, children }) => {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  const onToggle = () => setExpanded(!expanded)

  return (
    <Accordion
      disableGutters
      expanded={expanded}
      onClick={onToggle}
      elevation={0}
      sx={{
        background: 'transparent',
        '&:before': {
          content: 'none',
        },
        'svg': {
          fontSize: 20,
        },
      }}
    >
      <AccordionSummary
        aria-controls='panel1d-content'
        id='panel1d-header'
        expandIcon={expanded ? <HiMinus /> : <HiPlus />}
      >
        <Typography fontWeight={500} color='#777'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default FilterAccordion
