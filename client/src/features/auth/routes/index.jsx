import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { lazyImport } from '../../../helpers/lazyImport';

const { Login } = lazyImport(() => import('./Login'), 'Login');
const { Register } = lazyImport(() => import('./Register'), 'Register');

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthRoutes;
