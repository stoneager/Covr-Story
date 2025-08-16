import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Owner/Dashboard";
import OwnerLayout from "./layouts/OwnerLayout";
import { useContext } from "react";
import { AuthContext } from "./store/authContext";

const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return children;
};

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/owner",
    element: (
      <PrivateRoute role="owner">
        <OwnerLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      // Later: Orders, CMS, Returns, Coupons, Discounts
    ],
  },
]);

export default router;
