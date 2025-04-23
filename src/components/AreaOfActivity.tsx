import React from 'react';

const AreaOfActivity: React.FC = () => {
  return (
    <section className="bg-[#22331f] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Area of activity:</h2>
        <p className="text-lg mb-12">Youth in the World focuses on different areas of action:</p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            {/* Placeholder for icon/image */}
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              {/* Icon/Image goes here */}
            </div>
            <h3 className="text-xl font-semibold">Volunteering European Solidarity Corps</h3>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            {/* Placeholder for icon/image */}
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              {/* Icon/Image goes here */}
            </div>
            <h3 className="text-xl font-semibold">Youth Exchanges</h3>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            {/* Placeholder for icon/image */}
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              {/* Icon/Image goes here */}
            </div>
            <h3 className="text-xl font-semibold">Youth Technicians Mobility</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaOfActivity;
