import React from 'react'
import Recommendation from './Recommendations'
import Native from "@/components/Ads/Native";
import NativeMe from '@/components/Ads.me/Native';

const sidebar = ({ mediaType, id }) => {
  return (
    <div>
      <h1 className='font-bold text-xl mb-4'>Related</h1>
      <NativeMe />
      <Recommendation mediaType={mediaType} id={id} />
      <Native />
    </div>
  )
}

export default sidebar