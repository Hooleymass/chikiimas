import React from 'react'
import Recommendation from './Recommendations'

const sidebar = ({ mediaType, id}) => {
  return (
    <div>
        <h1>Related</h1>
        <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default sidebar