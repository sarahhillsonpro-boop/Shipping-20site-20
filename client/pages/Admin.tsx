import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminEmail");
    const storedToken = localStorage.getItem("adminToken");

    if (storedAdmin && storedToken) {
      setAdminEmail(storedAdmin);
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Store admin session
    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminToken", `token_${Date.now()}`);
    setAdminEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminToken");
    setAdminEmail("");
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} adminEmail={adminEmail} />;
}
