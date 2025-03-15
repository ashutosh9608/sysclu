import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export interface UserDataType {
  id: string; // Assuming the user has a unique identifier
  username: string;
  email: string;
  country: string;
  token: string;
  roles: string[]; // Array of roles, e.g., ["ADMIN", "USER"]
  contact: string;
  joinedDate: Date;
  complaints: [];
}
interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  login: (email: string, password: string) => Promise<any>;
  register: (
    username: string,
    email: string,
    country: string,
    password: string
  ) => Promise<any>;
  userInfo: UserDataType | null;
  logout: () => void;
  getUserData: () => UserDataType | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const navigate = useNavigate();

  const getUserData = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return undefined;
  };
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
      return;
    } else {
      axios
        .get("http://localhost:8080/api/auth/validateToken", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) =>{ 
          setUserData(response.data);
        
        }) // ✅ Logs the actual data
        .catch((error) => {
          console.log("Executing logOut");
          logout();
          navigate("/");
          // console.error(
          //   "Error verifying token:",
          //   error.response?.data || error.message
          // ); // Logout if token is invalid
        });
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      // Wait for token verification to complete
      await verifyToken();
  
      // Now proceed with fetching user role and data
      const storedRole = localStorage.getItem("userRole");
      setUserRole(storedRole);
      console.log("storedRole", storedRole);
  
      const storedUserDataString = localStorage.getItem("userData");
      const storedUserData = storedUserDataString
        ? JSON.parse(storedUserDataString)
        : null;
      console.log("storedUserData", storedUserData);
  
      if (storedUserData != null && storedRole != null) {
        setIsAuthenticated(true);
        setUserData(storedUserData);
        if (storedRole === "admin") {
          console.log("navigating to admin");
          navigate("/admin");
        } else if (storedRole === "user") {
          console.log("navigating to user");
          navigate("/user");
        } else {
          console.log("navigating to none");
        }
      }
    };
  
    initializeAuth();
  }, []);
  

  const login = async (email: string, password: string) => {
    const API_BASE_URL = "http://localhost:8080/api/auth/login";
    try {
      const response = await axios.post(API_BASE_URL, {
        username: email,
        password: password,
      });
      console.log("AuthContext", response);
      setUserData(response.data);
      const user = response.data;
      console.log("AuthContext", user);

      if (user && user.roles) {
        const userRole = user.roles.includes("ADMIN") ? "admin" : "user";
        setUserRole(userRole);
        setIsAuthenticated(true);
        localStorage.setItem("token", user.token);
        localStorage.setItem("userRole", userRole);
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", "true");

        if (userRole === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
        return userData;
      }
    } catch (error) {
      console.error("Login failed", error);
      if (axios.isAxiosError(error) && error.response) {
        navigate("/error", {
          state: { errorMessage: error.response.data.message },
        });
      } else {
        navigate("/error", {
          state: {
            errorMessage: "An unexpected error occurred. Please try again.",
          },
        });
      }
      throw error;
    }
  };

  const register = async (
    name: string,
    email: string,
    country: string,
    password: string
  ) => {
    const API_BASE_URL = "http://localhost:8080/api/auth/register";
    try {
      const response = await axios.post(API_BASE_URL, {
        username: name,
        email: email,
        country: country,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        login(email, password);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        navigate("/error", {
          state: { errorMessage: error.response.data.message },
        });
      } else {
        navigate("/error", {
          state: {
            errorMessage: "An unexpected error occurred. Please try again.",
          },
        });
      }
      throw error;
    }
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUserRole(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        login,
        register,
        userInfo: userData,
        logout,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
