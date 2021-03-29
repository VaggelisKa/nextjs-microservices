import React, { useState } from 'react';
import axios from 'axios';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError([]);

      const res = await axios.post('/api/users/signup', {
        email,
        password
      });
  
      console.log(res.data);
    } catch (err) {
      setError(err.response.data.errors);
    }
  }


  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="text-center py-3">Signup</h1>
      {
        errors.length > 0 && (
          <div className="alert alert-danger">
            <h4 className="pb-2 text-center">Oooops...</h4>
            <ul className="my-0">
              {
                errors.map(err => <li key={err.message}>{err.message}</li>)
              }
            </ul>
          </div>
        )
      }
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