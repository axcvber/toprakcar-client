import Script from 'next/script'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import { GlobalEntity } from '../../generated'

interface IGlobalSeo {
  globalData?: GlobalEntity
  locale?: string
}

const GlobalSeo: React.FC<IGlobalSeo> = ({ globalData, locale }) => {
  const data = globalData?.attributes
  const siteName = 'Toprakcar'
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${data?.googleAnalyticsTag}`} strategy='lazyOnload' />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${data?.googleAnalyticsTag}');
        `}
      </Script>
      <DefaultSeo
        titleTemplate={`%s | ${siteName}`}
        defaultTitle={siteName}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1, width=device-width',
          },
          {
            property: 'google',
            content: 'notranslate',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: data?.favicon.data?.attributes?.url || '',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: locale,
          url: 'http://toprakcar.com/',
          site_name: siteName,
          images: [
            {
              url: data?.darkLogo.data?.attributes?.url || '',
              width: 400,
              height: 400,
              alt: 'logo',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}

export default GlobalSeo
