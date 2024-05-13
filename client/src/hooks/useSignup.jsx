import useAuth from '../contexts/AuthContext.jsx';
import { useState } from 'react';
import { message } from 'antd';
import {useNavigate} from 'react-router-dom'

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate()

  const registerUser = async (values) => {
    if (values.password !== values.passwordconfirm) {
      return setError("Passwords are not the same!");
    }
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        headers:{
          "Content-Type":"application/json"
        },
        method: 'POST',
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.status === 201) {
        message.success(data.message);
        navigate("/login")
      } else if (res.status === 400) {
        message.warning(data.message);
      } else {
        message.error('Register failed');
      }
    } catch (error) {
      //message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default useSignup;
