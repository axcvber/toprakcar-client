import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import createEmotionCache from '../utils/createEmotionCache'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import Layout from '../components/Layout'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/tr'
import { useRouter } from 'next/router'
import 'swiper/css'
import { RentProvider } from '../context/rent/rent-context'
import { ModalProvider } from '../context/modalContext'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/apollo-client'
import { FilterProvider } from '../context/filter-context'
import { ShopFilterProvider } from '../context/shop-filter/shop-filter-context'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <RentProvider>
          <ShopFilterProvider>
            <CacheProvider value={emotionCache}>
              <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={router.locale}>
                  <CssBaseline />
                  <ModalProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ModalProvider>
                </LocalizationProvider>
              </ThemeProvider>
            </CacheProvider>
          </ShopFilterProvider>
        </RentProvider>
      </FilterProvider>
    </ApolloProvider>
  )
}
