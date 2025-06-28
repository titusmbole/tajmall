import React, { useState } from 'react';
import { Award, Calendar, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioProjects = [
    {
      id: 1,
      title: 'Marina Vista Towers',
      location: 'Dubai, UAE',
      completionYear: '2023',
      category: 'High-Rise',
      units: 180,
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Twin 45-story luxury towers offering panoramic marina views with world-class amenities.',
      awards: ['Best Luxury Development 2023', 'Architectural Excellence Award'],
      testimonial: {
        text: 'Living in Marina Vista has exceeded all our expectations. The attention to detail is remarkable.',
        author: 'Sarah Al-Rashid',
        role: 'Resident'
      }
    },
    {
      id: 2,
      title: 'Sunset Ridge Estates',
      location: 'Beverly Hills, CA',
      completionYear: '2022',
      category: 'Villas',
      units: 24,
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Exclusive gated community featuring custom-designed luxury villas with private pools.',
      awards: ['Community Development Award', 'Sustainable Design Recognition'],
      testimonial: {
        text: 'The craftsmanship and design philosophy here is simply outstanding. Our dream home realized.',
        author: 'Michael Thompson',
        role: 'Homeowner'
      }
    },
    {
      id: 3,
      title: 'Metropolitan Lofts',
      location: 'Manhattan, NY',
      completionYear: '2022',
      category: 'Apartments',
      units: 120,
      images: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Industrial chic lofts in a converted historic building with modern luxury finishes.',
      awards: ['Historic Preservation Award', 'Interior Design Excellence'],
      testimonial: {
        text: 'Perfect blend of historic charm and modern luxury. The best of both worlds.',
        author: 'Emma Rodriguez',
        role: 'Resident'
      }
    },
    {
      id: 4,
      title: 'Alpine Retreat Resort',
      location: 'Aspen, CO',
      completionYear: '2021',
      category: 'Resort',
      units: 48,
      images: [
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Luxury ski resort featuring timber-frame chalets with direct slope access.',
      awards: ['Resort Development Award', 'Environmental Excellence'],
      testimonial: {
        text: 'An extraordinary retreat that perfectly captures the essence of mountain luxury.',
        author: 'David Kim',
        role: 'Property Owner'
      }
    },
    {
      id: 5,
      title: 'Oceanfront Paradise',
      location: 'Miami, FL',
      completionYear: '2021',
      category: 'Beachfront',
      units: 36,
      images: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Ultra-luxury beachfront condominiums with private beach access and yacht marina.',
      awards: ['Coastal Development Award', 'Luxury Living Recognition'],
      testimonial: {
        text: 'Waking up to ocean views every day feels like a permanent vacation. Pure luxury.',
        author: 'Isabella Martinez',
        role: 'Resident'
      }
    },
    {
      id: 6,
      title: 'Garden District Townhomes',
      location: 'New Orleans, LA',
      completionYear: '2020',
      category: 'Townhomes',
      units: 32,
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ],
      description: 'Historic-inspired townhomes blending traditional Southern architecture with modern amenities.',
      awards: ['Heritage Design Award', 'Neighborhood Enhancement'],
      testimonial: {
        text: 'Beautiful homes that honor the neighborhood\'s heritage while providing modern comfort.',
        author: 'Robert Johnson',
        role: 'Homeowner'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'High-Rise', label: 'High-Rise' },
    { id: 'Villas', label: 'Villas' },
    { id: 'Apartments', label: 'Apartments' },
    // { id: 'Resort', label: 'Resort' },
    // { id: 'Beachfront', label: 'Beachfront' },
    { id: 'Townhomes', label: 'Townhomes' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const nextImage = (project: any) => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (project: any) => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our completed luxury developments across prime global locations. 
              Each project represents our commitment to exceptional design and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">12</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">2,500+</div>
              <div className="text-gray-600">Happy Residents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Gallery */}
                  <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(project)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => nextImage(project)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex(imgIndex)}
                              className={`w-2 h-2 rounded-full ${
                                imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute top-6 left-6 bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-lg">{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span className="text-lg">Completed {project.completionYear}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="text-lg">{project.units} Units</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                    {/* Awards */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition:</h4>
                      <div className="space-y-2">
                        {project.awards.map((award, awardIndex) => (
                          <div key={awardIndex} className="flex items-center text-yellow-600">
                            <Award className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <p className="text-gray-700 italic mb-4">"{project.testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-gray-600 text-sm">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;