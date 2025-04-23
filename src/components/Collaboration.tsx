import React from 'react';

const Collaboration: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">In collaboration with:</h2>
        {/* Placeholder for logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 1</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 2</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 3</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 4</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 5</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 6</div>
          <div className="w-32 h-20 bg-gray-700 flex items-center justify-center">Logo 7</div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
