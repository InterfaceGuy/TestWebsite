import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#22331f] text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Want to know more? Subscribe to the newsletter:</h2>
        <div className="flex justify-center">
          <button className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
