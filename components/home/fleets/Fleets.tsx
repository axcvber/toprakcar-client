import { Button, Container, Grid, Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Heading from '../../heading/Heading'
import dynamic from 'next/dynamic'
import { ComponentHomeFleets, Maybe, useGetHomeFleetsQuery } from '../../../generated'
import HomeFleetCard from '../../cards/HomeFleetCard'
import Loader from '../../Loader'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FleetsNavigation = dynamic(() => import('./FleetsNavigation'), {
  ssr: false,
})

interface IFleets {
  data: ComponentHomeFleets
}

const Fleets: React.FC<IFleets> = ({ data }) => {
  const filteredBrands = data.rent_cars?.data.map((item) => item.attributes?.brand?.data)
  const brandsArr = Array.from(new Set(filteredBrands))
  const router = useRouter()
  const [selectedBrand, setSelectedBrand] = useState<Maybe<string> | undefined>(brandsArr[0]?.id)
  const {
    data: rentCars,
    loading,
    error,
  } = useGetHomeFleetsQuery({
    variables: {
      locale: router.locale,
      brandId: selectedBrand,
    },
    notifyOnNetworkStatusChange: true,
  })

  if (error) {
    console.error(error)
    return null
  }

  const handleSelectBrand = (id?: Maybe<string>) => {
    if (id) {
      setSelectedBrand(id)
    }
  }

  return (
    <Container sx={{ my: 8 }}>
      <Heading
        width={500}
        label={data.fleetsHeading.label}
        title={data.fleetsHeading.title}
        desc={data.fleetsHeading.description}
        align='center'
        withLine
      />
      <Stack alignItems='center' mt={4} gap={3}>
        <FleetsNavigation brands={brandsArr} selectedBrand={selectedBrand} onSelectBrand={handleSelectBrand} />

        <Grid container spacing={3}>
          {loading ? (
            <Loader quantity={6}>
              <Grid item xs={12} sm={6} lg={4}>
                <Skeleton width={'100%'} height={540} sx={{ borderRadius: 4 }} />
              </Grid>
            </Loader>
          ) : (
            rentCars?.homePage?.data?.attributes?.fleets.rent_cars?.data.map((item: any) => (
              <Grid key={item.id} item xs={12} sm={6} lg={4}>
                <HomeFleetCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
        <Link href='/fleet' passHref>
          <Button startIcon={<HiOutlineExternalLink />} variant='outlined' size='large'>
            More Vehicles
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}

export default Fleets
