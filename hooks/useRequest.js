import React, { useState } from 'react';
import axios from 'axios';

const useRequest = ({ url, reqType, body }) => {
  const [userObj, setUserObj] = useState(null);
  const [errors, setErrors] = useState(null);

  const sendRequest = async () => {
    try {
      setErrors(null);

      const res = await axios({
        method: reqType,
        url,
        data: body
      });

      setUserObj(res.data);
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4 className="pb-2 text-center">Oooops...</h4>
          <ul className="my-0">
            {
              err.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)
            }
          </ul>
        </div>
      );
    }
  };

  return { sendRequest, errors, userObj };
};

export default useRequest;



