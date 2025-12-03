import { Layout } from "@/components/Layout";
import { Plane, Ship, Truck, Zap, Package, Globe, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air shipping for urgent deliveries worldwide",
      features: [
        "Delivery in 2-5 business days",
        "Real-time tracking",
        "Door-to-door service",
        "Fully insured shipments",
      ],
      price: "From $45/kg",
    },
    {
      icon: Ship,
      title: "Sea Cargo",
      description: "Cost-effective ocean shipping for large volume shipments",
      features: [
        "Budget-friendly rates",
        "Capacity for full containers",
        "International documentation support",
        "Port-to-port or door-to-door",
      ],
      price: "From $200/ton",
    },
    {
      icon: Truck,
      title: "Road Freight",
      description: "Flexible ground transportation across continents",
      features: [
        "Delivery within 1-2 weeks",
        "Partial and full loads available",
        "Temperature-controlled options",
        "Cross-border expertise",
      ],
      price: "From $100/shipment",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Next-day delivery for time-sensitive packages",
      features: [
        "Same-day dispatch available",
        "Guaranteed next-day delivery",
        "Priority handling",
        "SMS notifications",
      ],
      price: "From $25/package",
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage and inventory management solutions",
      features: [
        "Climate-controlled facilities",
        "24/7 security monitoring",
        "Inventory management system",
        "Pick and pack services",
      ],
      price: "Custom quotes",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Shipping to 195+ countries with local expertise",
      features: [
        "Customs clearance support",
        "Multi-carrier options",
        "Consolidation services",
        "Dedicated account managers",
      ],
      price: "Competitive rates",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-white/90">
            Comprehensive shipping solutions for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const images = [
                "https://images.pexels.com/photos/20016279/pexels-photo-20016279.jpeg",
                "https://images.pexels.com/photos/2226457/pexels-photo-2226457.jpeg",
                "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg",
                "https://images.pexels.com/photos/5025653/pexels-photo-5025653.jpeg",
                "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg",
                "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg",
              ];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary-400 hover:shadow-lg transition-all"
                >
                  <div className="h-40 bg-gray-200 overflow-hidden">
                    <img
                      src={images[index % images.length]}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6 border-t border-b border-border py-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg font-bold text-primary">{service.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose ShipCo?
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                With 25+ years of experience, we understand the complexities of global
                logistics and provide tailored solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Advanced Technology</h3>
              <p className="text-muted-foreground">
                Our cutting-edge tracking system and logistics optimization platform
                ensures efficiency at every step.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                Get the best rates without compromising on quality. Transparent pricing
                with no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is available round the clock to assist with
                any questions or concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Global Network</h3>
              <p className="text-muted-foreground">
                Access to 195+ countries with local expertise and partnerships in every
                major market.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing our carbon footprint with eco-friendly
                shipping options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the service that fits your needs. All prices include tracking and
              insurance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-100 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Service Type
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Delivery Time
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Price Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-primary-50">
                    <td className="px-6 py-4">Express Delivery</td>
                    <td className="px-6 py-4">1 day</td>
                    <td className="px-6 py-4 font-semibold text-primary">From $25</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-primary-50">
                    <td className="px-6 py-4">Air Freight</td>
                    <td className="px-6 py-4">2-5 days</td>
                    <td className="px-6 py-4 font-semibold text-primary">From $45/kg</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-primary-50">
                    <td className="px-6 py-4">Road Freight</td>
                    <td className="px-6 py-4">1-2 weeks</td>
                    <td className="px-6 py-4 font-semibold text-primary">From $100</td>
                  </tr>
                  <tr className="hover:bg-primary-50">
                    <td className="px-6 py-4">Sea Cargo</td>
                    <td className="px-6 py-4">2-4 weeks</td>
                    <td className="px-6 py-4 font-semibold text-primary">From $200/ton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
