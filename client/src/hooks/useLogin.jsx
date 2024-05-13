import useAuth from "../contexts/AuthContext.jsx";
import { useState } from "react";
import { message } from "antd";

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        message.success(data.message);
        login(data.token, data.user);
      } else {
        message.warning(data.message);
      }
    } catch (error) {
      //message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
