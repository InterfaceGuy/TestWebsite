import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
           {/* Placeholder for image/icons */}
           <div className="w-full max-w-md h-64 bg-gray-700 flex items-center justify-center">
             {/* Image/Icons go here */}
           </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Vision</h2>
          <p className="text-lg mb-8">
            We believe that it is possible to build a more supportive, inclusive and intercultural world by connecting individuals from different cultures in volunteering and international mobility activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
