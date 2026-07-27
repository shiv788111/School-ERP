'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
  HiOutlineCloud
} from 'react-icons/hi2'

// ─── DATA WITH SEO OPTIMIZATION ──────────────────────────────────
const benefits = [
  { 
    title: 'Real-time Analytics', 
    desc: 'Instant insights into every aspect of school operations with live dashboards and reports.',
    icon: HiOutlineChartBar,
    seoTitle: 'Real-time School Analytics Dashboard',
    seoDesc: 'Live analytics and insights for school performance tracking, student progress, and operational efficiency.',
    slug: 'real-time-analytics',
    category: 'Analytics'
  },
  { 
    title: 'Save 10+ Hours Weekly', 
    desc: 'Automate repetitive administrative tasks and focus on what truly matters — education.',
    icon: HiOutlineClock,
    seoTitle: 'School Automation - Save 10+ Hours Weekly',
    seoDesc: 'Automate administrative tasks, reduce manual work, and save 10+ hours weekly with smart school management automation.',
    slug: 'save-hours-weekly',
    category: 'Automation'
  },
  { 
    title: 'Better Communication', 
    desc: 'Keep parents, teachers and staff always connected with real-time messaging and alerts.',
    icon: HiOutlineChatBubbleLeftRight,
    seoTitle: 'School Communication System - Parent Teacher Messaging',
    seoDesc: 'Real-time communication platform connecting parents, teachers, and staff with instant messaging and alerts.',
    slug: 'better-communication',
    category: 'Communication'
  },
  { 
    title: 'Enterprise Security', 
    desc: 'Bank-grade security with role-based access control, data encryption, and secure authentication.',
    icon: HiOutlineShieldCheck,
    seoTitle: 'School Data Security - Enterprise Grade Protection',
    seoDesc: 'Enterprise-grade security with role-based access, data encryption, and secure authentication for sensitive school data.',
    slug: 'enterprise-security',
    category: 'Security'
  },
  { 
    title: 'Mobile Friendly', 
    desc: 'Access everything from any device, anywhere with responsive design and mobile apps.',
    icon: HiOutlineDevicePhoneMobile,
    seoTitle: 'Mobile School Management App - Access Anywhere',
    seoDesc: 'Mobile-friendly school management platform with responsive design and dedicated mobile apps for iOS and Android.',
    slug: 'mobile-friendly',
    category: 'Mobile'
  },
  { 
    title: 'Cloud Based', 
    desc: 'No installation needed. Always updated with latest features, automatically backed up and available.',
    icon: HiOutlineCloud,
    seoTitle: 'Cloud-Based School ERP - Always Updated',
    seoDesc: 'Cloud-based school management software with automatic updates, data backup, and 99.9% uptime guarantee.',
    slug: 'cloud-based',
    category: 'Cloud'
  },
]

// ─── BENEFIT CARD COMPONENT ──────────────────────────────────────
function BenefitCard({ benefit, index }) {
  const Icon = benefit.icon

  return (
    <motion.div
      key={benefit.title}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="
        group relative flex items-start gap-4 rounded-2xl 
        bg-white/70 backdrop-blur-md 
        border border-transparent
        p-6 transition-all duration-300
        hover:bg-white hover:border-[#F0970A] hover:shadow-xl hover:shadow-[#F0970A]/10
        focus-within:ring-2 focus-within:ring-[#F0970A] focus-within:ring-offset-2
      "
      role="article"
      aria-label={`Benefit: ${benefit.seoTitle}`}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Category Badge */}
      <span className="absolute -top-2 -right-2 rounded-full bg-[#F0970A]/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#F0970A]">
        {benefit.category}
      </span>

      {/* Icon */}
      <div className="
        flex h-12 w-12 shrink-0 items-center justify-center 
        rounded-xl bg-[#1E4E6D]/10 text-[#1E4E6D]
        transition-all duration-300
        group-hover:bg-[#F0970A]/10 group-hover:text-[#F0970A]
      ">
        <Icon size={24} aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 
          className="font-semibold text-[#1E4E6D] group-hover:text-[#F0970A] transition"
          itemProp="name"
        >
          {benefit.title}
        </h3>
        <p 
          className="mt-1 text-sm text-slate-500 leading-relaxed"
          itemProp="description"
        >
          {benefit.desc}
        </p>
        
        {/* Internal Link */}
        <Link
          href={`/benefits/${benefit.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#F0970A] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:gap-2"
          aria-label={`Learn more about ${benefit.title}`}
        >
          Learn More
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

// ─── MAIN SECTION COMPONENT ──────────────────────────────────────
export default function BenefitsSection() {
  return (
    <section 
      className="section-gap bg-[#F8F9FC] py-16 md:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="container-shell mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F0970A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0970A]" aria-hidden="true" />
            Why Choose ConnectSkool
          </div>
          <h2 
            id="benefits-heading"
            className="section-title text-3xl font-bold md:text-4xl text-[#1E4E6D]"
          >
            Why Schools <span className="text-[#F0970A]">Love Us</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-2xl text-slate-500">
            Benefits that transform how your school operates — saving time, improving communication, and ensuring security.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="School management benefits"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.slug} benefit={benefit} index={index} />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
            aria-label="Book a free demo to experience ConnectSkool benefits"
          >
            Experience These Benefits
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            See how ConnectSkool can transform your school operations
          </p>
        </motion.div>

      </div>
    </section>
  )
}