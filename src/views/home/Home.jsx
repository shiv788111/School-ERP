'use client'

import { Suspense, lazy } from 'react'
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
// These components are not immediately visible, so we lazy load them
// to improve LCP and FCP performance

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
  return (
    <>
      {/* ─── CRITICAL ABOVE-THE-FOLD CONTENT ──────────────────────────── */}
      {/* These load immediately for fast LCP */}
      <HeroSection />
      <TrustedSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ModulesSection />
      <DashboardSection />

      {/* ─── BELOW-THE-FOLD CONTENT (LAZY LOADED) ────────────────────── */}
      {/* These load only when needed, improving initial load time */}
      
      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      {/* Uncomment when needed */}
      {/* <Suspense fallback={<SectionLoader />}>
        <ScreenshotsSection />
      </Suspense> */}

      {/* Uncomment when needed */}
      {/* <Suspense fallback={<SectionLoader />}>
        <PricingSection />
      </Suspense> */}

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      {/* Always visible, but loads after critical content */}
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
    </>
  )
}

export default Home