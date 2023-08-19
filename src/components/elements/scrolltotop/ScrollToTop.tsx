import { useEffect } from 'react'
import { useRouter } from 'next/router'

//----------------------------------
// component
//----------------------------------
export const Index = () => {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  return null
}
