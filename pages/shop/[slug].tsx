import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next'
import {
  GetSaleCarPropsDocument,
  GetSaleCarPropsQuery,
  GetSaleCarPropsQueryVariables,
  GetSalesCarsPathsDocument,
  GetSalesCarsPathsQuery,
  SalesCar,
} from '../../generated'
import client from '../../graphql/apollo-client'
import { Container, Grid } from '@mui/material'
import GallerySlider from '../../components/shop/shop-single/GallerySlider'
import VehicleDetails from '../../components/shop/shop-single/VehicleDetails'
import VehicleSidebar from '../../components/shop/shop-single/VehicleSidebar'

interface IShopSingle {
  item: SalesCar
}

const ShopSingle: NextPage<IShopSingle> = ({ item }) => {
  return (
    <>
      <Container maxWidth={'lg'} sx={{ mt: 4, mb: 8 }}>
        <Grid container>
          <Grid item xs={12} md={7} lg={8} pr={{ xs: 0, md: 4 }}>
            <GallerySlider data={item.gallery.data} />
          </Grid>
          <Grid item xs={12} md={5} lg={4} pt={{ xs: 2, md: 0 }}>
            <VehicleSidebar
              name={item.name}
              year={item.year}
              model={item.model?.data?.attributes?.model}
              price={item.price}
              mileage={item.mileage}
              sidebarOptions={item.sidebarOptions}
              moneyBackLabel={item.moneyBackLabel}
            />
          </Grid>
        </Grid>
      </Container>
      <VehicleDetails vehicleOverviews={item.vehicleOverviews} vehicleFeatures={item.vehicleFeatures} />
    </>
  )
}

export const getStaticProps = async ({ locale, params }: GetStaticPropsContext<{ slug: string }>) => {
  const { data } = await client.query<GetSaleCarPropsQuery, GetSaleCarPropsQueryVariables>({
    query: GetSaleCarPropsDocument,
    variables: {
      slug: params?.slug,
      locale,
    },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      item: data.salesCars?.data[0].attributes,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetSalesCarsPathsQuery>({
    query: GetSalesCarsPathsDocument,
  })

  const paths =
    data.salesCars?.data.map(({ attributes }: any) => ({
      params: { slug: attributes?.slug },
      // locale: attributes?.locale,
    })) || []

  return {
    paths,
    fallback: false,
  }
}

export default ShopSingle
