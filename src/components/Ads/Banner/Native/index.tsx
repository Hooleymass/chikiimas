'use client'
import { useEffect, useRef } from 'react'

export default function Native(): JSX.Element {
  const native = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (native.current && !native.current.firstChild) {
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.type = 'text/javascript'
      script.src = '//wipehumorousbeen.com/2ff431c6276653ff2882d567b9a5e598/invoke.js'

      native.current.appendChild(script)
    }
  }, [])

  return <div id="container-2ff431c6276653ff2882d567b9a5e598" ref={native}></div>
}