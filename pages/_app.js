import React from 'react';
import '../styles/index.scss';
import { appWithTranslation } from '../i18n';
// import App from 'next/app';
import store from '../redux/store'

// class AppContainer extends App {

//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props;
//     return <Component {...pageProps} />
//   }
// }

function AppContainer({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

AppContainer.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps
  }
}

export default store.withRedux(appWithTranslation(AppContainer));