'use client'
import { JSX, useEffect, useRef } from 'react'

export default function SocialBar(): JSX.Element {
  const social = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (social.current && !social.current.firstChild) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//wipehumorousbeen.com/54/a9/ea/54a9ea0778f5620c72be5bd12e2f00f1.js'

      social.current.appendChild(script)
    }
  }, [])

  return <div className='bg-none' ref={social}></div>
}