import React from 'react';
import { initReactQueryAuth } from 'react-query-auth';
import { CircularProgress } from '@mui/material';

import {
  loginWithEmailAndPassword,
  logout,
  getUser,
  registerWithEmailAndPassword,
} from '../features/auth';
import { storage } from '../helpers/storage';

async function handleUserResponse(data) {
  const { jwt, user } = data;

  if (jwt) {
    storage.setToken(jwt);
  } else {
    storage.clearToken();
  }

  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();

    return data;
  }

  return null;
}

async function loginFn(data) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);

  return user;
}

async function registerFn(data) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);

  return user;
}

async function logoutFn() {
  await logout();
  storage.clearToken();
  window.location.assign(window.location.origin);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <CircularProgress />
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);
