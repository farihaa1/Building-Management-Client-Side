import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  });

  // Request interceptor to add the authorization token to headers
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle 403 errors
  // axiosSecure.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     if (error.response && error.response.status === 403) {
  //       console.log(error.response)
  //       // Log out the user and navigate to the login page
  //       await logOut();
  //       navigate('/sign-in');
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return axiosSecure;
};

export default useAxiosSecure;
