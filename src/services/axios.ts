import axiosBase from 'axios';

export default axiosBase.create({
  baseURL: `${import.meta.env.VITE_API_URL ?? 'http://localhost/'}graphql`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
