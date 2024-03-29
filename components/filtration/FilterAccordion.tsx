import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Typography, Stack, Skeleton } from '@mui/material'
import Chip from '@mui/material/Chip'
import { IoIosArrowDown } from 'react-icons/io'
import Loader from '../layout/Loader'

interface IFilterAccordion {
  title: string
  children: React.ReactNode
  selectedCount?: number
  isLoading?: boolean
}

const FilterAccordion: React.FC<IFilterAccordion> = ({ title, children, selectedCount, isLoading }) => {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  const onToggle = () => setExpanded(!expanded)

  return (
    <Accordion
      disableGutters
      expanded={expanded}
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
        expandIcon={<IoIosArrowDown />}
        sx={{
          padding: 0,
          'svg': { color: 'primary.main', fontSize: 22 },
        }}
        onClick={onToggle}
      >
        <Stack width='100%' direction='row' alignItems='center' justifyContent={'space-between'}>
          <Typography fontWeight={600} color='text.secondary'>
            {title}
          </Typography>

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
                fontWeight: 600,
                fontSize: 12,
              }}
            />
          )}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {isLoading ? (
          <Stack spacing={1}>
            <Loader quantity={4}>
              <Skeleton width={'100%'} height={50} sx={{ borderRadius: 2 }} />
            </Loader>
          </Stack>
        ) : (
          children
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default FilterAccordion
