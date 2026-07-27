'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// ─── DATA WITH SEO OPTIMIZATION ──────────────────────────────────
const shots = [
  { 
    title: 'Dashboard UI', 
    image: '/assets/images/dashboard-preview.webp',
    alt: 'ConnectSkool School ERP Dashboard showing student overview, attendance, and fee management features',
    seoTitle: 'School ERP Dashboard - Complete School Management Interface',
    seoDesc: 'Intuitive school management dashboard with real-time analytics, student overview, attendance tracking, and fee management.',
    category: 'Dashboard',
    slug: 'dashboard-ui'
  },
  { 
    title: 'Fee Management', 
    image: '/assets/images/fee-preview.webp',
    alt: 'School Fee Management System showing payment tracking, invoices, and financial reports',
    seoTitle: 'School Fee Management System - Online Payment & Financial Tracking',
    seoDesc: 'Complete fee management system with online payments, automated invoices, overdue alerts, and financial reconciliation.',
    category: 'Finance',
    slug: 'fee-management'
  },
  { 
    title: 'Attendance View', 
    image: '/assets/images/attendance-preview.webp',
    alt: 'School Attendance Tracking System showing daily attendance, reports, and student presence',
    seoTitle: 'School Attendance Management System - Real-time Student Tracking',
    seoDesc: 'Smart attendance management system with biometric integration, real-time tracking, automated reports, and parent notifications.',
    category: 'Attendance',
    slug: 'attendance-view'
  },
]

// ─── SCREENSHOT CARD COMPONENT ──────────────────────────────────
function ScreenshotCard({ shot, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={shot.image}
          alt={shot.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
        />
        
        {/* Category Badge */}
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {shot.category}
        </span>
      </div>

      {/* Caption */}
      <figcaption className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-orange-500">
            {shot.title}
          </h3>
          <p className="text-xs text-slate-500">{shot.seoDesc.slice(0, 60)}...</p>
        </div>
        <Link
          href={`/features/${shot.slug}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white group-hover:scale-110"
          aria-label={`View ${shot.title} feature details`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </figcaption>
    </motion.figure>
  )
}

// ─── JSON-LD STRUCTURED DATA ────────────────────────────────────
function ImageGallerySchema() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": shots.map((shot, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ImageObject",
        "contentUrl": `https://connectskool.com${shot.image}`,
        "description": shot.seoDesc,
        "name": shot.seoTitle,
        "thumbnailUrl": `https://connectskool.com${shot.image}`,
        "caption": shot.title
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
    />
  )
}

// ─── MAIN SECTION COMPONENT ──────────────────────────────────────
export default function ScreenshotsSection() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <ImageGallerySchema />

      <section 
        className="section-gap bg-gradient-to-b from-cream/30 to-white/80 py-16 md:py-24"
        aria-labelledby="screenshots-heading"
      >
        <div className="container-shell mx-auto max-w-7xl px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              Product Screenshots
            </div>
            <h2 
              id="screenshots-heading"
              className="section-title text-3xl font-bold md:text-4xl"
            >
              See It in <span className="gradient-text-accent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="section-subtitle mx-auto mt-3 max-w-2xl text-slate-600">
              Clean, intuitive interfaces designed for every user — from administrators to students.
            </p>
          </motion.div>

          {/* Grid */}
          <div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Product screenshots gallery"
          >
            {shots.map((shot, index) => (
              <ScreenshotCard key={shot.slug} shot={shot} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Book a free demo to see ConnectSkool in action"
            >
              Book Free Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Experience the full power of ConnectSkool with a personalized demo
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}