import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Landing } from '../features/misc';
import { useAuth } from '../lib/auth';

import { publicRoutes } from './public';
import { protectedRoutes } from './protected';

export function AppRoutes() {
  const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
}

export default AppRoutes;
