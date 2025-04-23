import React from 'react';

const Hero: React.FC = () => {
  // Using a placeholder Unsplash image URL similar to the original
  const imageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Youth In The World
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          We share and promote volunteering and international mobility activities that promote learning and social transformation
        </p>
        <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300">
          Opportunities
        </button>
      </div>
    </section>
  );
};

export default Hero;
