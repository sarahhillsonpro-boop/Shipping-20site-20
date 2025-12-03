import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Plane,
  Ship,
  Truck,
  Zap,
  Package,
  Globe,
  Star,
  ArrowRight,
  Check,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air shipping for urgent deliveries worldwide",
    },
    {
      icon: Ship,
      title: "Sea Cargo",
      description: "Cost-effective ocean shipping for large volume shipments",
    },
    {
      icon: Truck,
      title: "Road Freight",
      description: "Flexible ground transportation across continents",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Next-day delivery for time-sensitive packages",
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage and inventory management solutions",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Shipping to 195+ countries with local expertise",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechVenture Inc.",
      text: "ShipCo transformed our logistics operations. Their tracking system is incredibly accurate and their customer service is exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Global Retail Co.",
      text: "We've been using ShipCo for 3 years. The reliability and cost-efficiency have been outstanding for our international shipments.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Supply Chain Director",
      company: "EuroTrade Ltd.",
      text: "Excellent service from pickup to delivery. Their real-time tracking and professional handling set them apart from competitors.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Know exactly where your shipment is at any moment",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your packages are protected with comprehensive insurance",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.2% on-time delivery rate guaranteed",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden pt-0">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-sm font-medium">Global Shipping Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Fast, Secure & Global Shipping Services
              </h1>

              <p className="text-lg text-white/90 mb-8 max-w-lg">
                Connect with the world's leading logistics platform. Track packages in real-time,
                get instant updates, and enjoy reliable delivery to 195+ countries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/tracking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  Track Shipment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                >
                  Create Shipment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold">195+</div>
                  <div className="text-sm text-white/80">Countries Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50M+</div>
                  <div className="text-sm text-white/80">Packages Shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.2%</div>
                  <div className="text-sm text-white/80">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/12820603/pexels-photo-12820603.jpeg"
                alt="Modern warehouse facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive shipping solutions tailored to meet your specific
              logistics needs and business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-border hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shipping Operations
            </h2>
            <p className="text-lg text-muted-foreground">
              View our modern fleet and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/20016279/pexels-photo-20016279.jpeg"
                alt="Air Freight - Cargo airplane"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Air Freight</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2226457/pexels-photo-2226457.jpeg"
                alt="Sea Cargo - Container port"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Sea Cargo</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
                alt="Road Freight - Delivery truck"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Road Freight</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg"
                alt="Package tracking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Real-Time Tracking</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
                alt="Warehouse management"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Warehousing</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 hover:shadow-lg transition-shadow group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg"
                alt="Express delivery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold">Express Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ship?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust ShipCo for their logistics
            needs. Get started today and enjoy premium shipping solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Create Your First Shipment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              About ShipCo
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ShipCo is a leading global logistics company dedicated to providing
              fast, secure, and reliable shipping services to businesses of all
              sizes. With over 25 years of industry experience, we've built a
              reputation for excellence in logistics innovation and customer
              service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">195+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
