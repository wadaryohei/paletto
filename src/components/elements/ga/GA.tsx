import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GOOGLE_ANALYTICS_ID } from '@/constants/GA'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const Index = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GOOGLE_ANALYTICS_ID, {
          page_path: url,
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return null
}
