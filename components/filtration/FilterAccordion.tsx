import * as React from 'react'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { Typography } from '@mui/material'

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
      elevation={0}
      sx={{
        background: 'transparent',
        // padding: '0px !important',
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
        sx={{ padding: 0, 'svg': { color: 'text.secondary' } }}
        onClick={onToggle}
      >
        <Typography fontWeight={600} color='text.secondary'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default FilterAccordion
