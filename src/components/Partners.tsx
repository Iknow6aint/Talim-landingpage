import React from 'react';

const TrustBadgeSection = () => {
  return (
    <div className="w-full max-w-6xl mb-20 mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-xl font-bold text-center mb-12 text-gray-800">
        TALIM is trusted by schools worldwide to simplify management and improve learning.
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex items-center justify-center p-6 bg-white rounded-2xl transition-shadow"
          >
            <img 
              src={`/s${item}.jpeg`} 
              alt={`School ${item}`}
              className="max-w-full max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadgeSection;