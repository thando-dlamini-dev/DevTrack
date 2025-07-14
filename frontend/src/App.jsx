import React, { useEffect, useState} from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/navbar';
import LoginPage from './pages/LoginPage';
import useAuthStore from './stores/authStore';
import LoginSuccess from './components/LoginSuccess';
import ContributePage from './pages/ContributePage';

const App = () => {
  const location = useLocation();

  // Use shallow comparison to prevent infinite loops with object selectors
  const initialize = useAuthStore(state => state.initialize);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const setupTokenRefresh = useAuthStore(state => state.setupTokenRefresh);
  const isLoading = useAuthStore(state => state.isLoading);

  useEffect(() => {
    initialize();
    
    const cleanupRefresh = setupTokenRefresh();

    // Cleanup on unmount
    return () => {
      if (cleanupRefresh) cleanupRefresh();
    };
  }, [initialize, setupTokenRefresh])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
  <div className='relative min-h-screen overflow-hidden text-white'>
      <div className='relative'>
        <Navbar/>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/contribute' 
              element={
                <ProtectedRoute>
                  <ContributePage/>
                </ProtectedRoute>
              } 
            />
            <Route path="/login/success" element={<LoginSuccess />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Toaster />
    </div>
  );
}

export default App
