'use client'
import { useEffect, useRef } from 'react'

export default function NativeMe(): JSX.Element {
  const native = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (native.current && !native.current.firstChild) {
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.type = 'text/javascript'
      script.src = '//wipehumorousbeen.com/88ffdf8f0e751b073d7d71b3ce059f3a/invoke.js'

      native.current.appendChild(script)
    }
  }, [])

  return <div id="container-88ffdf8f0e751b073d7d71b3ce059f3a" ref={native}></div>
}