import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../../heading/Heading'
import IconBox from '../../layout/IconBox'
import Image from 'next/image'
import AdditionalBenefits from './AdditionalBenefits'
import { ComponentHomeBenefits } from '../../../generated'

const Line: React.FC<{ placement: number; rightSide?: boolean }> = ({ placement, rightSide }) => {
  let path = '/top-line.png'
  let width
  let height

  switch (placement) {
    case 0:
      path = '/top-line.png'
      width = 225
      height = 149
      break

    case 1:
      path = '/middle-line.png'
      width = 248
      height = 15
      break

    case 2:
      path = '/bottom-line.png'
      width = 150
      height = 15
      break

    default:
      break
  }

  return (
    <Box
      sx={{
        transform: rightSide ? 'scaleX(-1)' : 'none',
        display: 'block',
        width: { sm: '130px', lg: '180px' },
        position: 'absolute',
        top: 25,
        right: rightSide ? 'auto' : { sm: '-40%', lg: '-90%' },
        left: rightSide ? { sm: '-40%', lg: '-90%' } : 'auto',
        zIndex: 0,
      }}
    >
      <Image width={width} height={height} objectFit='contain' src={path} alt='line' />
    </Box>
  )
}

interface IBenefits {
  data: ComponentHomeBenefits
}

const Benefits: React.FC<IBenefits> = ({ data }) => {
  return (
    <Container>
      <Heading
        width={450}
        title={data.benefitsHeading.title}
        label={data.benefitsHeading.label}
        desc={data.benefitsHeading.description}
        align='center'
      />
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-around',
          width: '100%',
          mt: 6,
        }}
      >
        <Stack spacing={5} justifyContent='space-around'>
          {data.leftSide.map((item, inx: number) => (
            <Stack key={item?.id} position='relative'>
              <Stack spacing={2} maxWidth={150}>
                <IconBox icon={item?.icon.data?.attributes?.url} variant='small' />
                <Typography fontWeight={600}>{item?.title}</Typography>
              </Stack>
              <Line placement={inx} />
            </Stack>
          ))}
        </Stack>

        <Box width={'500px'} sx={{ zIndex: 1 }}>
          <Image
            width={500}
            height={900}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            blurDataURL={data.image.data?.attributes?.url || ''}
            src={data.image.data?.attributes?.url || ''}
            alt={data.image.data?.attributes?.alternativeText || ''}
          />
        </Box>

        <Stack spacing={5} justifyContent='space-around'>
          {data.rightSide.map((item, inx: number) => (
            <Stack key={item?.id} direction='row' position='relative'>
              <Line rightSide placement={inx} />
              <Stack spacing={2} maxWidth={150} alignItems='flex-end' textAlign={'right'}>
                <IconBox icon={item?.icon.data?.attributes?.url} variant='small' />
                <Typography fontWeight={600}>{item?.title}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={8}
        sx={{
          display: { xs: 'flex', md: 'none' },
          pt: 4,
        }}
      >
        {data.leftSide.map((item) => (
          <Grid key={item?.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item?.icon.data?.attributes?.url} rounded />
              <Typography fontWeight={600} variant='body2' maxWidth={150}>
                {item?.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
        {data.rightSide.map((item) => (
          <Grid key={item?.id} item xs={6} sm={4}>
            <Stack spacing={2} justifyContent='center' alignItems='center' textAlign={'center'}>
              <IconBox icon={item?.icon.data?.attributes?.url} rounded />
              <Typography fontWeight={600} variant='body2' maxWidth={150}>
                {item?.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box display={{ xs: 'none', md: 'block' }} my={3}>
        <AdditionalBenefits data={data.additionalBenefits} />
      </Box>
    </Container>
  )
}

export default Benefits
