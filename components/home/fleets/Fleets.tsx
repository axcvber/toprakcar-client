import { Button, Container, Grid, Skeleton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Heading from '../../heading/Heading'
import dynamic from 'next/dynamic'
import { ComponentHomeFleets, Maybe, useGetHomeFleetsQuery } from '../../../generated'
import HomeFleetCard from '../../cards/HomeFleetCard'
import Loader from '../../layout/Loader'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLocale } from '../../../hooks/useLocale'

const FleetsNavigation = dynamic(() => import('./FleetsNavigation'), {
  ssr: false,
})

interface IFleets {
  data: ComponentHomeFleets
}

const Fleets: React.FC<IFleets> = ({ data }) => {
  const brandsArr = data.rent_cars?.data.map((item) => item.attributes?.brand?.data)

  const filteredBrands = brandsArr?.filter(
    (value, index, self) =>
      self.findIndex((v) => v?.id === value?.id && v?.attributes?.name === value?.attributes?.name) === index
  )

  const [selectedBrand, setSelectedBrand] = useState<Maybe<string> | undefined>(filteredBrands && filteredBrands[0]?.id)
  const router = useRouter()
  const t = useLocale()

  const {
    data: rentCars,
    loading,
    error,
  } = useGetHomeFleetsQuery({
    variables: {
      locale: router.locale,
      brandId: selectedBrand,
    },
  })

  useEffect(() => {
    setSelectedBrand(filteredBrands && filteredBrands[0]?.id)
  }, [router.locale])

  const handleSelectBrand = (id?: Maybe<string>) => {
    setSelectedBrand(id)
  }

  if (error) {
    return null
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
        <FleetsNavigation brands={filteredBrands} selectedBrand={selectedBrand} onSelectBrand={handleSelectBrand} />

        <Grid container spacing={3}>
          {loading ? (
            <Loader quantity={6}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Skeleton width={'100%'} height={540} sx={{ borderRadius: 4 }} />
              </Grid>
            </Loader>
          ) : (
            rentCars?.homePage?.data?.attributes?.fleets.rent_cars?.data.map((item: any) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
                <HomeFleetCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
        <Link href='/fleet' passHref>
          <Button startIcon={<HiOutlineExternalLink />} variant='outlined' size='large'>
            {t.button.moreVehicles}
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}

export default Fleets
