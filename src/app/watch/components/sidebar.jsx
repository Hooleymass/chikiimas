import React from 'react'
import Recommendation from './Recommendations'
import Banner from '@/components/Ads/Banner'

const sidebar = ({ mediaType, id }) => {
  return (
    <div>
      <h1>Related</h1>
      <Banner />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default sidebar