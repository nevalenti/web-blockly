import React from 'react';

import { lazyImport } from '../../../helpers/lazyImport';

const { Projects } = lazyImport(() => import('../../projects/routes/Projects'), 'Projects');

export function Dashboard() {
  return (
    <Projects />
  );
}

export default Dashboard;
