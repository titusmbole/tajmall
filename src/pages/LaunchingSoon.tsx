import React, { useState } from 'react';
import { Calendar, MapPin, Mail, CheckCircle, ArrowRight, Building2, Sparkles } from 'lucide-react';

const LaunchingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [registeredProjects, setRegisteredProjects] = useState<number[]>([]);

  const upcomingProjects = [
    {
      id: 1,
      title: 'Celestial Heights',
      location: 'Beverly Hills, CA',
      launchDate: 'Q2 2025',
      priceRange: '$3.5M - $8.2M',
      type: 'Luxury Condominiums',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Rooftop Pool', 'Concierge Service', 'Smart Home Technology', 'Panoramic Views'],
      description: 'An exclusive collection of 42 luxury condominiums featuring floor-to-ceiling windows and premium finishes.',
      status: 'Pre-Launch'
    },
    {
      id: 2,
      title: 'Oceanside Sanctuary',
      location: 'Malibu, CA',
      launchDate: 'Q3 2025',
      priceRange: '$12M - $25M',
      type: 'Beachfront Villas',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Private Beach Access', 'Infinity Pool', 'Wine Cellar', 'Guest House'],
      description: 'Limited collection of 8 ultra-luxury beachfront villas with unobstructed ocean views.',
      status: 'Coming Soon'
    },
    {
      id: 3,
      title: 'Urban Pinnacle',
      location: 'Manhattan, NY',
      launchDate: 'Q4 2025',
      priceRange: '$2.8M - $15M',
      type: 'High-Rise Residences',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Sky Lounge', 'Fitness Center', 'Valet Parking', 'Business Center'],
      description: 'A 68-story tower offering sophisticated city living with world-class amenities.',
      status: 'In Development'
    },
    {
      id: 4,
      title: 'Mountain Serenity',
      location: 'Aspen, CO',
      launchDate: 'Q1 2026',
      priceRange: '$4.5M - $12M',
      type: 'Alpine Chalets',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      features: ['Ski-in/Ski-out', 'Hot Tub', 'Fireplace', 'Mountain Views'],
      description: 'Exclusive alpine chalets offering direct ski access and breathtaking mountain vistas.',
      status: 'Planning Phase'
    }
  ];

  const handleRegisterInterest = (projectId: number) => {
    if (email) {
      setRegisteredProjects([...registeredProjects, projectId]);
      setEmail('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pre-Launch': return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon': return 'bg-blue-100 text-blue-800';
      case 'In Development': return 'bg-green-100 text-green-800';
      case 'Planning Phase': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Launching Soon</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be the first to discover our upcoming luxury developments. 
              Register your interest for exclusive early access and special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {upcomingProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 bg-black/80 text-white px-4 py-2 rounded-full font-bold">
                      {project.priceRange}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-lg">{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="text-lg">Expected Launch: {project.launchDate}</span>
                      </div>
                      <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg inline-block mb-4">
                        <Building2 className="h-4 w-4 inline mr-2" />
                        {project.type}
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Registration */}
                    <div className="border-t pt-6">
                      {registeredProjects.includes(project.id) ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center text-green-800">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span className="font-semibold">Interest Registered Successfully!</span>
                          </div>
                          <p className="text-green-700 text-sm mt-1">
                            We'll notify you when this project becomes available.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Register Your Interest</h4>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                            <button
                              onClick={() => handleRegisterInterest(project.id)}
                              disabled={!email}
                              className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                            >
                              Register Interest
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed About All New Launches
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Subscribe to our newsletter for exclusive updates on new projects, 
            special events, and early access opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaunchingSoon;