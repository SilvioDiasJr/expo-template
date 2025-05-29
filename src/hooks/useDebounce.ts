import { useEffect, useState } from 'react'

export function useDebounce(delay = 1200) {
  const [value, setValue] = useState<any>()
  const [valueQuery, setValueQuery] = useState<any>()

  useEffect(() => {
    const delayFn = setTimeout(() => setValue(valueQuery), delay)
    return () => clearTimeout(delayFn)
  }, [valueQuery, delay])

  return [value, setValueQuery]
}
