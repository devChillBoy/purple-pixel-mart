
import React from 'react';
import { Users, Award, Truck, HeadphonesIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '500K+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Truck, label: 'Orders Delivered', value: '1M+' },
    { icon: HeadphonesIcon, label: 'Support Rating', value: '4.9/5' }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: '👩‍💼' },
    { name: 'Mike Chen', role: 'CTO', image: '👨‍💻' },
    { name: 'Emily Davis', role: 'Head of Marketing', image: '👩‍💼' },
    { name: 'David Wilson', role: 'Customer Success', image: '👨‍💼' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-purple-blue text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigiShop</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're passionate about bringing you the best products at unbeatable prices, 
            with exceptional customer service that makes shopping a joy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2014, DigiShop started as a small online retailer with a big dream: 
                to make quality products accessible to everyone, everywhere. What began as a 
                passion project has grown into one of the most trusted e-commerce platforms.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been driven by our commitment to customer satisfaction, 
                innovation, and building lasting relationships with both our customers and partners.
              </p>
              <p className="text-gray-600">
                Today, we serve over 500,000 happy customers worldwide and continue to expand 
                our product range while maintaining the personal touch that sets us apart.
              </p>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="text-8xl">🏪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="gradient-purple-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We carefully curate every product to ensure it meets our high standards 
                of quality and value.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Customer Love</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Their satisfaction 
                is our top priority.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly innovate to improve your shopping experience and stay 
                ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-purple-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
