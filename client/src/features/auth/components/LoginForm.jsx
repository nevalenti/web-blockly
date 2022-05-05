import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
} from '@mui/material';
import useLocalStorage from '../../../hooks/useLocalStorage';

export function LoginForm({
  handleSubmit,
  handleGoToRegister,
  isLoggingIn,
}) {
  const [emailLS, setEmailLS] = useLocalStorage('email', '');
  const [email, setEmail] = useState(emailLS);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(!!emailLS);

  const handleEmailFieldTyping = (event) => {
    setEmail(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeClick = () => {
    setRememberMe(!rememberMe);
    if (rememberMe) {
      setEmailLS('');
    } else {
      setEmailLS(email);
    }
  };

  useEffect(() => {}, []);

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="email"
        label="Email Address"
        id="email"
        value={email || ''}
        autoComplete="email"
        autoFocus={!rememberMe}
        onChange={handleEmailFieldTyping}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="current-password"
        autoFocus={rememberMe}
      />
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justifyContent="space-evenly"
        justifyItems="center"
        spacing={0}
      >
        <Grid item>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" checked={rememberMe} />}
            label="Remember me"
            onClick={handleRememberMeClick}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox value="show" color="primary" checked={showPassword} />}
            label="Show password"
            onClick={handleShowPasswordClick}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        justifyItems="center"
        spacing={0}
        sx={{ mt: 2, mb: 2 }}
      >
        <Grid item>
          <Button
            disabled={isLoggingIn}
            type="submit"
            variant="contained"
            sx={{ width: '250px' }}
          >
            Sign In
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled
            onClick={handleGoToRegister}
            variant="contained"
            color="secondary"
            sx={{ width: '125px' }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
