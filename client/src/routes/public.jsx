import React from 'react';

import { AuthRoutes } from '../features/auth/routes/index';

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];

export default publicRoutes;
