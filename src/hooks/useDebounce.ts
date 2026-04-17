import { useEffect, useState } from 'react'

/* WHY: debouncing keeps expensive filtering or network-backed search from
   reacting to every keypress. The hook is generic so it can protect strings,
   numbers, or richer filter objects. */
export function useDebounce<T>(value: T, delay = 240) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [delay, value])

  return debouncedValue
}
