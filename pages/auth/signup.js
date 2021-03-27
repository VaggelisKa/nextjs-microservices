import React, { useState } from 'react';
import axios from 'axios';


export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/users/signup', {
      email,
      password
    });

    console.log(res.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center py-3">Signup</h1>
      <div className="form-group px-2">
        <label>Email Address</label>
        <input
          value={email}
          type="text" 
          className="form-control"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="form-group px-2">
        <label>Password</label>
        <input
          value={password}
          type="password" 
          className="form-control"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <div className="d-flex justify-content-end pr-2">
        <button className="btn btn-lg btn-primary" type="submit">
          Signup
        </button>
      </div>
    </form>
  );
};