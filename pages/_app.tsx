import React, { useEffect } from 'react'
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
import Layout from '../components/layout/Layout'
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
import { SnackbarProvider } from 'notistack'
import { InsuranceProvider } from '../context/insurance/insurance-context'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
NProgress.configure({ showSpinner: false })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <FilterProvider>
        <RentProvider>
          <ShopFilterProvider>
            <InsuranceProvider>
              <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={router.locale}>
                    <CssBaseline />
                    <SnackbarProvider maxSnack={1}>
                      <ModalProvider>
                        <Layout>
                          <Component {...pageProps} />
                        </Layout>
                      </ModalProvider>
                    </SnackbarProvider>
                  </LocalizationProvider>
                </ThemeProvider>
              </CacheProvider>
            </InsuranceProvider>
          </ShopFilterProvider>
        </RentProvider>
      </FilterProvider>
    </ApolloProvider>
  )
}
