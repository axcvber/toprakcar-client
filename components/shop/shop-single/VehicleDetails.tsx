import React from 'react'
import { Container, Stack, Box, Typography, Button, Grid } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { GrOverview } from 'react-icons/gr'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import { FiAlertTriangle, FiClipboard, FiThermometer } from 'react-icons/fi'
import { ComponentVehicleOverview, ComponentVehicleVehicleFeatures, Maybe } from '../../../generated'
import ReactMarkdown from 'react-markdown'
import Markdown from '../../Markdown'
import { styled } from '@mui/material/styles'

interface IVehicleDetails {
  vehicleOverviews: Maybe<ComponentVehicleOverview>[]
  vehicleFeatures: Maybe<ComponentVehicleVehicleFeatures>[]
}

const VehicleDetails: React.FC<IVehicleDetails> = ({ vehicleOverviews, vehicleFeatures }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <React.Fragment>
      <Container maxWidth={'lg'}>
        <Stack
          spacing={3}
          alignItems='center'
          p={6}
          sx={{
            background: '#fff',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            border: '1px solid',
            borderColor: 'divider',
            borderBottom: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography variant='h4' fontWeight={600} textAlign='center'>
            Vehicle Details
          </Typography>
          <StyledTabs value={value} onChange={handleChange} centered>
            <Tab label='Overview' />
            <Tab label='Features' />
          </StyledTabs>
        </Stack>
      </Container>
      <Box sx={{ background: '#fff', borderTop: '1px solid', borderColor: 'divider', mt: -0.1 }}>
        <Container maxWidth={'lg'}>
          <TabPanel value={value} index={0}>
            <Grid container>
              {vehicleOverviews.map((item) => (
                <Grid key={item?.id} item xs={6} sm={4} md={4} lg={3} pb={6} pl={{ md: 6 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={{ xs: 1, md: 2 }}>
                    <FiAlertTriangle fontSize={55} />
                    <Box textAlign={{ xs: 'center', md: 'left' }}>
                      <Typography fontWeight={600}>{item?.title}</Typography>
                      <Typography mt={0.5}>{item?.subtitle}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container>
              {vehicleFeatures.map((item) => (
                <Grid key={item?.id} item xs={12} sm={6} md={4} lg={3} pb={6} pl={6}>
                  <Stack spacing={2}>
                    <Typography fontWeight={600} variant='h6'>
                      {item?.option}
                    </Typography>
                    <Box>
                      <Markdown content={item?.optionList} />
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Container>
      </Box>
    </React.Fragment>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box display={'flex'} mt={4}>
          {children}
        </Box>
      )}
    </div>
  )
}

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    borderBottom: '3px solid',
    borderColor: theme.palette.divider,
    gap: '24px',
  },
  '& .MuiTabs-scroller': {
    display: 'flex',
  },
  '& .MuiTabs-indicator': {
    height: '4px',
    borderRadius: '10px',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 600,
    minHeight: 'unset',
    padding: 0,
    minWidth: 0,
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

export default VehicleDetails
