'use client'
import React from 'react';
import "./home/style.scss";
import HeroBanner from "./home/heroBanner/HeroBanner";
import Trending from './home/trending/Trending';
import Popular from './home/popular/Popular';
import TopRated from './home/topRated/TopRated';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home