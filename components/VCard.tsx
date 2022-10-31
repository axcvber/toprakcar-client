import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IVCard {
  imageUrl: string
  name: string
  price: string
  year: number
  options: any
  widthButton?: boolean
  btnText?: string
}

const VCard: React.FC<IVCard> = ({ name, price, year, widthButton, imageUrl, options, btnText }) => {
  return (
    <Stack
      p={2.5}
      spacing={2}
      sx={(theme) => ({
        background: '#fff',
        borderRadius: 5,
        boxShadow: 25,
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Box
        sx={(theme) => ({
          background: theme.palette.background.paper,
          borderRadius: 3,
        })}
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
      {widthButton && (
        <Button variant='contained' size='large' sx={{ fontSize: '17px', py: 1.5, fontWeight: 600 }}>
          {btnText}
        </Button>
      )}
    </Stack>
  )
}

export default VCard
