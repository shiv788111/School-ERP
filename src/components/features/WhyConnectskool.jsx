'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

// ─── STATS DATA ──────────────────────────────────────────────────────────────
const stats = [
  { value: '40+', label: 'Modules' },
  { value: '1000+', label: 'Schools Trust Us' },
  { value: '99.9%', label: 'Uptime' },
]

// ─── TRUST BADGES ────────────────────────────────────────────────────────────
const trustBadges = [
  { text: 'No credit card required', icon: '✓' },
  { text: 'Free demo available', icon: '✓' },
  { text: '24/7 support', icon: '✓' },
]

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const WhyConnectSkool = () => {
  return (
    <section 
      className="relative w-full bg-[#F7F8FB] py-20 px-6 md:px-16 overflow-hidden"
      aria-labelledby="why-connectskool-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ─── LEFT SIDE: IMAGE ───────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#1E4E6D]/10 shadow-2xl">
            <Image
              src="/assets/featuresection.webp"
              alt="ConnectSkool School ERP Dashboard showing attendance, fee management, and student analytics"
              width={600}
              height={400}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100/50 backdrop-blur-sm hidden md:block">
            <div className="flex gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-[#1E4E6D]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT SIDE: CONTENT ────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[2px] uppercase text-[#F0A80A] bg-[#F0A80A]/10 rounded-full border border-[#F0A80A]/20">
              <span className="text-[#1E4E6D]">ConnectSkool ERP</span> · Smart School Management
            </span>
            
            {/* Heading */}
            <h2 
              id="why-connectskool-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]"
            >
              <span className="text-[#F0A80A]">We are <span className="text-[#1E4E6D]">ConnectSkool</span></span>
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              Modern. Intelligent. Seamless.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              <strong className="text-[#1E4E6D] font-semibold">ConnectSkool ERP</strong> is a modern, all-in-one school management solution designed to 
              <strong className="text-gray-900 font-semibold"> simplify and digitize</strong> every aspect of educational institutions. Built to bridge the gap between administration, teachers, students, and parents — seamlessly.
            </p>
            
            <p>
              With a focus on efficiency and innovation, ConnectSkool streamlines <strong className="text-[#1E4E6D]">attendance, fee management, examinations, transport, and academic planning</strong> — all from a single unified platform. Reduce manual work, eliminate errors, and enhance productivity across every department.
            </p>

            <p>
              We believe education should be driven by <strong className="text-[#1E4E6D]">clarity, transparency, and accessibility</strong>. Intuitive dashboards, secure data handling, and mobile-friendly access ensure every stakeholder stays connected — anytime, anywhere.
            </p>

            {/* Highlighted Feature Section */}
            <div className="bg-white p-5 rounded-xl border-l-4 border-[#F0A80A] shadow-sm my-4">
              <p className="text-gray-700 italic">
                “ConnectSkool empowers schools with real-time insights, automated workflows, and a collaborative ecosystem — helping educators focus on what truly matters: <strong className="text-[#1E4E6D]">shaping young minds</strong>.”
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F0A80A] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all transform hover:-translate-y-1 hover:bg-[#d89608] shadow-lg shadow-[#F0A80A]/30 focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2"
              aria-label="Explore ConnectSkool ERP features"
            >
              Explore Features <HiArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/demo"
              className="inline-block px-8 py-4 bg-transparent border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-widest rounded-lg transition-all hover:border-[#F0A80A] hover:text-[#F0A80A] focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2"
              aria-label="Get started with ConnectSkool ERP"
            >
              Get Started
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-400">
            {trustBadges.map((badge) => (
              <span key={badge.text} className="flex items-center gap-1">
                <span className="text-[#F0A80A]" aria-hidden="true">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ─── JSON-LD STRUCTURED DATA ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ConnectSkool ERP",
            "description": "Modern, all-in-one school management solution for attendance, fee management, examinations, transport, and academic planning.",
            "applicationCategory": "Education Management Software",
            "operatingSystem": "Web, Android, iOS",
            "url": "https://www.connectskool.com",
            "offers": {
              "@type": "Offer",
              "description": "Free demo available",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
    </section>
  )
}

export default WhyConnectSkool