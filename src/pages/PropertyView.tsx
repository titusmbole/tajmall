import React from 'react';
import { ArrowLeft, Bed, Bath, Square, MapPin, Car, Wifi, Dumbbell, Shield, Phone, Mail, Heart, Share2, Calendar, Eye } from 'lucide-react';

interface PropertyViewProps {
  onPageChange: (page: string) => void;
  onContactWithProperty?: (propertyTitle: string) => void;
}

const PropertyView: React.FC<PropertyViewProps> = ({ onPageChange, onContactWithProperty }) => {
  // Sample property data - in a real app, this would come from props or API
  const property = {
    id: 1,
    title: 'Oceanview Penthouse',
    location: 'Malibu, CA',
    price: '$12,500,000',
    type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 5,
    sqft: '4,200',
    parking: 3,
    yearBuilt: 2022,
    description: 'Experience unparalleled luxury in this stunning oceanview penthouse. This architectural masterpiece features floor-to-ceiling windows, premium finishes, and breathtaking panoramic views of the Pacific Ocean. Every detail has been meticulously crafted to provide the ultimate in sophisticated living.',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1'
    ],
    amenities: [
      { icon: Wifi, name: 'High-Speed Internet' },
      { icon: Car, name: 'Private Garage' },
      { icon: Dumbbell, name: 'Private Gym' },
      { icon: Shield, name: '24/7 Security' }
    ],
    features: [
      'Ocean Views',
      'Private Pool',
      'Wine Cellar',
      'Smart Home Technology',
      'Chef\'s Kitchen',
      'Master Suite',
      'Walk-in Closets',
      'Marble Bathrooms',
      'Hardwood Floors',
      'Central Air',
      'Fireplace',
      'Balcony/Terrace'
    ],
    agent: {
      name: 'Sarah Johnson',
      title: 'Senior Property Consultant',
      phone: '0725825000',
      email: 'info.tajmallltd@gmail.com',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleEnquireMore = () => {
    if (onContactWithProperty) {
      onContactWithProperty(property.title);
    }
    onPageChange('contact');
  };

  return (
    <div className="pt-16">
      {/* Header with Back Button */}
      <section className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onPageChange('properties')}
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Properties
          </button>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-3">
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                  {property.type}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full">
                  <Eye className="h-4 w-4 inline mr-2" />
                  {currentImageIndex + 1} of {property.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="space-y-4">
              {property.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-full h-24 lg:h-32 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
              {property.images.length > 4 && (
                <div className="relative w-full h-24 lg:h-32 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">+{property.images.length - 4} more</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Info */}
              <div className="bg-white rounded-2xl p-8">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-500">{property.price}</div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <Bed className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.sqft}</div>
                    <div className="text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <Car className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{property.parking}</div>
                    <div className="text-gray-600">Parking</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{property.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <span className="text-gray-700 font-medium">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Agent */}
              <div className="bg-white rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-gray-900">{property.agent.name}</h4>
                  <p className="text-gray-600">{property.agent.title}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">{property.agent.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleEnquireMore}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 mb-4"
                >
                  Enquire More
                </button>

                <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                  Schedule Viewing
                </button>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Property Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="text-gray-900 font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built:</span>
                    <span className="text-gray-900 font-medium">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="text-gray-900 font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="text-gray-900 font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Square Feet:</span>
                    <span className="text-gray-900 font-medium">{property.sqft}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Parking:</span>
                    <span className="text-gray-900 font-medium">{property.parking} spaces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/157146${item}/pexels-photo-157146${item}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1`}
                    alt={`Similar property ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    ${(8 + item).toFixed(1)}M
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Luxury Property {item}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Premium Location</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {3 + item}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {2 + item}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {2500 + item * 500}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyView;