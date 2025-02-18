import 'src/styles/pages/homepage.scss'

import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import { Suspense } from 'react'
import BannerText from 'src/components/sections/BannerText'
import Hero from 'src/components/sections/Hero'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import { incentivesMockHeader as IncentivesMock } from 'src/components/sections/Incentives/incentivesMock'
import ProductShelf from 'src/components/sections/ProductShelf'
import ProductTiles from 'src/components/sections/ProductTiles'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import ProductTilesSkeleton from 'src/components/skeletons/ProductTilesSkeleton'
import { ITEMS_PER_SECTION } from 'src/constants'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  const {
    data: { site },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `${site?.siteMetadata?.siteUrl}`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <Hero
        title="New Products Available"
        subtitle="At BaseStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase."
        linkText="See all"
        link="/technology"
        imageSrc="https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg"
        imageAlt="Quest 2 Controller on a table"
      />

      <IncentivesHeader incentives={IncentivesMock} />

      <Suspense fallback={<ProductShelfSkeleton loading />}>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          selectedFacets={[{ key: 'productClusterIds', value: '140' }]}
          title="Most Wanted"
        />
      </Suspense>

      <Suspense fallback={<ProductTilesSkeleton loading />}>
        <ProductTiles
          first={3}
          selectedFacets={[{ key: 'productClusterIds', value: '141' }]}
          title="Just Arrived"
        />
      </Suspense>

      <BannerText
        title="Receive our news and promotions in advance. Enjoy and get 10% off on your first purchase."
        actionPath="/"
        actionLabel="Call to action"
      />

      <Suspense fallback={<ProductShelfSkeleton loading />}>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          selectedFacets={[{ key: 'productClusterIds', value: '142' }]}
          title="Deals & Promotions"
        />
      </Suspense>
    </>
  )
}

export const querySSG = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
        siteUrl
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
