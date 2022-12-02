import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IVCard {
  imageUrl: string
  name: string
  price: string
  year: number
  options: any
}

const VCard: React.FC<IVCard> = ({ name, price, year, imageUrl, options }) => {
  return (
    <Stack
      p={2}
      spacing={2}
      sx={{
        background: '#fff',
        borderRadius: 4,
        // boxShadow: 25,
        border: '1px solid',
        borderColor: 'divider',
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
          src={imageUrl}
          placeholder='blur'
          blurDataURL={imageUrl}
          alt='car'
        />
      </Box>
      <Stack direction='row' justifyContent={'space-between'} spacing={1}>
        <div>
          <Typography variant='h6' fontWeight={600}>
            {name}
          </Typography>
          <Typography component='span' color='primary' variant='h6' fontWeight={600}>
            {price}
          </Typography>
        </div>

        <Chip label={year} size='small' variant='outlined' sx={{ borderRadius: 1, fontWeight: 500 }} />
      </Stack>

      <Divider />

      <Stack component='ul' direction='row' justifyContent={'space-between'}>
        {options.map((item: any) => (
          <Stack
            key={item.text}
            component='li'
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
            <Typography component='span' fontWeight={500} fontSize={{ xs: 14, md: 16 }}>
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Button variant='contained' size='extra'>
        Rent Now
      </Button>
    </Stack>
  )
}

export default VCard
