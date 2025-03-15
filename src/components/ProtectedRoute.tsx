import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole?: 'admin' | 'user';
}

const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true' ? true : false;
  // console.log("isAuthenticated: ",isAuthenticated)
  const userRole = localStorage.getItem('userRole');
  // console.log("userRole: ",userRole)
  const location = useLocation();

  const storedAuth = localStorage.getItem("IsAuthenticated");
  const storedRole = localStorage.getItem("userRole");

  const isRestored = storedAuth === "true" && storedRole;

  if (!isAuthenticated && !isRestored) {
    // Redirect to login with return url
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const currentRole = userRole || storedRole;

  if (allowedRole && currentRole !== allowedRole) {
    // Redirect to appropriate dashboard if user has wrong role
    const redirectPath = userRole === 'admin' ? '/admin' : '/user';
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 