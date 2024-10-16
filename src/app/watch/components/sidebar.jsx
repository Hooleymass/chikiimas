import React from 'react'
import Recommendation from './Recommendations'
import Native from "@/components/Ads/Banner/Native";

const sidebar = ({ mediaType, id }) => {
  return (
    <div>
      <h1 className='font-bold text-xl mb-4'>Related</h1>
      <Native />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default sidebar