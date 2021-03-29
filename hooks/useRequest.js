import React, { useState } from 'react';
import axios from 'axios';

const useRequest = ({ url, reqType, body, onSuccess }) => {
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

      if (onSuccess) {
        onSuccess(res.data);
      }

      setUserObj(res.data);
    } catch (error) {
      setErrors(
        <div className="alert alert-danger">
          <h4 className="pb-2 text-center">Oooops...</h4>
          <ul className="my-0">
            {
              error.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)
            }
          </ul>
        </div>
      );
    }
  };

  return { sendRequest, errors, userObj };
};

export default useRequest;
