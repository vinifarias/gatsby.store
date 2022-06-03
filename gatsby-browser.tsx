import './src/styles/fonts.css'
import './src/styles/global/tokens.scss'
import './src/styles/global/resets.scss'
import './src/styles/global/typography.scss'
import './src/styles/global/layout.scss'

import '@fontsource/orelega-one'

import '@fontsource/roboto-mono'
import '@fontsource/roboto-mono/700.css'

import { CartProvider, SessionProvider, UIProvider } from '@faststore/sdk'
import Layout from 'src/Layout'
import AnalyticsHandler from 'src/sdk/analytics'
import { validateCart } from 'src/sdk/cart/validate'
import ErrorBoundary from 'src/sdk/error/ErrorBoundary'
import TestProvider from 'src/sdk/tests'
import { uiActions, uiEffects, uiInitialState } from 'src/sdk/ui'
import { ModalProvider } from 'src/sdk/ui/modal'
import { validateSession } from 'src/sdk/session/validate'
import type { GatsbyBrowser } from 'gatsby'

import storeConfig from './store.config'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <ErrorBoundary>
    <AnalyticsHandler />
    <TestProvider>
      <UIProvider
        initialState={uiInitialState}
        actions={uiActions}
        effects={uiEffects}
      >
        <SessionProvider
          initialState={{
            channel: storeConfig.channel,
            locale: storeConfig.locale,
          }}
          onValidateSession={validateSession}
        >
          <CartProvider mode="optimistic" onValidateCart={validateCart}>
            <ModalProvider>{element}</ModalProvider>
          </CartProvider>
        </SessionProvider>
      </UIProvider>
    </TestProvider>
  </ErrorBoundary>
)

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}
