'use client'

import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// SEO: Keyword-rich data with descriptive alt text
const schoolCards = [
  {
    id: 1,
    label: 'Pre-Primary',
    title: 'Back to Kindergarten',
    desc: 'Smart tools for playschools and kindergartens to manage tiny learners with care.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f476.svg',
    bg: '#FFF3E0',
    dot: '#FF7043',
    imageAlt: 'Pre-Primary school management software for kindergartens and playschools',
    seoTitle: 'Pre-Primary School Management Software',
    seoDesc: 'Complete ERP solution for playschools and kindergartens with attendance, fee management, and parent communication.',
  },
  {
    id: 2,
    label: 'Primary School',
    title: 'Back to School',
    desc: 'Complete ERP for primary schools — attendance, fees, exams and parent connect.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4da.svg',
    bg: '#E3F2FD',
    dot: '#1E88E5',
    imageAlt: 'Primary school ERP software with attendance tracking and fee management',
    seoTitle: 'Primary School ERP Software',
    seoDesc: 'Comprehensive school management system for primary schools with attendance, fees, exams, and parent communication.',
  },
  {
    id: 3,
    label: 'Senior Secondary',
    title: 'Back to College',
    desc: 'Advanced management for higher secondary with subject-wise analytics and reports.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f393.svg',
    bg: '#E8F5E9',
    dot: '#43A047',
    imageAlt: 'Senior secondary school management system with analytics and reporting',
    seoTitle: 'Senior Secondary School Management System',
    seoDesc: 'Advanced ERP for higher secondary schools with subject-wise analytics, exam management, and performance tracking.',
  },
  {
    id: 4,
    label: 'University',
    title: 'Back to University',
    desc: 'University-grade ERP with multi-campus, hostel and faculty management built in.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f3eb.svg',
    bg: '#F3E5F5',
    dot: '#8E24AA',
    imageAlt: 'University ERP system with multi-campus and hostel management',
    seoTitle: 'University ERP System',
    seoDesc: 'Complete university management software with multi-campus, hostel, faculty management, and academic administration.',
  },
]

const suiteCards = [
  {
    id: 1,
    category: 'Preschool',
    suite: 'Kinder Suite',
    desc: 'All-in-one tech for playschools, kindergartens, and franchisers.',
    tagline: 'Diligent & safer early education.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d2.svg',
    imageAlt: 'Preschool management suite for kindergartens and early education centers',
    seoTitle: 'Preschool Management Software - Kinder Suite',
    seoDesc: 'Complete preschool management solution for playschools, kindergartens, and educational franchises.',
  },
  {
    id: 2,
    category: 'K-12 School',
    suite: 'K-12 Suite',
    desc: 'SaaS that powers K-12 multi-campus schools with complete automation.',
    tagline: 'Smart partner for streamlined growth.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1-200d-1f3eb.svg',
    imageAlt: 'K-12 school management suite for multi-campus institutions',
    seoTitle: 'K-12 School Management Software',
    seoDesc: 'Comprehensive K-12 school ERP with multi-campus management, automation, and parent engagement.',
  },
  {
    id: 3,
    category: 'Academy',
    suite: 'CoachPro',
    desc: 'Integrated platform for coaching classes, training institutes and learning centres.',
    tagline: 'Be the brand, ignite your classes.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f3af.svg',
    imageAlt: 'Coaching institute management platform for academies and training centers',
    seoTitle: 'Coaching Institute Management Software',
    seoDesc: 'Integrated platform for coaching classes, training institutes, and learning centers with student management and analytics.',
  },
  {
    id: 4,
    category: 'Independent Tutor',
    suite: 'TutorEdge',
    desc: 'Digital podium for solo edupreneurs, YouTubers, business trainers and home tutors.',
    tagline: 'One control to reach the remote.',
    gif: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4bb.svg',
    imageAlt: 'Independent tutor management platform for edupreneurs and trainers',
    seoTitle: 'Tutor Management Software for Independent Educators',
    seoDesc: 'Digital platform for solo edupreneurs, YouTubers, business trainers, and home tutors to manage their teaching business.',
  },
]

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "ConnectSkool",
  "description": "Complete School ERP Software for modern educational institutions including preschools, K-12 schools, universities, and coaching institutes.",
  "url": "https://connectskool.com",
  "logo": "https://connectskool.com/logo.png",
  "educationalUse": "School Management",
  "teaches": "School Administration, Education Management",
}

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ConnectSkool School ERP",
    "description": "Comprehensive school ERP software for managing admissions, attendance, fees, exams, and staff administration.",
    "category": "Education Management Software",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
]

