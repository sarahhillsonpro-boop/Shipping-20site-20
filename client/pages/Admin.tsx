import { Layout } from "../components/Layout";
import { BarChart3, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The admin dashboard is a secure area for managing shipments, customers,
              and business operations. This section requires authentication.
            </p>
            <div className="bg-primary-50 border border-primary-300 rounded-lg p-6 mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Admin Features:</strong>
              </p>
              <ul className="text-left space-y-2 text-muted-foreground mb-4 inline-block">
                <li>✓ Create and manage tracking codes</li>
                <li>✓ Update package status and location</li>
                <li>✓ Manage customer details</li>
                <li>✓ View shipment analytics</li>
                <li>✓ Staff account management</li>
                <li>✓ System notifications</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Back to Home
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                Admin Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
