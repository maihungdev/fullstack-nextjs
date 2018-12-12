import React from 'react'
import App, { Container } from 'next/app'
import { GlobalStore, connect } from "../store";
import { Persist } from "react-persist";
import NProgress from 'nprogress'
import Router from 'next/router'
import withApollo from '../lib/withApollo'
import { ApolloProvider } from 'react-apollo'
import NextSeo from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

//import HeaderMain from "../components/HeaderMain";
import FooterMain from "../components/FooterMain";
import { Header } from "../components";

const GlobalStorePersist = connect(props => (
  <Persist
    name="global-state"
    data={props.store.state}
    debounce={500}
    onMount={data => props.store.setInitialState(data)}
  />
));


Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  constructor (props) {
    super(props)
  
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
         <NextSeo config={SEO} />
         <GlobalStore>
         <GlobalStorePersist />
        <ApolloProvider client={apolloClient}>
        <Header/>
          <Component {...pageProps} />
                <FooterMain />    
        </ApolloProvider>
        </GlobalStore>
      </Container>
    )
  }
}
export default withApollo(MyApp);