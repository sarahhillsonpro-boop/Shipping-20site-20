import { Layout } from "@/components/Layout";
import { Users, Target, Eye, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every shipment and interaction",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "On-time delivery and consistent service are our hallmarks",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We work together to solve the toughest logistics challenges",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest pricing build lasting partnerships",
    },
  ];

  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "https://images.pexels.com/photos/34987129/pexels-photo-34987129.jpeg" },
    { name: "Sarah Johnson", role: "Chief Operations Officer", image: "https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg" },
    { name: "Michael Chen", role: "Head of Technology", image: "https://images.pexels.com/photos/5025653/pexels-photo-5025653.jpeg" },
    { name: "Emma Rodriguez", role: "Director of Customer Service", image: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About ShipCo</h1>
          <p className="text-white/90">Learn more about our mission and vision</p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ShipCo was founded in 1999 with a simple mission: to revolutionize the
                  global logistics industry through innovation and customer-centric service.
                  What started as a small local courier service has grown into one of the
                  world's leading shipping and logistics companies.
                </p>
                <p>
                  Over the past 25 years, we've expanded our operations to 195+ countries,
                  invested in cutting-edge technology, and built a team of dedicated
                  professionals committed to excellence. Our success is built on the trust
                  of thousands of businesses that rely on us every single day.
                </p>
                <p>
                  Today, we handle over 50 million shipments annually, maintaining a 99.2%
                  on-time delivery rate. We continue to innovate with real-time tracking,
                  AI-powered logistics optimization, and sustainable shipping practices.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/12820603/pexels-photo-12820603.jpeg"
                alt="Modern warehouse facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide fast, secure, and reliable shipping solutions that empower
                  businesses to reach customers worldwide.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative logistics partner, setting industry
                  standards for sustainability and customer service.
                </p>
              </div>

              {/* Commitment */}
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Commitment</h3>
                <p className="text-muted-foreground">
                  To continuously invest in technology, people, and sustainability to
                  deliver exceptional value to our customers and communities.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 bg-white p-6 rounded-lg border border-border"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-border hover:border-primary-400 transition-colors"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white text-center">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Global Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">195+</div>
              <p className="text-muted-foreground">Countries & Regions</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Distribution Centers</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <p className="text-muted-foreground">Packages Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Business Clients</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
