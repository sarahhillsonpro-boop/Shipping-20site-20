import { MapPin, Navigation } from "lucide-react";
import { useEffect, useRef } from "react";

interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  type: "origin" | "current" | "destination";
  date?: string;
  status?: string;
}

interface TrackingMapProps {
  locations: MapLocation[];
  currentLocation: string;
}

export default function TrackingMap({ locations, currentLocation }: TrackingMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Normalized coordinates for US map (simplified)
  const cityCoordinates: { [key: string]: { x: number; y: number } } = {
    "Los Angeles, CA": { x: 80, y: 280 },
    "San Francisco, CA": { x: 65, y: 220 },
    "Denver, CO": { x: 240, y: 240 },
    "Chicago, IL": { x: 420, y: 200 },
    "New York, NY": { x: 580, y: 150 },
    "Miami, FL": { x: 520, y: 420 },
    "Houston, TX": { x: 280, y: 350 },
    "Jacksonville, FL": { x: 540, y: 380 },
    "Newark, NJ": { x: 590, y: 140 },
    "Seattle, WA": { x: 50, y: 100 },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, width, height);

    // Draw simplified US map background
    ctx.fillStyle = "#e0f2fe";
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1;
    
    // Simplified US state borders (very simplified)
    ctx.fillRect(50, 80, 550, 370);

    // Draw grid
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 80);
      ctx.lineTo(i, 450);
      ctx.stroke();
    }
    for (let i = 80; i < height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(50, i);
      ctx.lineTo(600, i);
      ctx.stroke();
    }

    // Draw route line
    if (locations.length > 1) {
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      
      const startLoc = locations.find(l => l.type === "origin");
      if (startLoc) {
        const startCoord = cityCoordinates[startLoc.name];
        if (startCoord) {
          ctx.moveTo(startCoord.x, startCoord.y);
          
          // Draw path through all locations
          for (const location of locations) {
            const coord = cityCoordinates[location.name];
            if (coord) {
              ctx.lineTo(coord.x, coord.y);
            }
          }
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw location markers
    for (const location of locations) {
      const coord = cityCoordinates[location.name];
      if (!coord) continue;

      // Determine marker color and size
      let color = "#06b6d4"; // default cyan
      let size = 12;

      if (location.type === "origin") {
        color = "#10b981"; // green for origin
        size = 14;
      } else if (location.type === "destination") {
        color = "#f59e0b"; // amber for destination
        size = 14;
      } else if (location.type === "current") {
        color = "#ef4444"; // red for current
        size = 16;
      }

      // Draw marker circle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(coord.x, coord.y, size, 0, Math.PI * 2);
      ctx.fill();

      // Draw marker border
      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Add glow effect for current location
      if (location.type === "current") {
        ctx.fillStyle = "rgba(239, 68, 68, 0.1)";
        ctx.beginPath();
        ctx.arc(coord.x, coord.y, size + 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw city label
      ctx.fillStyle = "#1e293b";
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(location.name.split(",")[0], coord.x, coord.y + size + 18);
    }

    // Draw legend
    const legendX = width - 180;
    const legendY = 20;

    ctx.fillStyle = "white";
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.fillRect(legendX, legendY, 170, 140);
    ctx.strokeRect(legendX, legendY, 170, 140);

    ctx.fillStyle = "#1e293b";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Tracking Map", legendX + 10, legendY + 20);

    // Legend items
    const legendItems = [
      { color: "#10b981", label: "Origin" },
      { color: "#06b6d4", label: "In Transit" },
      { color: "#ef4444", label: "Current" },
      { color: "#f59e0b", label: "Destination" },
    ];

    let legendItemY = legendY + 40;
    for (const item of legendItems) {
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(legendX + 15, legendItemY, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#64748b";
      ctx.font = "11px Inter, sans-serif";
      ctx.fillText(item.label, legendX + 30, legendItemY + 4);
      legendItemY += 22;
    }
  }, [locations]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Live Location Map</h2>
          <p className="text-sm text-muted-foreground">Real-time package tracking visualization</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-lg">
        <canvas
          ref={canvasRef}
          width={700}
          height={480}
          className="w-full bg-gradient-to-br from-slate-50 to-blue-50"
        />
      </div>

      {/* Current Location Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <Navigation className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Current Location</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">{currentLocation}</p>
          <p className="text-xs text-blue-700 mt-2">Updated in real-time</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Total Distance</span>
          </div>
          <p className="text-2xl font-bold text-green-900">2,800 miles</p>
          <p className="text-xs text-green-700 mt-2">Approximate route distance</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
          <div className="flex items-center gap-3 mb-3">
            <Navigation className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-900">GPS Accuracy</span>
          </div>
          <p className="text-2xl font-bold text-orange-900">±50 meters</p>
          <p className="text-xs text-orange-700 mt-2">High precision tracking</p>
        </div>
      </div>

      {/* Map Info */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 border border-primary-200">
        <p className="text-sm text-foreground">
          <strong>📍 Live Tracking:</strong> Your package is currently in <span className="font-semibold text-primary">{currentLocation}</span>. 
          The map above shows the complete route from origin to destination with real-time position updates. Green markers indicate picked-up locations, blue for transit hubs, red for current position, and orange for destination.
        </p>
      </div>
    </div>
  );
}
