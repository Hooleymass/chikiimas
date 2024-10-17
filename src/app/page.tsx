'use client'
import React from 'react';
import "./home/style.scss";
import HeroBanner from "./home/heroBanner/HeroBanner";
import Trending from './home/trending/Trending';
import Popular from './home/popular/Popular';
import TopRated from './home/topRated/TopRated';
import Banner from '@/components/Ads/Banner';
import BannerMe from '@/components/Ads.me/Banner';

const Home = () => {
  return (
    <div className='homePage overflow-hidden'>
      {/* <HeroBanner/> */}
      <section className="relative h-[80vh] overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to ChikiiMass</h1>
            <p className="text-lg md:text-xl">Discover the latest movies, TV shows, Anime and Manga</p>
          </div>
        </div>
      </section>
      <section className='flex w-full justify-center items-center pt-2'>
        <Banner adKey='b2f03a02ed04a36818f1f04eb3e333b9' height={90} width={728} />
      </section>

      <Trending />
      <Popular />
      <TopRated />
      <section className="flex w-full justify-center items-center pt-2">
        <BannerMe adKey='b04a0509d7bd6b6673a298c37054be21' height={90} width={728} />
      </section>
    </div>
  )
}

export default Home