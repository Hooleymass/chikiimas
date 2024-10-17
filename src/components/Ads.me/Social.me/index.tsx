'use client'
import { JSX, useEffect, useRef } from 'react'

export default function SocialBarMe(): JSX.Element {
  const social = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (social.current && !social.current.firstChild) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//wipehumorousbeen.com/91/bc/d4/91bcd4b9ab0f4ed168b83f9d13d071cd.js'

      social.current.appendChild(script)
    }
  }, [])

  return <div className='bg-none' ref={social}></div>
}