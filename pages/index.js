import React from 'react';

import buildClient from '../api/build-client';

export const LandingPage = ({ currentUser }) => (
  <div>
    {currentUser?.email || 'You are not signed in'}
  </div>
);

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentUser');

  return data;
};

export default LandingPage;
