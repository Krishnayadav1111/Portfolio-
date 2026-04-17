import { useEffect, useRef, useState } from 'react'

/* WHAT: this converts browser intersection events into React state. Interview
   angle: refs hold DOM nodes without rendering; state changes only when UI
   visibility should affect rendering. */
export function useIntersectionObserver<TElement extends Element>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<TElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(node)

    return () => observer.disconnect()
  }, [options])

  return { ref, isIntersecting }
}
