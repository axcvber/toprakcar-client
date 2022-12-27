import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Heading from '../../heading/Heading'
import IconBox from '../../layout/IconBox'
import { ComponentHomeServices } from '../../../generated'

interface IServices {
  data: ComponentHomeServices
}

const Services: React.FC<IServices> = ({ data }) => {
  return (
    <Container>
      <Stack my={8} direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'space-between'} spacing={5}>
        <Box
          sx={{
            width: '100%',
            marginLeft: { xs: -10, md: -40 },
          }}
        >
          <Image
            priority
            width={970}
            height={750}
            placeholder='blur'
            blurDataURL={data.image.data?.attributes?.url || ''}
            src={data.image.data?.attributes?.url || ''}
            alt={data.image.data?.attributes?.alternativeText || ''}
            objectFit='contain'
          />
        </Box>
        <Stack maxWidth={'500px'} spacing={4}>
          <Heading
            label={data.servicesHeading.label}
            title={data.servicesHeading.title}
            desc={data.servicesHeading.description}
            align='left'
            withLine
          />
          <Stack component={'ul'} spacing={3}>
            {data.serviceOptions.map((item) => (
              <Stack key={item?.id} component={'li'} direction='row' spacing={3}>
                <IconBox icon={item?.icon.data?.attributes?.url || ''} />
                <Box maxWidth={'300px'}>
                  <Typography variant='h6' fontWeight={600}>
                    {item?.title}
                  </Typography>
                  <Typography mt={1}>{item?.description}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Services
