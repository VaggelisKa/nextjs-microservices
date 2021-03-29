import React, { useState } from 'react';
import Router from 'next/router';

import useRequest from '../../hooks/useRequest';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequest, errors } = useRequest({
    url: '/api/users/signup',
    reqType: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/')
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendRequest();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="text-center py-3">Signup</h1>
      { errors }
      <div className="form-group px-2">
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          type="text"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group px-2">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end pr-2">
        <button className="btn btn-lg btn-primary" type="submit">
          Signup
        </button>
      </div>
    </form>
  );
}
