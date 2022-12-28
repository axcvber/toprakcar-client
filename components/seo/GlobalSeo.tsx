import Script from 'next/script'
import React from 'react'
import { DefaultSeo } from 'next-seo'
import { Global } from '../../generated'

interface IGlobalSeo {
  globalData?: Global
  locale?: string
}

const GlobalSeo: React.FC<IGlobalSeo> = ({ globalData, locale }) => {
  const siteName = 'Toprakcar'
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${globalData?.googleAnalyticsTag}`}
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${globalData?.googleAnalyticsTag}');
        `}
      </Script>
      <DefaultSeo
        titleTemplate={`%s | ${siteName}`}
        defaultTitle={siteName}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
          },
          {
            property: 'google',
            content: 'notranslate',
          },
          {
            name: 'google-site-verification',
            content: 'VFBH6lk0qTSYn_jOUrHRzvZ7CKt2M-wL4dJG7ueF878',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: globalData?.favicon.data?.attributes?.url || '',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: locale,
          url: 'http://toprakcar.com/',
          site_name: siteName,
          images: [
            {
              url: globalData?.darkLogo.data?.attributes?.url || '',
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
