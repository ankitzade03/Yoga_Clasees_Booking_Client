
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { YogaContext } from './Context/ContextApi';

import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { UserMainCompo } from './Component/UserMainCompo';
import { TrainerMainCompo } from './Component/TrainerMainCompo';
import { ProtectedRoute } from './Pages/ProtectedRoute';
import { Header, PublicHeader } from './Pages/Header';
import { InstructorHeader } from './Pages/InstructorHeader';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const App = () => {
  const { token, role, loading } = useContext(YogaContext);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  const renderHeader = () => {
    if (!token) return <PublicHeader />;
    if (role === 'user') return <Header />;
    if (role === 'instructor') return <InstructorHeader />;
    return null;
  };

  return (
    <>
    <ToastContainer></ToastContainer>
      {renderHeader()}
      <Routes>
        {/* Public Routes */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Users */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserMainCompo />
            </ProtectedRoute>
          }
        />

        {/* Protected Route for Instructors */}
        <Route
          path="/instructor/*"
          element={
            <ProtectedRoute allowedRoles={['instructor']}>
              <TrainerMainCompo />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
