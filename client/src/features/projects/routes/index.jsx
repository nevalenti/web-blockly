import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { lazyImport } from '../../../helpers/lazyImport';

const { AddProject } = lazyImport(() => import('./AddProject'), 'AddProject');

export function ProjectsRoutes() {
  return (
    <Routes>
      <Route path="/add" element={<AddProject />} index />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default ProjectsRoutes;
