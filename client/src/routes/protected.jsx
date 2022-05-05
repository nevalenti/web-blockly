import React from 'react';
import { Navigate } from 'react-router-dom';

import { Landing } from '../features/misc/routes';
import { Dashboard } from '../features/misc/routes/Dashboard';
import { ProjectsRoutes } from '../features/projects/routes';
import { BlocklyRoutes } from '../features/blockly/routes';

export const protectedRoutes = [
  {
    path: 'app',
    element: <Landing />,
    children: [
      { path: '/app/dashboard', element: <Dashboard /> },
      { path: '/app/projects/*', element: <ProjectsRoutes /> },
      { path: '/app/blockly/*', element: <BlocklyRoutes /> },
      { path: '*', element: <Navigate to="/app/dashboard" /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/app/dashboard" />,
  },
];

export default protectedRoutes;
