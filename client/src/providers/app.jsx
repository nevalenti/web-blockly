import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';

import { AuthProvider } from '../lib/auth';
import { queryClient } from '../lib/react-query';
import { Notifications } from '../components/Notifications/Notifications';
import { Loading } from '../features/misc/routes/Loading';

function ErrorFallback() {
  return (
    <span>something went wrong!</span>
  );
}

export function AppProvider({ children }) {
  return (
    <React.Suspense fallback={(<Loading />)}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <AuthProvider>
            <Router>{children}</Router>
          </AuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default AppProvider;