// School Card Component with SEO
function SchoolCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  
  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => setHovered(false), [])
  const handleFocus = useCallback(() => setHovered(true), [])
  const handleBlur = useCallback(() => setHovered(false), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="relative flex flex-col items-center bg-white rounded-[24px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
      style={{
        border: hovered ? '2px solid #F0970A' : '1.5px solid #E8EDF3',
        boxShadow: hovered ? '0 20px 56px rgba(240,151,10,0.20)' : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
      role="article"
      aria-label={`${item.label} solution - ${item.seoTitle}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Colored top band with character */}
      <div
        className="w-full flex flex-col items-center justify-center pt-8 pb-5 relative transition-colors duration-300"
        style={{ background: hovered ? '#FFF8EE' : item.bg }}
      >
        <span
          className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full transition-all duration-300"
          style={{ background: hovered ? '#F0970A' : item.dot }}
          aria-hidden="true"
        />
        <div className="w-24 h-24 relative">
          <Image
            src={item.gif}
            alt={item.imageAlt}
            width={96}
            height={96}
            className="object-contain select-none"
            style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))' }}
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
        {/* Pagination dots (decorative) */}
        <div className="flex gap-1 mt-4" aria-hidden="true">
          {schoolCards.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === index ? 16 : 6,
                height: 6,
                background: i === index ? '#F0970A' : '#D1D9E0',
              }}
            />
          ))}
        </div>
      </div>

      {/* Label */}
      <div
        className="mt-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-250"
        style={{
          background: hovered ? '#FFF3E0' : '#F1F5F9',
          color: hovered ? '#C47A00' : '#64748B',
          border: hovered ? '1px solid #F0970A55' : '1px solid #E2E8F0',
        }}
      >
        {item.label}
      </div>

      {/* Text */}
      <div className="px-6 pt-3 pb-6 text-center flex flex-col items-center gap-2 flex-1">
        <h3
          className="text-[16px] font-bold transition-colors duration-250"
          style={{ color: hovered ? '#F0970A' : '#0F2D40' }}
          itemProp="name"
        >
          {item.title}
        </h3>
        <p className="text-[12.5px] text-[#7A8896] leading-relaxed" itemProp="description">
          {item.desc}
        </p>

        <Link
          href={`/solutions/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-3 px-6 py-2.5 rounded-full text-[12px] font-bold transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
          style={{
            background: hovered ? '#F0970A' : 'transparent',
            color: hovered ? '#fff' : '#1E4E6D',
            border: hovered ? '1.5px solid #F0970A' : '1.5px solid #CBD5E1',
          }}
          aria-label={`Learn more about ${item.label} - ${item.seoTitle}`}
        >
          Learn More →
        </Link>
      </div>

      {/* Bottom orange line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{ background: '#F0970A', borderRadius: '0 0 24px 24px' }}
        initial={{ width: 0 }}
        animate={{ width: hovered ? '100%' : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden="true"
      />
    </motion.div>
  )
}

// Suite Card Component with SEO
function SuiteCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  
  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() => setHovered(false), [])
  const handleFocus = useCallback(() => setHovered(true), [])
  const handleBlur = useCallback(() => setHovered(false), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="relative flex flex-col bg-white rounded-[20px] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
      style={{
        border: hovered ? '2px solid #F0970A' : '1.5px solid #E8EDF3',
        boxShadow: hovered ? '0 20px 56px rgba(240,151,10,0.20)' : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
      role="article"
      aria-label={`${item.category} suite - ${item.seoTitle}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 w-[4px] rounded-r-full"
        style={{ background: '#F0970A' }}
        initial={{ height: 0 }}
        animate={{ height: hovered ? '100%' : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden="true"
      />

      {/* Image area */}
      <div
        className="flex items-center justify-center pt-7 pb-3 transition-colors duration-300"
        style={{ background: hovered ? '#FFF8EE' : '#F8F9FC' }}
      >
        <div className="w-20 h-20 relative">
          <Image
            src={item.gif}
            alt={item.imageAlt}
            width={80}
            height={80}
            className="object-contain select-none"
            style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.12))' }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-1 flex-1">
        <span
          className="text-[17px] font-bold transition-colors duration-250"
          style={{ color: hovered ? '#F0970A' : '#1E4E6D' }}
          itemProp="name"
        >
          {item.category}
        </span>
        <span className="text-[11.5px] font-semibold text-[#94A3B8] mb-1">{item.suite}</span>
        <p className="text-[12.5px] text-[#5A6A7A] leading-relaxed mb-1" itemProp="description">
          {item.desc}
        </p>
        <p
          className="text-[12px] font-bold transition-colors duration-250"
          style={{ color: hovered ? '#F0970A' : '#0F2D40' }}
        >
          {item.tagline}
        </p>

        <div className="mt-4 pt-3.5 border-t border-[#F0F2F5] flex justify-center">
          <Link
            href={`/products/${item.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center gap-2 text-[13px] font-semibold transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 rounded-full px-3 py-1"
            style={{ color: hovered ? '#F0970A' : '#1E4E6D' }}
            aria-label={`Learn more about ${item.category} - ${item.seoTitle}`}
          >
            Learn More
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] transition-all duration-250"
              style={{
                background: hovered ? '#F0970A' : '#EEF2F7',
                color: hovered ? '#fff' : '#1E4E6D',
              }}
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ModulesSection() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify([
            organizationSchema,
            ...productSchemas,
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": schoolCards.map((card, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": card.seoTitle,
                  "description": card.seoDesc,
                  "image": card.gif,
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": suiteCards.map((card, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": card.seoTitle,
                  "description": card.seoDesc,
                  "image": card.gif,
                }
              }))
            }
          ])
        }}
      />

      <div className="bg-[#F8F9FC]">

        {/* ── Section 1: School Levels ── */}
        <section className="py-20 px-6" aria-labelledby="school-levels-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-amber-700
                text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0970A]" />
                Who is it for?
              </div>
              <h2 id="school-levels-heading" className="text-[34px] font-bold text-[#0F2D40] leading-tight">
                Built for Every <span className="text-[#F0970A]">Level</span> of Learning
              </h2>
              <p className="text-[15px] text-[#6B7A8D] mt-3 max-w-lg mx-auto leading-relaxed">
                From kindergarten to university — one platform that grows with your institution.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5" role="list">
              {schoolCards.map((item, i) => (
                <SchoolCard key={item.id} item={item} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex justify-center mt-10"
            >
              <Link
                href="/solutions"
                className="bg-[#F0970A] text-white font-bold px-10 py-3.5 rounded-full text-[14px]
                  shadow-[0_8px_28px_rgba(240,151,10,0.35)] transition-all duration-250
                  hover:bg-[#d87f05] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
                aria-label="Explore all school management solutions"
              >
                Explore All Solutions →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Product Suites (dark) ── */}
        <section className="py-20 px-6 bg-[#1E4E6D] relative overflow-hidden" aria-labelledby="product-suites-heading">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-[0.07]"
            style={{ background: '#F0970A' }} aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-[0.05]"
            style={{ background: '#F0970A' }} aria-hidden="true" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-orange-300
                text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0970A]" />
                Our Product Suites
              </div>
              <h2 id="product-suites-heading" className="text-[34px] font-bold text-white leading-tight">
                Next Gen Workspace for{' '}
                <span className="text-[#F0970A]">Education Enthusiasts</span>
              </h2>
              <p className="text-[15px] text-[#9BB8CC] mt-3 max-w-xl mx-auto leading-relaxed">
                Supercharge your Preschools, Schools, Coaching Institutes, Learning Centres, and Educational Endeavours like never before!
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5" role="list">
              {suiteCards.map((item, i) => (
                <SuiteCard key={item.id} item={item} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex justify-center mt-10"
            >
              <Link
                href="/demo"
                className="bg-[#F0970A] text-white font-bold px-10 py-3.5 rounded-full text-[14px]
                  border-2 border-[#F0970A] shadow-[0_8px_28px_rgba(240,151,10,0.45)] transition-all duration-250
                  hover:bg-transparent hover:text-[#F0970A] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
                aria-label="Get started with ConnectSkool for free"
              >
                Get Started Free →
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}