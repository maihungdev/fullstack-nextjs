import React from "react";
import App, { Container } from "next/app";
import { Provider } from "mobx-react";
import { getSnapshot } from "mobx-state-tree";
import { initializeStore } from "../lib/stores/store";

import NProgress from "nprogress";
import Router from "next/router";
import withApollo from "../lib/apollo/withApollo";
import { ApolloProvider } from "react-apollo";
import NextSeo from "next-seo";

// import your default seo configuration
import SEO from "../next-seo.config";

//import HeaderMain from "../components/HeaderMain";
import FooterMain from "../components/FooterMain";
import { Header } from "../components";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = typeof window === "undefined";
    const store = initializeStore(isServer);
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      initialState: getSnapshot(store),
      isServer,
      pageProps
    };
  }
  constructor(props) {
    super(props);
    this.store = initializeStore(props.isServer, props.initialState);
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <Provider store={this.store}>
          <ApolloProvider client={apolloClient}>
            <Header />
            <Component {...pageProps} />
            <FooterMain />
          </ApolloProvider>
        </Provider>
      </Container>
    );
  }
}
export default withApollo(MyApp);
