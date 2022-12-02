import React from 'react'
import { Box, Chip, Divider, Stack, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface ISlideCard {
  item: any
}

const VehicleShopCard: React.FC<ISlideCard> = ({ item }) => {
  return (
    <Link href={`/shop/${item.id}`} passHref>
      <Stack
        component='a'
        p={2}
        spacing={2}
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'background 0.1s linear',
          '&:hover': {
            backgroundColor: 'grey.50',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: 'grey.100',
            borderRadius: 4,
          }}
        >
          <Image
            width='100%'
            height={80}
            layout='responsive'
            objectFit='contain'
            src={item.imageUrl}
            placeholder='blur'
            blurDataURL={item.imageUrl}
            alt='car'
          />
        </Box>
        <Stack spacing={1}>
          <Chip
            label={item.year}
            size='small'
            variant='outlined'
            sx={{ borderRadius: 1, fontWeight: 500, width: 60, color: 'text.disabled', borderColor: 'text.disabled' }}
          />

          <Stack spacing={0.5}>
            <Typography variant='h6' color='text.primary' fontWeight={600}>
              {item.name}
            </Typography>
            <Stack direction='row' spacing={1}>
              <Typography component='span' color='primary' variant='h6' fontWeight={600}>
                {item.currentPrice}
              </Typography>
              {item.isDiscount && (
                <Typography
                  component='span'
                  color='text.disabled'
                  variant='body2'
                  fontWeight={500}
                  sx={{ textDecoration: 'line-through', pt: 0.3 }}
                >
                  {item.fullPrice}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Grid container component='ul' gap={2}>
          {item.options.map((item: any) => (
            <Grid item key={item.text} component='li'>
              <Stack
                spacing={1}
                direction='row'
                alignItems={'center'}
                sx={{
                  color: 'text.disabled',
                  'svg': {
                    fontSize: 18,
                  },
                }}
              >
                {item.icon}
                <Typography component='span' variant='body2' fontWeight={500}>
                  {item.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Link>
  )
}

export default VehicleShopCard
