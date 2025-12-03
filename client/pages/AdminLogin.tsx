import { useState } from "react";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface AdminLoginProps {
  onLogin: (email: string, password: string) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      // Demo credentials
      if (email === "admin@shipco.com" && password === "admin123") {
        onLogin(email, password);
      } else if (email === "demo@shipco.com" && password === "demo123") {
        onLogin(email, password);
      } else {
        setError("Invalid email or password. Try admin@shipco.com / admin123");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-800 px-8 py-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent p-3 rounded-lg">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ShipCo Admin</h1>
                <p className="text-sm text-white/80">Secure Access Portal</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@shipco.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Demo: admin@shipco.com</p>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Demo: admin123</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold py-2.5 rounded-lg hover:from-primary-800 hover:to-primary-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-xs font-semibold text-primary mb-2">Demo Credentials:</p>
              <ul className="text-xs text-foreground space-y-1">
                <li><strong>Admin:</strong> admin@shipco.com / admin123</li>
                <li><strong>Demo:</strong> demo@shipco.com / demo123</li>
              </ul>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-sm text-primary hover:text-primary-700 font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-white/70 text-xs">
          <p>© 2024 ShipCo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
