import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // kalau belum login → redirect ke login
  if (!token) {
    return <Navigate to="/homepage" replace />;
  }

  // kalau sudah login → boleh akses halaman
  return <Outlet />;
};

export default ProtectedRoute;
