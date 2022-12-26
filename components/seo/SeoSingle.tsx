import React from 'react'
import { NextSeo } from 'next-seo'
import { ComponentMainSeo } from '../../generated/index'

interface ISeoSingle {
  seo: ComponentMainSeo
}

const SeoSingle: React.FC<ISeoSingle> = ({ seo }) => {
  return (
    <NextSeo
      title={seo.metaTitle}
      description={seo.metaDescription}
      canonical={seo.canonicalURL}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: seo.keywords,
        },
      ]}
      openGraph={{
        title: seo.metaTitle,
        description: seo.metaDescription,
        url: seo.canonicalURL,
        images: [
          {
            url: seo.metaImage?.data?.attributes?.url || '',
            width: 400,
            height: 400,
            alt: seo.metaImage?.data?.attributes?.alternativeText || '',
          },
        ],
      }}
    />
  )
}

export default SeoSingle
