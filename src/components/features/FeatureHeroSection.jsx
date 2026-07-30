'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'

// ─── FONT OPTIMIZATION ────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

// ─── FEATURE HERO SECTION ────────────────────────────────────────────────────
const FeatureHeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <section 
      className="relative w-full bg-[#1E4E6D] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '92vh', paddingTop: '72px', paddingBottom: '56px', paddingLeft: '24px', paddingRight: '24px' }}
      aria-labelledby="feature-hero-heading"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{ width: 480, height: 480, background: '#F0970A', filter: 'blur(130px)', opacity: 0.07, top: -160, left: -60 }}
      />
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{ width: 480, height: 480, background: '#1E4E6D', filter: 'blur(130px)', opacity: 0.12, bottom: -180, right: -80 }}
      />

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(240,151,10,0.04)" strokeWidth="1" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(240,151,10,0.04)" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[920px]">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-[#F0970A] font-bold tracking-[0.3em] uppercase text-xs mb-6 px-4 py-1.5 bg-[#F0970A]/10 rounded-full border border-[#F0970A]/20"
          aria-hidden="true"
        >
          School ERP Features
        </motion.span>

        {/* H1 */}
        <h1
          id="feature-hero-heading"
          className={`${playfair.className} w-full mb-5 text-[clamp(32px,5.5vw,72px)] font-bold leading-[1.05] tracking-[-1.5px]`}
        >
          <span className="block whitespace-nowrap bg-gradient-to-r from-[#FFB84D] via-[#F0970A] to-[#d4780a] bg-clip-text text-transparent">
            Powerful School ERP Features
          </span>
          <span
            className="block whitespace-nowrap font-light"
            style={{ color: 'rgba(255,255,255,0.4)', WebkitTextFillColor: 'rgba(255,255,255,0.4)' }}
          >
            to Simplify Every Operation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[560px] mb-7 text-[15px] font-normal leading-relaxed text-white/50">
          Manage academics, administration, and communication seamlessly with our all-in-one, cloud-based school ERP system
          designed for modern institutions.
        </p>

        {/* Feature Pills */}
        <div className="flex gap-2.5 flex-wrap justify-center mb-8">
          {[
            { icon: '🎓', label: 'Smart Academic Management' },
            { icon: '🏫', label: 'Complete Administrative Control' },
            { icon: '📊', label: 'Real-Time Insights & Automation' },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border text-[12px] font-medium tracking-[0.3px] text-white/75"
              style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.13)' }}
            >
              <span className="text-[13px]">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 flex-wrap justify-center mb-8">
          <Link
            href="/demo"
            className="inline-block rounded-[4px] bg-[#F0970A] px-9 py-3.5 text-[11px] font-bold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFB84D] hover:shadow-[0_8px_30px_rgba(240,151,10,0.4)]"
            aria-label="Book a free demo of ConnectSkool School ERP"
          >
            Book Free Demo
          </Link>

          <Link
            href="/modules"
            className="inline-block rounded-[4px] border border-white/20 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white/80 transition-all duration-300 hover:border-[#F0970A] hover:text-[#F0970A]"
            aria-label="Explore all ConnectSkool features"
          >
            Explore All Features
          </Link>
        </div>

        {/* Trust line */}
        <p className="max-w-[480px] text-[11px] leading-relaxed text-white/30">
          Trusted by schools to manage{' '}
          <span className="font-medium text-[rgba(240,151,10,0.65)]">students, staff, and operations</span>
          {' '}efficiently in one unified platform.
        </p>

        {/* Stats - Only render after hydration */}
        {isHydrated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex gap-8 flex-wrap justify-center"
          >
            {[
              { value: '40+', label: 'Modules' },
              { value: '1000+', label: 'Schools' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ─── JSON-LD STRUCTURED DATA ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "School ERP Features",
            "description": "Complete list of ConnectSkool School ERP features including attendance, fee management, exams, and more.",
            "about": {
              "@type": "SoftwareApplication",
              "name": "ConnectSkool",
              "applicationCategory": "Education Management Software"
            }
          })
        }}
      />
    </section>
  )
}

export default FeatureHeroSection