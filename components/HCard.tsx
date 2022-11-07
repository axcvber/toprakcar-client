import React from 'react'
import { Box, Button, Chip, Divider, Stack, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface IHCard {
  id: number
  imageUrl: string
  name: string
  price: string
  options: any
}

const HCard: React.FC<IHCard> = ({ id, imageUrl, name, price, options }) => {
  return (
    <Stack
      direction='row'
      spacing={3}
      p={2.5}
      sx={(theme) => ({
        background: '#fff',
        borderRadius: 3,
        // boxShadow: 25,
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Box
        sx={(theme) => ({
          width: 350,
          background: theme.palette.background.paper,
          borderRadius: 3,
        })}
      >
        <Image
          width='100%'
          height={60}
          layout='responsive'
          objectFit='contain'
          src={imageUrl}
          placeholder='blur'
          blurDataURL={imageUrl}
          alt='car'
        />
      </Box>
      <Stack width={'100%'} flex={1} spacing={3}>
        <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>
          <div>
            <Typography variant='h6' fontWeight={600} mb={1}>
              {name}
            </Typography>
            <Typography component='span' color='primary' variant='h5' fontWeight={600}>
              {price}
            </Typography>
          </div>

          <Stack direction='row' spacing={1}>
            <Button size={'large'} startIcon={<AiOutlineInfoCircle />} sx={{ fontWeight: 600 }}>
              More Info
            </Button>
            <Button size={'large'} variant='contained' sx={{ fontWeight: 600, px: 5 }}>
              Rent
            </Button>
          </Stack>
        </Stack>

        <Divider />
        <Grid container component='ul' columnGap={4} rowGap={2}>
          {options.map((item: any) => (
            <Grid item key={item.text}>
              <Stack
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
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default HCard
