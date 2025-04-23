import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#334430] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About us:</h2>
          <p className="text-lg mb-8">
            Youth in the World is run by a non-profit association –The World is Us, with different initiatives aimed at promoting the education of children, young people, parents and the general public, with the purpose of promoting the Human Being as a Whole.
          </p>
          <button className="border border-white text-white font-bold py-3 px-8 hover:bg-white hover:text-black transition-colors duration-300">
            Know more
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Placeholder for image/logo */}
          <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
            {/* Image/Logo goes here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
