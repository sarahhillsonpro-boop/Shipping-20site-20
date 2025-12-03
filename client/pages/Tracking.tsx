import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Search, MapPin, Clock, Package, Truck, CheckCircle } from "lucide-react";

interface TrackingUpdate {
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
}

interface ShipmentData {
  trackingNumber: string;
  status: string;
  currentLocation: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  weight: string;
  updates: TrackingUpdate[];
}

const mockShipments: { [key: string]: ShipmentData } = {
  SHP123456: {
    trackingNumber: "SHP123456",
    status: "In Transit",
    currentLocation: "New York, NY",
    estimatedDelivery: "2024-01-15",
    origin: "Los Angeles, CA",
    destination: "New York, NY",
    weight: "15.5 kg",
    updates: [
      {
        date: "2024-01-10",
        time: "14:30",
        status: "Out for Delivery",
        location: "New York, NY",
        description: "Package is out for delivery",
      },
      {
        date: "2024-01-09",
        time: "08:15",
        status: "In Transit",
        location: "Newark, NJ",
        description: "Package in transit to destination",
      },
      {
        date: "2024-01-08",
        time: "22:45",
        status: "Package Processed",
        location: "Chicago, IL",
        description: "Package processed at facility",
      },
      {
        date: "2024-01-07",
        time: "10:20",
        status: "Picked Up",
        location: "Los Angeles, CA",
        description: "Package picked up from sender",
      },
    ],
  },
  SHP789012: {
    trackingNumber: "SHP789012",
    status: "Delivered",
    currentLocation: "Miami, FL",
    estimatedDelivery: "2024-01-12",
    origin: "Houston, TX",
    destination: "Miami, FL",
    weight: "8.2 kg",
    updates: [
      {
        date: "2024-01-12",
        time: "16:45",
        status: "Delivered",
        location: "Miami, FL",
        description: "Package delivered successfully",
      },
      {
        date: "2024-01-11",
        time: "09:30",
        status: "Out for Delivery",
        location: "Miami, FL",
        description: "Package out for delivery",
      },
      {
        date: "2024-01-10",
        time: "05:00",
        status: "In Transit",
        location: "Jacksonville, FL",
        description: "Package in transit",
      },
      {
        date: "2024-01-08",
        time: "14:20",
        status: "Picked Up",
        location: "Houston, TX",
        description: "Package picked up from sender",
      },
    ],
  },
};

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSearched(true);

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      setShipmentData(null);
      return;
    }

    const data = mockShipments[trackingNumber.toUpperCase()];
    if (data) {
      setShipmentData(data);
    } else {
      setError(`No shipment found with tracking number: ${trackingNumber}`);
      setShipmentData(null);
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === "Delivered") return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (status === "Out for Delivery") return <Truck className="w-6 h-6 text-blue-500" />;
    if (status === "In Transit") return <Package className="w-6 h-6 text-orange-500" />;
    return <Clock className="w-6 h-6 text-gray-500" />;
  };

  const getStatusColor = (status: string) => {
    if (status === "Delivered") return "bg-green-100 text-green-800 border-green-300";
    if (status === "Out for Delivery") return "bg-blue-100 text-blue-800 border-blue-300";
    if (status === "In Transit") return "bg-orange-100 text-orange-800 border-orange-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg"
            alt="Tracking background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Track Your Shipment</h1>
          <p className="text-white/90">
            Enter your tracking number to get real-time updates on your package
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter tracking number (e.g., SHP123456)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </form>

            {/* Demo Tracking Numbers */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-sm text-muted-foreground mb-2">
                Try these demo tracking numbers:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setTrackingNumber("SHP123456");
                    setShipmentData(mockShipments["SHP123456"]);
                    setSearched(true);
                    setError("");
                  }}
                  className="px-3 py-1 bg-white border border-primary-300 text-primary rounded text-sm hover:bg-primary-50 transition-colors"
                >
                  SHP123456
                </button>
                <button
                  onClick={() => {
                    setTrackingNumber("SHP789012");
                    setShipmentData(mockShipments["SHP789012"]);
                    setSearched(true);
                    setError("");
                  }}
                  className="px-3 py-1 bg-white border border-primary-300 text-primary rounded text-sm hover:bg-primary-50 transition-colors"
                >
                  SHP789012
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searched && (
        <section className="py-12 md:py-16 bg-primary-50">
          <div className="container mx-auto px-4">
            {error ? (
              <div className="max-w-2xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                  <p className="text-red-800 font-medium">{error}</p>
                </div>
              </div>
            ) : shipmentData ? (
              <div className="max-w-4xl mx-auto">
                {/* Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-6 border border-border">
                    <div className="flex items-start gap-3 mb-4">
                      {getStatusIcon(shipmentData.status)}
                      <div>
                        <p className="text-sm text-muted-foreground">Current Status</p>
                        <p className="text-2xl font-bold text-foreground">
                          {shipmentData.status}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                        shipmentData.status
                      )}`}
                    >
                      {shipmentData.status}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-border">
                    <MapPin className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Current Location</p>
                    <p className="text-2xl font-bold text-foreground">
                      {shipmentData.currentLocation}
                    </p>
                  </div>
                </div>

                {/* Package Details */}
                <div className="bg-white rounded-lg p-6 border border-border mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Package Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
                      <p className="text-lg font-semibold text-foreground">
                        {shipmentData.trackingNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="text-lg font-semibold text-foreground">
                        {shipmentData.weight}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Origin</p>
                      <p className="text-lg font-semibold text-foreground">
                        {shipmentData.origin}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Destination</p>
                      <p className="text-lg font-semibold text-foreground">
                        {shipmentData.destination}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="text-lg font-semibold text-foreground">
                        {new Date(shipmentData.estimatedDelivery).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-lg p-6 border border-border">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Tracking History
                  </h2>
                  <div className="space-y-4">
                    {shipmentData.updates.map((update, index) => (
                      <div key={index} className="flex gap-4 relative">
                        <div className="flex flex-col items-center">
                          {getStatusIcon(update.status)}
                          {index < shipmentData.updates.length - 1 && (
                            <div className="w-1 h-12 bg-border mt-2"></div>
                          )}
                        </div>
                        <div className="pb-4 flex-grow">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-semibold text-foreground">
                                {update.status}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {update.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-foreground">
                                {update.date}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {update.time}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {update.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      )}
    </Layout>
  );
}
