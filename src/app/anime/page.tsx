import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Anime World - Explore a New Universe of Anime Adventures',
  description: 'Dive into the Anime World! Explore new anime series, characters, and universes. Stay tuned for exciting updates and epic adventures.',
  keywords: ['anime', 'anime universe', 'watch anime', 'new anime', 'manga', 'otaku'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://chikiimass.me/anime-world',
    title: 'Anime World - Explore a New Universe of Anime Adventures',
    description: 'A whole new anime universe is coming soon! Stay tuned for epic adventures.',
    images: [
      {
        url: '/images/anime-world-banner.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime World - Explore a New Universe of Anime Adventures',
    description: 'A whole new anime universe is coming soon! Stay tuned for epic adventures.',
    images: [
      '/images/anime-world-banner.jpg',
    ],
  },
};

const Anime = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 p-6">
      <h1 className="text-6xl font-extrabold text-indigo-600 mb-4 animate-pulse">Anime World</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-4">A whole new anime universe is coming soon!</p>
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <p className="text-lg text-gray-600 mt-8">Stay tuned for epic adventures and exciting updates!</p>
    </div>
  );
};

export default Anime;
