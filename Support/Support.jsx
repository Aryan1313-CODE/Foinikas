import React, { useState, useEffect } from 'react'
import SupportHero from './SupportHero'
import Faq from './Faq'
import Loading from '../Loading/Loading'
import Management from './Management'

const Support = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const MIN_LOAD_TIME = 3000
    const startTime = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = MIN_LOAD_TIME - elapsed

      const hideLoader = () => {
        setIsLoading(false)
        setTimeout(() => setShowLoader(false), 400)
      }

      if (remainingTime > 0) {
        setTimeout(hideLoader, remainingTime)
      } else {
        hideLoader()
      }
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading)
    }

    return () => window.removeEventListener('load', finishLoading)
  }, [])


  return (
    <div>
      {/* {showLoader && <Loading isVisible={isLoading} />} */}

      {/* {!isLoading && (<> */}
        <Faq />
      {/* </>)} */}
      
    </div>
  )
}

export default Support
