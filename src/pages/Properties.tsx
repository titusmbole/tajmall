import React, { useState } from 'react';
import { Search, Filter, Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertiesProps {
  onPageChange: (page: string) => void;
}

const Properties: React.FC<PropertiesProps> = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Oceanview Penthouse',
      location: 'Malibu, CA',
      price: 'Ksh 12,500,000',
      type: 'Penthouse',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 4,
      bathrooms: 5,
      sqft: '4,200',
      amenities: ['Ocean View', 'Private Pool', 'Wine Cellar', 'Smart Home']
    },
    {
      id: 2,
      title: 'Modern Villa Estate',
      location: 'Beverly Hills, CA',
      price: 'Ksh 8,750,000',
      type: 'Villa',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 6,
      bathrooms: 7,
      sqft: '6,800',
      amenities: ['Guest House', 'Tennis Court', 'Home Theater', 'Gym']
    },
    {
      id: 3,
      title: 'Luxury Townhouse',
      location: 'Manhattan, NY',
      price: 'Ksh 5,200,000',
      type: 'Townhouse',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 3,
      bathrooms: 4,
      sqft: '3,500',
      amenities: ['Rooftop Terrace', 'Elevator', 'Fireplace', 'Chef\'s Kitchen']
    },
    {
      id: 4,
      title: 'Skyline Apartment',
      location: 'Chicago, IL',
      price: 'Ksh 3,800,000',
      type: 'Apartment',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 3,
      bathrooms: 3,
      sqft: '2,900',
      amenities: ['City View', 'Concierge', 'Spa', 'Valet']
    },
    {
      id: 5,
      title: 'Waterfront Mansion',
      location: 'Miami, FL',
      price: 'Ksh 15,200,000',
      type: 'Mansion',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 8,
      bathrooms: 10,
      sqft: '12,000',
      amenities: ['Private Beach', 'Yacht Dock', 'Pool House', 'Security']
    },
    {
      id: 6,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: 'Ksh 6,900,000',
      type: 'Chalet',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      bedrooms: 5,
      bathrooms: 6,
      sqft: '5,400',
      amenities: ['Ski Access', 'Hot Tub', 'Mountain View', 'Fireplace']
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || property.type.toLowerCase() === filterType.toLowerCase();
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = parseInt(property.price.replace(/[$ ,]/g, ''));
      switch (priceRange) {
        case 'under5m':
          matchesPrice = price < 5000000;
          break;
        case '5m-10m':
          matchesPrice = price >= 5000000 && price <= 10000000;
          break;
        case 'over10m':
          matchesPrice = price > 10000000;
          break;
      }
    }
    
    return matchesSearch && matchesType && matchesPrice;
  });

  const handlePropertyClick = () => {
    onPageChange('property-view');
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Featured Properties</h1>
          <p className="text-xl text-gray-300">
            Discover our exclusive collection of luxury properties
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
              <option value="apartment">Apartment</option>
              <option value="mansion">Mansion</option>
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under5m">Under $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="over10m">Over $10M</option>
            </select>

            <div className="text-gray-600">
              {filteredProperties.length} properties found
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors cursor-pointer">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full font-bold">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft} ft²
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={handlePropertyClick}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Properties Found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;