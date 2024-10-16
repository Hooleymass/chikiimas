import React from 'react';

const Manga = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-6xl font-black mb-4">Manga Haven</h1>
      <p className="text-xl font-medium text-gray-700 mb-8">Your favorite manga collection is coming soon!</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-24 h-32 bg-gray-200 border-2 border-dashed border-gray-400"></div>
        <div className="w-24 h-32 bg-gray-200 border-2 border-dashed border-gray-400"></div>
        <div className="w-24 h-32 bg-gray-200 border-2 border-dashed border-gray-400"></div>
      </div>
      <p className="text-lg text-gray-600 mt-8">Get ready to dive into the world of manga soon!</p>
    </div>
  );
};

export default Manga;
