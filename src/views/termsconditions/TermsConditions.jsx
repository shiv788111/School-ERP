'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

// ─── LAZY LOAD BELOW-THE-FOLD COMPONENT ──────────────────────────────
const TermsConditionsSection = lazy(() => 
  import('../../components/termsconditions/TermsConditionsSection')
)

// ─── LOADING FALLBACK ─────────────────────────────────────────────────
function SectionLoader() {
  return (
    <div className="w-full py-16 px-4" role="status" aria-label="Loading terms and conditions">
      <div className="mx-auto max-w-7xl">
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100" />
        <p className="sr-only">Loading terms and conditions content...</p>
      </div>
    </div>
  )
}

// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────
function TermsConditionsSchema() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions | ConnectSkool",
          "description": "ConnectSkool's Terms & Conditions governing the use of our School ERP platform. Read the rules, guidelines, and legal agreements.",
          "url": "https://www.connectskool.com/termsconditions",
          "isPartOf": {
            "@type": "WebSite",
            "name": "ConnectSkool",
            "url": "https://www.connectskool.com"
          },
          "about": {
            "@type": "Thing",
            "name": "Terms & Conditions"
          },
          "datePublished": "2024-01-01",
          "dateModified": currentDate,
          "inLanguage": "en-IN",
          "mainEntity": {
            "@type": "WebPageElement",
            "name": "Terms & Conditions Content"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.connectskool.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Terms & Conditions",
                "item": "https://www.connectskool.com/termsconditions"
              }
            ]
          }
        })
      }}
    />
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────
function TermsConditions() {
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
      <TermsConditionsSchema />

      <main 
        className="my-5"
        aria-labelledby="terms-heading"
      >
        <Suspense fallback={<SectionLoader />}>
          <TermsConditionsSection />
        </Suspense>
      </main>
    </>
  )
}

export default TermsConditions