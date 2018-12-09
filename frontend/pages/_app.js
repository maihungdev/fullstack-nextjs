import React from 'react'
import { Provider } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import App, { Container } from 'next/app'
import { initializeStore } from '../stores/store'
import Head from "next/head";
import withApollo from '../lib/withApollo'
import { ApolloProvider } from 'react-apollo'
import NextSeo from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

import HeaderMain from "../components/HeaderMain";
import FooterMain from "../components/FooterMain";
import { Layout } from "antd";
const { Content } = Layout;

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = (typeof window === 'undefined')
    const store = initializeStore(isServer)
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps
    }
  }

  constructor (props) {
    super(props)
    this.store = initializeStore(props.isServer, props.initialState)
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
         <NextSeo config={SEO} />
        <ApolloProvider client={apolloClient}>
        <Provider store={this.store}>
        <Layout>
        <HeaderMain />
                <Content style={{ padding: "0 10px", marginTop: 64 }}>
          <Component {...pageProps} />
          </Content>
                <FooterMain />
              </Layout>
        </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}
export default withApollo(MyApp);