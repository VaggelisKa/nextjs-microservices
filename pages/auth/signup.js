import React, { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email + ' ' + password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          type="text" 
          className="form-control"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          type="password" 
          className="form-control"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Signup
      </button>
    </form>
  );
};