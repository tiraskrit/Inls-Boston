// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gray-900 h-64 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1920/600')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">About INLS Boston Chapter</h1>
              <p className="text-xl">Our mission, vision, and history</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <svg className="w-10 h-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  The Boston Chapter of the International Nepali Literary Society is dedicated to preserving, promoting, and advancing Nepali literature, language, and culture in the New England region. We aim to create a vibrant community of writers, readers, and enthusiasts who value Nepali literary heritage.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <svg className="w-10 h-10 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where Nepali literature flourishes beyond geographical boundaries, where writers find platforms to showcase their talent, and where new generations connect with their literary roots while contributing to the global literary landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Our History</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-red-700 border-4 border-white shadow"></div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">2010</h3>
                      <h4 className="text-lg font-semibold text-red-700 mb-2">Founding</h4>
                      <p className="text-gray-600">
                        INLS Boston Chapter was founded by a group of Nepali literature enthusiasts living in the Boston area, with the goal of creating a community for literary discussions and cultural exchange.
                      </p>
                    </div>
                    <div className="md:w-1/2 pl-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">2015</h3>
                      <h4 className="text-lg font-semibold text-red-700 mb-2">First Major Event</h4>
                      <p className="text-gray-600">
                        The chapter organized its first major event, a literary festival that brought together writers, poets, and literature enthusiasts from across the New England region.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-red-700 border-4 border-white shadow"></div>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 pr-8 md:text-right mb-8 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">2020</h3>
                      <h4 className="text-lg font-semibold text-red-700 mb-2">Decade of Excellence</h4>
                      <p className="text-gray-600">
                        Celebrating a decade of promoting Nepali literature, the chapter hosted a series of events and workshops, highlighting the achievements and contributions of its members.
                      </p>
                    </div>
                    <div className="md:w-1/2 pl-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">2023</h3>
                      <h4 className="text-lg font-semibold text-red-700 mb-2">Global Outreach</h4>
                      <p className="text-gray-600">
                        Expanding its reach, the chapter launched online platforms and virtual events, connecting Nepali literature enthusiasts from around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;