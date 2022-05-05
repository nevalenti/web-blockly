import Axios from 'axios';

import { API_URL } from '../config';
import { useNotificationStore } from '../stores/notifications';
import { storage } from '../helpers/storage';

const axios = Axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

axios.interceptors.request.use(
  (config) => {
    const token = storage.getToken() ? JSON.parse(storage.getToken()) : '';

    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = 'application/json';

    return config;
  },
);

axios.interceptors.response.use(
  async (response) => {
    const message = response.data?.message;
    if (message) {
      await useNotificationStore.getState().addNotification({
        type: 'success',
        title: 'Success',
        message,
      });
    }

    return response.data;
  },
  async (error) => {
    const message = error.response?.data?.error || error.response;
    if (message) {
      await useNotificationStore.getState().addNotification({
        type: 'error',
        title: 'Error',
        message,
      });
    }

    return Promise.reject(error);
  },
);

export default axios;
