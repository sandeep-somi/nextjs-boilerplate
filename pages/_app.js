import React from 'react';
import '../styles/index.scss';
import { appWithTranslation } from '../i18n';
import store from '../redux/store'

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