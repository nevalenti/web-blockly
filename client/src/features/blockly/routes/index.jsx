import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { lazyImport } from '../../../helpers/lazyImport';

const { BlocklyApp } = lazyImport(() => import('./BlocklyApp'), 'BlocklyApp');

export function BlocklyRoutes() {
  return (
    <Routes>
      <Route path="/:projectId" element={<BlocklyApp />} index />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default BlocklyRoutes;
