import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

interface ContactProps {
  initialMessage?: string;
  onMessageClear?: () => void;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '', onMessageClear }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: initialMessage
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      if (onMessageClear) {
        onMessageClear();
      }
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0725825000'],
      description: 'Mon-Fri 9AM-6PM EAT'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info.tajmallltd@gmail.com'],
      description: '24/7 Response Time'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Taj Tower, Nairobi', 'Kenya'],
      description: 'Visit by Appointment'
    }
  ];

  const offices = [
    {
      city: 'Nairobi',
      address: 'Taj Tower, Nairobi Kenya',
      phone: '0725825000',
      email: 'info.tajmallltd@gmail.com'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to find your dream luxury property? Our expert team is here to assist you 
              every step of the way. Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. Our team will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="investment">Investment Opportunities</option>
                          <option value="consultation">Schedule Consultation</option>
                          <option value="property-inquiry">Property Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tell us more about how we can help you..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            {/* <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-500 mr-3" />
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900">By Appointment</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Instagram className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Facebook className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Youtube className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                </div>
              </div>
            </div> */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    
                    // Helper function to handle clicks based on contact type
                    const handleContactClick = (info, detail) => {
                      if (info.title.toLowerCase().includes('phone') || info.title.toLowerCase().includes('call')) {
                        // Remove any non-numeric characters except + for international numbers
                        const phoneNumber = detail.replace(/[^\d+]/g, '');
                        window.open(`tel:${phoneNumber}`, '_self');
                      } else if (info.title.toLowerCase().includes('email')) {
                        window.open(`mailto:${detail}`, '_self');
                      } else if (info.title.toLowerCase().includes('address') || info.title.toLowerCase().includes('location')) {
                        // Encode the address for Google Maps
                        const encodedAddress = encodeURIComponent(detail);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
                      }
                    };

                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p 
                              key={detailIndex} 
                              className="text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-200"
                              onClick={() => handleContactClick(info, detail)}
                              title={`Click to ${
                                info.title.toLowerCase().includes('phone') || info.title.toLowerCase().includes('call') 
                                  ? 'call' 
                                  : info.title.toLowerCase().includes('email') 
                                    ? 'send email' 
                                    : 'view on map'
                              }`}
                            >
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-500 mr-3" />
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-900">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Instagram className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Facebook className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Youtube className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-lg transition-colors">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-orange-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Office</h2>
            <p className="text-xl text-gray-600">
              Visit us at our luxury showroom in Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in Nairobi, Kenya
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://maps.app.goo.gl/sJTkxgLsvgHE91D16"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TajMall Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;