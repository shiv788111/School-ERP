'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import CTASection from '../../components/home/CTASection'
import ModulesHero from '../../components/modules/ModulesHero'

// ─── LAZY LOAD BELOW-THE-FOLD COMPONENTS ──────────────────────────────
// ConnectSkoolModules is heavy with 19 modules and 200+ features
// Lazy loading improves initial page load performance
const ConnectSkoolModules = lazy(() => 
  import('../../components/modules/ConnectSkoolModules')
)

// ─── LOADING FALLBACK ─────────────────────────────────────────────────
function ModulesLoader() {
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100" />
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────
function Modules() {
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
      {/* ─── CRITICAL ABOVE-THE-FOLD CONTENT ──────────────────────────── */}
      {/* ModulesHero loads immediately for fast LCP */}
      <ModulesHero />

      {/* ─── BELOW-THE-FOLD CONTENT (LAZY LOADED) ────────────────────── */}
      {/* ConnectSkoolModules loads only when scrolled to, improving initial load */}
      <Suspense fallback={<ModulesLoader />}>
        <ConnectSkoolModules />
      </Suspense>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      <Suspense fallback={<ModulesLoader />}>
        <CTASection />
      </Suspense>
    </>
  )
}

export default Modules