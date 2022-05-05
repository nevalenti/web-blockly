import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../../lib/auth';
import { Loading } from './Loading';

export function Landing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
    if (window.location.pathname === '/') {
      navigate('/app/dashboard');
    }
  }, []);

  return (
    <React.Suspense fallback={(<Loading />)}>
      <Outlet />
    </React.Suspense>
  );
}

export default Landing;
