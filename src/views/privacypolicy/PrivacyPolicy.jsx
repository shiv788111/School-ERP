'use client'

import { useEffect } from 'react'
import PrivacyPolicySection from '../../components/privacypolicy/PrivacyPolicySection'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | ConnectSkool'
  }, [])

  return (
    <div className="my-5">
      <PrivacyPolicySection />
    </div>
  )
}

export default PrivacyPolicy