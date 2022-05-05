import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
} from '@mui/material';

import { useAuth } from '../../../lib/auth';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export function Login() {
  const { login, isLoggingIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      await login(credentials);
      navigate('/app/dashboard');
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.clear();
    }
  };

  const handleGoToRegister = async (event) => {
    event.preventDefault();

    navigate('/auth/register');
  };

  return (
    <Layout>
      <Typography
        variant="h2"
        color="textSecondary"
        style={{
          fontFamily: '\'Julius Sans One\', cursive',
        }}
        sx={{ mt: 1, mb: 1 }}
      >
        web-blockly
      </Typography>
      <Typography
        variant="h5"
        color="textPrimary"
        style={{
          fontFamily: '\'Julius Sans One\', cursive',
        }}
      >
        Login
      </Typography>
      <LoginForm
        handleSubmit={handleSubmit}
        handleGoToRegister={handleGoToRegister}
        isLoggingIn={isLoggingIn}
      />
    </Layout>
  );
}

export default Login;
