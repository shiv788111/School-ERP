'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

// ─── LAZY LOAD BELOW-THE-FOLD COMPONENT ──────────────────────────────
const PrivacyPolicySection = lazy(() => 
  import('../../components/privacypolicy/PrivacyPolicySection')
)

// ─── LOADING FALLBACK ─────────────────────────────────────────────────
function SectionLoader() {
  return (
    <div className="w-full py-16 px-4" role="status" aria-label="Loading privacy policy content">
      <div className="mx-auto max-w-7xl">
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100" />
        <p className="sr-only">Loading privacy policy content...</p>
      </div>
    </div>
  )
}

// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────
function PrivacyPolicySchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy | ConnectSkool",
          "description": "ConnectSkool's privacy policy detailing how we collect, use, and protect your personal information.",
          "url": "https://www.connectskool.com/privacypolicy",
          "isPartOf": {
            "@type": "WebSite",
            "name": "ConnectSkool",
            "url": "https://www.connectskool.com"
          },
          "about": {
            "@type": "Thing",
            "name": "Privacy Policy"
          },
          "datePublished": "2024-01-01",
          "dateModified": "2026-07-31"
        })
      }}
    />
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────
function PrivacyPolicy() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Clean up title on unmount
    return () => {
      document.title = 'ConnectSkool | School ERP Software'
    }
  }, [])

  // Don't render during SSR to avoid hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* ─── JSON-LD STRUCTURED DATA ────────────────────────────────────── */}
      <PrivacyPolicySchema />

      <main 
        className="my-5"
        aria-labelledby="privacy-policy-heading"
      >
        <Suspense fallback={<SectionLoader />}>
          <PrivacyPolicySection />
        </Suspense>
      </main>
    </>
  )
}

export default PrivacyPolicy