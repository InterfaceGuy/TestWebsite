import React from 'react';

const RecentArticles: React.FC = () => {
  return (
    <section className="bg-[#334430] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Recent Articles</h2>
        <p className="text-lg mb-12">Don't miss our latest publications:</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Placeholder Article Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-black rounded-lg overflow-hidden">
            {/* Placeholder for image */}
            <div className="w-full h-48 bg-gray-700"></div>
            <div className="p-6 text-left">
              <p className="text-sm text-gray-400 mb-2">European Solidarity Corps , International Volunteering</p>
              <h3 className="text-xl font-semibold mb-2">International Volunteer Sharing at OMSN</h3>
              <p className="text-sm text-gray-400">December 21, 2024</p>
            </div>
          </div>
           {/* Placeholder Article Card 2 */}
           <div className="w-full sm:w-1/2 lg:w-1/3 bg-black rounded-lg overflow-hidden">
            {/* Placeholder for image */}
            <div className="w-full h-48 bg-gray-700"></div>
            <div className="p-6 text-left">
              <p className="text-sm text-gray-400 mb-2">European Solidarity Corps , Exhibition , Personal Project , International Volunteering</p>
              <h3 className="text-xl font-semibold mb-2">Timeless Souls Exhibition</h3>
              <p className="text-sm text-gray-400">December 20, 2024</p>
            </div>
          </div>
           {/* Placeholder Article Card 3 */}
           <div className="w-full sm:w-1/2 lg:w-1/3 bg-black rounded-lg overflow-hidden">
            {/* Placeholder for image */}
            <div className="w-full h-48 bg-gray-700"></div>
            <div className="p-6 text-left">
              <p className="text-sm text-gray-400 mb-2">European Solidarity Corps , Exhibition , Personal Project , International Volunteering</p>
              <h3 className="text-xl font-semibold mb-2">The Awakening of Creativity: An Artistic Journey through Fernando Pessoa.</h3>
              <p className="text-sm text-gray-400">December 18, 2024</p>
            </div>
          </div>
        </div>
        <button className="mt-8 border border-white text-white font-bold py-3 px-8 hover:bg-white hover:text-black transition-colors duration-300">
            Explore all
          </button>
      </div>
    </section>
  );
};

export default RecentArticles;
