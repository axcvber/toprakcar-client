import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'
import React, { useEffect } from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '../utils/createEmotionCache'
import Layout from '../components/layout/Layout'
import { Router, useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { AppProvider } from '../context/appContext'
import client from '../graphql/apollo-client'
import NProgress from 'nprogress'
import theme from '../styles/theme'
import { InitialDataDocument, InitialDataQuery } from '../generated'
import GlobalSeo from '../components/seo/GlobalSeo'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'dayjs/locale/ru'
import 'dayjs/locale/tr'
import 'dayjs/locale/uk'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
NProgress.configure({ showSpinner: false })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  pageProps: {
    initialData?: InitialDataQuery
  }
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { initialData } = pageProps
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <>
      <GlobalSeo globalData={initialData?.global?.data?.attributes as any} locale={router.locale} />
      <ApolloProvider client={client}>
        <AppProvider initialData={initialData}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <SnackbarProvider dense maxSnack={1}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </SnackbarProvider>
            </ThemeProvider>
          </CacheProvider>
        </AppProvider>
      </ApolloProvider>
    </>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  const { data } = await client.query<InitialDataQuery>({
    query: InitialDataDocument,
    variables: { locale: ctx.router.locale },
  })
  return { ...appProps, pageProps: { initialData: data } }
}
