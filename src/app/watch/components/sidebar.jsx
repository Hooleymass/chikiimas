import React from 'react'
import Recommendation from './Recommendations'
import Banner from '@/components/Ads/Banner'

const sidebar = ({ mediaType, id }) => {
  return (
    <div>
      <h1>Related</h1>
      <Banner adKey='b2f03a02ed04a36818f1f04eb3e333b9' height={90} width={728} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default sidebar