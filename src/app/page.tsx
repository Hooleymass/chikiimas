'use client'
import React from 'react';
import "./home/style.scss";
import HeroBanner from "./home/heroBanner/HeroBanner";
import Trending from './home/trending/Trending';
import Popular from './home/popular/Popular';
import TopRated from './home/topRated/TopRated';
import Banner from '@/components/Ads/Banner';

const Home = () => {
  return (
    <div className='homePage'>
      {/* <HeroBanner/> */}
      <section className='flex w-full justify-center items-center pt-20'>
        <Banner adKey='b2f03a02ed04a36818f1f04eb3e333b9' height={90} width={728} />
      </section>

      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home