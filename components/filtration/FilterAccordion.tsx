import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { Typography, Box, Stack } from '@mui/material'
import Chip from '@mui/material/Chip'

interface IFilterAccordion {
  title: string
  children: React.ReactNode
  selectedCount?: number
}

const FilterAccordion: React.FC<IFilterAccordion> = ({ title, children, selectedCount }) => {
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
        sx={{
          padding: 0,
          'svg': { color: 'text.secondary', fontSize: 22 },
        }}
        onClick={onToggle}
      >
        <Stack width='100%' direction='row' alignItems='center' justifyContent={'space-between'}>
          <Typography fontWeight={600} color='text.secondary'>
            {title}
          </Typography>

          {/* <Chip
            color='primary'
            size='small'
            label={selectedCount}
            sx={{
              mr: 2,
              borderRadius: '50px',
            }}
          /> */}

          {!!selectedCount && selectedCount > 0 && (
            <Chip
              color='primary'
              size='small'
              label={selectedCount}
              sx={{
                mr: 2,
                borderRadius: '50px',
                width: 24,
                height: 24,
                // display: 'flex',
                // alightItems: 'center',
                // justifyContent: 'center',
                fontWeight: 600,
                fontSize: 12,
              }}
            />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default FilterAccordion
