import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import buildClient from '../api/build-client';

const AppComponent = ({ Component, pageProps, currentUser }) => (
  <>
    <h1>{currentUser.email}</h1>
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
