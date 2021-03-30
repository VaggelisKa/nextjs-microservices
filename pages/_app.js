import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import buildClient from '../api/build-client';
import Header from '../components/header-component';

const AppComponent = ({ Component, pageProps, currentUser }) => (
  <>
    <Header currentUser={currentUser} />
    <Component {...pageProps} />
  </>
);

AppComponent.getInitialProps = async ({ ctx, Component }) => {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentUser');

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
