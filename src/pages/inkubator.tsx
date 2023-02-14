import React from 'react'
import { UIProvider, WindowProvider } from '../contexts'
import { Helmet } from 'react-helmet-async'
import {
  AuditorTrack,
  Footer,
  BuilderTrack,
  EcosystemGrants,
  Hero,
  Nav,
  Overview,
  SidebarMenu,
} from '../components/pg-inkubator'

const TITLE = 'ink!ubator | Take your ink! project to new depths.'
const DESCRIPTION =
  'ink!ubator connects you with core developers and extensive resources. Get funding and technical support for your next ink! project.'

const Inkubator = () => {
  return (
    <WindowProvider>
      <UIProvider>
        <Helmet title={TITLE}>
          <meta name="description" content={DESCRIPTION} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:site" content="@ink_lang" />
          <meta name="twitter:image" content="https://use.ink/img/twitter/inkubator-twitter.png" />
          <meta name="twitter:creator" content="@ink_lang" />
        </Helmet>
        <div className="font-montserrat bg-background-100 dark:bg-background-800 rounded-b-3xl">
          <div className="bg-light-background dark:bg-dark-background rounded-b-3xl xl:pb-12 pb-4 md:pt-40 pt-28">
            <Nav />
            <SidebarMenu />
            <Hero className="overflow-hidden" />
            <Overview />
            <BuilderTrack />
            <AuditorTrack />
            <EcosystemGrants />
          </div>
          <Footer />
        </div>
      </UIProvider>
    </WindowProvider>
  )
}

export default Inkubator
