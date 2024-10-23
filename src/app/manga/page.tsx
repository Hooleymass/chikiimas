import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'Manga Haven - Your Favorite Manga Collection',
  description: 'Explore a vast collection of your favorite manga. Stay tuned for the latest updates and releases!',
  keywords: ['manga', 'manga collection', 'read manga', 'manga updates', 'anime', 'otaku'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://chikiimass.me/manga-haven',
    title: 'Manga Haven - Your Favorite Manga Collection',
    description: 'Your favorite manga collection is coming soon! Get ready to explore the world of manga.',
    images: [
      {
        url: '/images/manga-haven-banner.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manga Haven - Your Favorite Manga Collection',
    description: 'Explore a vast collection of your favorite manga. Stay tuned for the latest updates and releases!',
    images: [
      '/images/manga-haven-banner.jpg',
    ],
  },
};

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
