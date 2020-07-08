import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { Link } from '../../i18n';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function Login() {
  const state = useSelector(state => state);
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Truckbook - Login</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <main>
          <h1>{t('login')}</h1>
          <Link href="/auth/signup"><a>{t('signup')}</a></Link><br />
          <Link href="/auth/forgot-password"><a>Forgot Password?</a></Link>
        </main>
      </div>
    </Layout>
  )
}

Login.getInitialProps = async () => {
  return {
    namespacesRequired: ['common']
  }
};

export default Login;
