import React from 'react';
import axios from 'axios';

export const LandingPage = ({ currentUser }) => (
  <div>
    {currentUser.email}
  </div>
);

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentUser',
      {
        headers: req.headers
      }
    );

    return data;
  }

  const { data } = await axios.get('/api/users/currentUser');

  return data;
};

export default LandingPage;
