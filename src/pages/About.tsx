import React from 'react';
import { Award, Users, Target, Heart, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Alexandra Sterling',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: '15+ years in luxury real estate development and investment.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Development',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Award-winning architect specializing in luxury residential projects.'
    },
    {
      name: 'Sophia Chen',
      role: 'Director of Sales',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Top-performing sales executive with expertise in high-end properties.'
    },
    {
      name: 'James Thompson',
      role: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      bio: 'Financial strategist with deep expertise in real estate investment.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, from design to delivery, ensuring exceptional quality in all our projects.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparency and honesty guide our relationships with clients, partners, and communities.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace cutting-edge design and technology to create homes that define the future of luxury living.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through reliable service and consistent delivery on our promises.'
    }
  ];

  const milestones = [
    { year: '2010', achievement: 'Company founded with first luxury development in Beverly Hills' },
    { year: '2013', achievement: 'Expanded to international markets, first project in Monaco' },
    { year: '2016', achievement: 'Awarded "Developer of the Year" by Luxury Real Estate Magazine' },
    { year: '2019', achievement: 'Reached milestone of $1 billion in property sales' },
    { year: '2022', achievement: 'Launched sustainable luxury development program' },
    { year: '2024', achievement: 'Opened offices in Dubai and Singapore' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LuxuryEstate</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafting exceptional luxury properties for over 15 years, 
            we transform visions into extraordinary living experiences.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Founded in 2010 with a vision to redefine luxury living, LuxuryEstate has grown 
                  from a boutique development firm to a globally recognized leader in premium real estate.
                </p>
                <p className="mb-6">
                  Our journey began with a simple belief: every home should be a masterpiece. 
                  This philosophy has guided us through over 2,500 successful projects across 
                  three continents, creating homes that don't just shelter, but inspire.
                </p>
                <p>
                  Today, we continue to push boundaries in luxury development, integrating 
                  sustainable practices with timeless design to create properties that will 
                  remain exceptional for generations to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Luxury development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 rounded-2xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <Target className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To create exceptional luxury properties that elevate the human experience, 
                combining innovative design with uncompromising quality to deliver homes 
                that inspire and endure.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the world's most trusted luxury real estate developer, setting new 
                standards for elegance, sustainability, and innovation in every market we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-yellow-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-100 transition-colors">
                    <Icon className="h-10 w-10 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Industry leaders dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped our success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.achievement}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;