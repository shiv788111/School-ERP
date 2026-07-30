'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import HeroSection from '../../components/home/HeroSection'
import TrustedSection from '../../components/home/TrustedSection'
import ProblemSolutionSection from '../../components/home/ProblemSolutionSection'
import FeaturesSection from '../../components/home/FeaturesSection'
import ModulesSection from '../../components/home/ModulesSection'
import DashboardSection from '../../components/home/DashboardSection'
import BenefitsSection from '../../components/home/BenefitsSection'
import TestimonialsSection from '../../components/home/TestimonialsSection'
import CTASection from '../../components/home/CTASection'

// ─── LAZY LOAD BELOW-THE-FOLD SECTIONS ──────────────────────────────
const ScreenshotsSection = lazy(() => 
  import('../../components/home/ScreenshotsSection')
)

const PricingSection = lazy(() => 
  import('../../components/home/PricingSection')
)

// ─── LOADING FALLBACK ─────────────────────────────────────────────────
function SectionLoader() {
  return (
    <div className="w-full py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="h-96 animate-pulse rounded-2xl bg-gray-100" />
      </div>
    </div>
  )
}

function Home() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <>
      {/* ─── CRITICAL ABOVE-THE-FOLD CONTENT ──────────────────────────── */}
      <HeroSection />
      <TrustedSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ModulesSection />
      <DashboardSection />

      {/* ─── BELOW-THE-FOLD CONTENT ────────────────────────────────────── */}
      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      {/* Only render CTASection after hydration to prevent mismatch */}
      {isHydrated && (
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      )}
    </>
  )
}

export default Home