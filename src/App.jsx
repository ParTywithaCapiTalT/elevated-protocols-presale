import { Toaster } from "./components/ui/toaster.jsx"
import UserNotRegisteredError from '@/components/UserNotRegisteredError.jsx';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '@/lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import ResetPassword from '@/pages/ResetPassword';
import Register from '@/pages/Register';
import Home from '@/pages/Home';
import Layout from '@/components/Layout';
// Add page imports here

const AppRoutes = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // 1. Handle Global Loading States
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-muted border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  // 2. Handle Specific Non-Registered Edge Case
  if (authError?.type === 'user_not_registered') {
    return <UserNotRegisteredError />;
  }

  return (
    <Routes>
      {/* PUBLIC ROUTES (No Auth Required) */}
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/Register" element={<Register />} />

      {/* PROTECTED ROUTES (Requires Auth) */}
      <Route 
        element={
          authError?.type === 'auth_required' 
            ? (navigateToLogin(), null) // Redirects if auth fails
            : <Layout />
        }
      >
        <Route path="/" element={<Home />} />
        {/* Add your protected page Route elements here */}
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AppRoutes />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App;
