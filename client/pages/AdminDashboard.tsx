import { useState } from "react";
import {
  Menu,
  X,
  LogOut,
  Home,
  Package,
  Settings,
  BarChart3,
  Users,
  Plus,
  MapPin,
  Search,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

interface AdminDashboardProps {
  onLogout: () => void;
  adminEmail: string;
}

interface Shipment {
  id: string;
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  currentLocation: string;
  createdAt: string;
  estimatedDelivery: string;
}

export default function AdminDashboard({ onLogout, adminEmail }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [shipments, setShipments] = useState<Shipment[]>([
    {
      id: "1",
      trackingNumber: "SHP123456",
      status: "In Transit",
      origin: "Los Angeles, CA",
      destination: "New York, NY",
      currentLocation: "Chicago, IL",
      createdAt: "2024-01-08",
      estimatedDelivery: "2024-01-15",
    },
    {
      id: "2",
      trackingNumber: "SHP789012",
      status: "Delivered",
      origin: "San Francisco, CA",
      destination: "Seattle, WA",
      currentLocation: "Seattle, WA",
      createdAt: "2024-01-05",
      estimatedDelivery: "2024-01-12",
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    origin: "",
    destination: "",
    estimatedDelivery: "",
  });

  const [editingShipment, setEditingShipment] = useState<string | null>(null);
  const [editLocation, setEditLocation] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "shipments", label: "Shipments", icon: Package },
    { id: "create", label: "Create Tracking", icon: Plus },
    { id: "users", label: "Users", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleCreateShipment = (e: React.FormEvent) => {
    e.preventDefault();
    const newShipment: Shipment = {
      id: Date.now().toString(),
      trackingNumber: `SHP${Math.random().toString().slice(2, 8)}`,
      status: "Created",
      origin: createFormData.origin,
      destination: createFormData.destination,
      currentLocation: createFormData.origin,
      createdAt: new Date().toISOString().split("T")[0],
      estimatedDelivery: createFormData.estimatedDelivery,
    };
    setShipments([...shipments, newShipment]);
    setCreateFormData({ origin: "", destination: "", estimatedDelivery: "" });
    setShowCreateForm(false);
  };

  const handleUpdateLocation = (shipmentId: string) => {
    setShipments(
      shipments.map((s) =>
        s.id === shipmentId
          ? { ...s, currentLocation: editLocation, status: editStatus }
          : s
      )
    );
    setEditingShipment(null);
    setEditLocation("");
    setEditStatus("");
  };

  const handleDeleteShipment = (shipmentId: string) => {
    setShipments(shipments.filter((s) => s.id !== shipmentId));
  };

  const stats = [
    {
      label: "Total Shipments",
      value: shipments.length,
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "In Transit",
      value: shipments.filter((s) => s.status === "In Transit").length,
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
    },
    {
      label: "Delivered",
      value: shipments.filter((s) => s.status === "Delivered").length,
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Pending",
      value: shipments.filter((s) => s.status === "Created").length,
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-border transition-all duration-300 fixed h-full z-40`}
      >
        {/* Logo */}
        <div className="h-20 bg-gradient-to-r from-primary-700 to-primary-800 flex items-center justify-center text-white font-bold gap-3">
          <Package className="w-6 h-6" />
          {sidebarOpen && <span>ShipCo Admin</span>}
        </div>

        {/* Menu Items */}
        <nav className="mt-8 space-y-4 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-primary-50"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${
              !sidebarOpen && "justify-center"
            }`}
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white border-b border-border sticky top-0 z-30">
          <div className="flex items-center justify-between h-20 px-8">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary-700 font-medium"
              >
                <Home className="w-4 h-4" />
                Back to Site
              </Link>
              <div className="flex items-center gap-3 pl-6 border-l border-border">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">Admin User</p>
                  <p className="text-xs text-muted-foreground">{adminEmail}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                  {adminEmail[0].toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's your logistics overview.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-border">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Recent Shipments</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Tracking #</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">From</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">To</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Est. Delivery</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shipments.map((shipment) => (
                        <tr key={shipment.id} className="border-b border-border hover:bg-gray-50">
                          <td className="py-4 px-4 text-sm font-medium text-foreground">{shipment.trackingNumber}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              shipment.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : shipment.status === "In Transit"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {shipment.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{shipment.origin}</td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{shipment.destination}</td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{shipment.estimatedDelivery}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Shipments Tab */}
          {activeTab === "shipments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Manage Shipments</h1>
                  <p className="text-muted-foreground mt-2">Create, update, and monitor all shipments</p>
                </div>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  New Shipment
                </button>
              </div>

              {/* Shipments Table */}
              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-border">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Tracking #</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">From</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">To</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Location</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shipments.map((shipment) => (
                        <tr key={shipment.id} className="border-b border-border hover:bg-gray-50">
                          <td className="py-4 px-6 font-medium text-foreground">{shipment.trackingNumber}</td>
                          <td className="py-4 px-6 text-sm text-muted-foreground">{shipment.origin}</td>
                          <td className="py-4 px-6 text-sm text-muted-foreground">{shipment.destination}</td>
                          <td className="py-4 px-6 text-sm text-muted-foreground">{shipment.currentLocation}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              shipment.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : shipment.status === "In Transit"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {shipment.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setEditingShipment(shipment.id);
                                  setEditLocation(shipment.currentLocation);
                                  setEditStatus(shipment.status);
                                }}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteShipment(shipment.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Edit Modal */}
              {editingShipment && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-xl max-w-md w-full p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Update Shipment</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Current Location</label>
                        <input
                          type="text"
                          value={editLocation}
                          onChange={(e) => setEditLocation(e.target.value)}
                          placeholder="e.g., Chicago, IL"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                        <select
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="Created">Created</option>
                          <option value="In Transit">In Transit</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <button
                          onClick={() => {
                            handleUpdateLocation(editingShipment);
                          }}
                          className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditingShipment(null)}
                          className="flex-1 px-4 py-2 bg-gray-200 text-foreground font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Create Tracking Tab */}
          {activeTab === "create" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Create Tracking Code</h1>
                <p className="text-muted-foreground mt-2">Generate new tracking codes for shipments</p>
              </div>

              <div className="bg-white rounded-xl border border-border p-8 max-w-2xl">
                <form onSubmit={handleCreateShipment} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Origin City</label>
                      <input
                        type="text"
                        value={createFormData.origin}
                        onChange={(e) =>
                          setCreateFormData({ ...createFormData, origin: e.target.value })
                        }
                        placeholder="e.g., Los Angeles, CA"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Destination City</label>
                      <input
                        type="text"
                        value={createFormData.destination}
                        onChange={(e) =>
                          setCreateFormData({
                            ...createFormData,
                            destination: e.target.value,
                          })
                        }
                        placeholder="e.g., New York, NY"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estimated Delivery Date
                    </label>
                    <input
                      type="date"
                      value={createFormData.estimatedDelivery}
                      onChange={(e) =>
                        setCreateFormData({
                          ...createFormData,
                          estimatedDelivery: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      <strong>Auto-generated Tracking Number:</strong>
                    </p>
                    <p className="text-lg font-mono font-bold text-primary mt-2">
                      SHP{Math.random().toString().slice(2, 8).toUpperCase()}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      Create Shipment
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">User Management</h1>
                <p className="text-muted-foreground mt-2">Manage admin users and permissions</p>
              </div>

              <div className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-border">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">User</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Email</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Role</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Status</th>
                        <th className="text-left py-4 px-6 font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-foreground">Admin User</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">admin@shipco.com</td>
                        <td className="py-4 px-6 text-sm text-foreground"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Super Admin</span></td>
                        <td className="py-4 px-6 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Active</span></td>
                        <td className="py-4 px-6 text-sm">
                          <button className="text-blue-600 hover:underline">Edit</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium text-foreground">Demo User</td>
                        <td className="py-4 px-6 text-sm text-muted-foreground">demo@shipco.com</td>
                        <td className="py-4 px-6 text-sm text-foreground"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">Manager</span></td>
                        <td className="py-4 px-6 text-sm"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Active</span></td>
                        <td className="py-4 px-6 text-sm">
                          <button className="text-blue-600 hover:underline">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-2">Manage system and profile settings</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Profile Settings</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={adminEmail}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>

                {/* System Settings */}
                <div className="bg-white rounded-xl border border-border p-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">System Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Get alerts for shipment updates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-foreground">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive SMS alerts</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-foreground">Two-Factor Auth</p>
                        <p className="text-sm text-muted-foreground">Enhanced security</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-foreground">Dark Mode</p>
                        <p className="text-sm text-muted-foreground">Easier on the eyes</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-red-900 mb-4">Danger Zone</h2>
                <p className="text-red-800 mb-4">These actions cannot be undone. Please proceed with caution.</p>
                <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Clear All Data
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
