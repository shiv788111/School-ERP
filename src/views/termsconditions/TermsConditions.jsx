'use client'

import { useEffect } from 'react'
import TermsConditionsSection from '../../components/termsconditions/TermsConditionsSection'

function TermsConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | ConnectSkool'
  }, [])

  return (
    <div className="my-5">
      <TermsConditionsSection />
    </ div>
  )
}

export default TermsConditions