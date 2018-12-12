import React from 'react'
import App, { Container } from 'next/app'
import { Subscribe, Provider } from "unstated";
import { CounterContainer } from "../containers";
import NProgress from 'nprogress'
import Router from 'next/router'
import withApollo from '../lib/withApollo'
import { ApolloProvider } from 'react-apollo'
import NextSeo from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

//import HeaderMain from "../components/HeaderMain";
import FooterMain from "../components/FooterMain";
import { Layout } from "antd";
const { Content } = Layout;
import { Header } from "../components";
const counter = new CounterContainer();
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
        <ApolloProvider client={apolloClient}>
        <Provider inject={[counter]}>
        <Subscribe to={[counter]}>
            {counter => {
              return <Header counter={counter} />;
            }}
          </Subscribe>
                <Content style={{ padding: "0 10px", marginTop: 64 }}>
          <Component {...pageProps} />
          </Content>
                <FooterMain />
                </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}
export default withApollo(MyApp);