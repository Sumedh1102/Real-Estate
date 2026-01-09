import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = ({ property }) => {
  const imageUrl = property?.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000";
  const title = property ? `${property.description} ${property.location}` : "5-Bedroom Single-Family Home for Sale – Upper East Side, New York";
  const address = property?.address || "985 Park Ave, New York, NY 10028";

  return (
    <div className="relative w-full min-h-[90vh] flex items-end">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Fade Overlay */}
      <div className="relative w-full h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F5EE] to-[#F7F5EE]" />
        <div className="relative h-full flex items-center justify-center px-6 md:px-16">
          <div className="max-w-6xl w-full text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight text-[#1A1A1A] mb-6">
              {title}
            </h1>
            
            {/* Address with Icon */}
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <p className="text-base md:text-lg">
                {address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;