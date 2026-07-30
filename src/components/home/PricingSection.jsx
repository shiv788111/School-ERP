'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineCheck } from 'react-icons/hi2'

// ─── PRICING DATA ────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Basic',
    price: '999',
    period: '/month',
    desc: 'For small schools getting started with digital management.',
    features: [
      'Student Attendance Management',
      'Online Fee Management',
      'Parent SMS & Mobile Notifications',
      'Student Profile Management',
      'Email Support'
    ],
    popular: false,
    slug: 'basic',
    ctaText: 'Get Started',
    ctaLink: '/demo'
  },
  {
    name: 'Professional',
    price: '2,499',
    period: '/month',
    desc: 'For growing schools needing comprehensive management tools.',
    features: [
      'All Basic features',
      'Examination Management',
      'School Transport Management',
      'Staff & Payroll Management',
      'Parent Communication Portal',
      'Priority Support'
    ],
    popular: true,
    slug: 'professional',
    ctaText: 'Get Started',
    ctaLink: '/demo'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large institutions with complex requirements.',
    features: [
      'All Professional features',
      'Unlimited Students & Staff',
      'Custom Module Development',
      'API Access & Integration',
      'Dedicated Account Manager',
      'On-site Training & Support'
    ],
    popular: false,
    slug: 'enterprise',
    ctaText: 'Contact Sales',
    ctaLink: '/contact'
  },
]

// ─── TRUST SIGNALS ───────────────────────────────────────────────────────────
const trustSignals = [
  'Free onboarding & setup',
  'Data migration included',
  'Teacher training provided',
  'Mobile app included',
  'GST invoice available'
]

// ─── JSON-LD STRUCTURED DATA ───────────────────────────────────────────────
function PricingSchema() {
  // Filter out Custom plan from offers (no price)
  const availablePlans = plans.filter(plan => plan.price !== 'Custom');
  
  // Single SoftwareApplication with multiple offers
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ConnectSkool School ERP Software",
    "description": "Complete school management software with flexible pricing plans for schools of every size. Includes attendance, fee management, examinations, transport, and staff management.",
    "applicationCategory": "Education Management Software",
    "applicationSubCategory": "School ERP",
    "operatingSystem": "Web, Android, iOS",
    "browserRequirements": "Modern browsers",
    "url": "https://www.connectskool.com",
    "image": "https://www.connectskool.com/assets/og-image.png",
    "softwareVersion": "1.0",
    "publisher": {
      "@type": "Organization",
      "name": "FounderCodes"
    },
    // Only include plans with actual prices (exclude Custom)
    "offers": availablePlans.map((plan) => ({
      "@type": "Offer",
      "name": `${plan.name} Plan`,
      "description": plan.desc,
      "price": plan.price.replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "eligibleRegion": {
        "@type": "Country",
        "name": "IN"
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  )
}

// ─── PRICING CARD COMPONENT ─────────────────────────────────────────────────
function PricingCard({ plan, index }) {
  const isPopular = plan.popular

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`
        relative overflow-hidden rounded-2xl p-8 transition-all duration-300
        bg-white border shadow-sm
        hover:shadow-xl hover:-translate-y-1
        ${isPopular 
          ? 'border-2 border-[#F0970A] shadow-lg shadow-[#F0970A]/10' 
          : 'border-slate-200/60 hover:border-[#F0970A]/30'
        }
      `}
      role="article"
      aria-label={`${plan.name} pricing plan - ConnectSkool School ERP`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div 
          className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-[#F0970A] to-[#d87f05] px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#F0970A]/30"
          aria-label="Most popular plan"
        >
          Most Popular
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xl font-bold text-[#1E4E6D]">
        {plan.name}
      </h3>
      
      {/* Description */}
      <p className="mt-1 text-sm text-slate-500">
        {plan.desc}
      </p>

      {/* Price */}
      <div className="mt-6 flex items-baseline gap-1">
        {plan.price !== 'Custom' && (
          <span className="text-sm font-medium text-slate-400">INR</span>
        )}
        <span className="text-4xl font-extrabold text-[#1E4E6D]">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-slate-400">
            {plan.period}
          </span>
        )}
      </div>

      {/* Features List */}
      <ul className="mt-6 space-y-3" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
            <HiOutlineCheck 
              size={16} 
              className="shrink-0 text-[#F0970A]" 
              aria-hidden="true" 
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={plan.ctaLink}
        className={`
          mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isPopular
            ? 'bg-[#F0970A] text-white shadow-lg shadow-[#F0970A]/30 hover:scale-105 hover:bg-[#d87f05] focus:ring-[#F0970A]'
            : 'border-2 border-[#1E4E6D] text-[#1E4E6D] hover:bg-[#1E4E6D] hover:text-white hover:scale-105 focus:ring-[#1E4E6D]'
          }
        `}
        aria-label={`Choose ${plan.name} plan - ${plan.ctaText}`}
      >
        {plan.ctaText}
      </Link>

      {/* Custom Quote Link for Enterprise */}
      {plan.price === 'Custom' && (
        <p className="mt-3 text-center text-xs text-slate-400">
          Need a custom quotation?{' '}
          <Link href="/demo" className="text-[#F0970A] hover:underline">
            Book Free Demo
          </Link>
        </p>
      )}
    </motion.div>
  )
}

// ─── MAIN PRICING SECTION ──────────────────────────────────────────────────
export default function PricingSection() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <PricingSchema />

      <section 
        id="pricing" 
        className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F8F9FC]"
        aria-labelledby="pricing-heading"
      >
        <div className="container-shell mx-auto max-w-7xl px-4 md:px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F0970A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F0970A]" aria-hidden="true" />
              Pricing
            </div>
            <h2 
              id="pricing-heading"
              className="text-3xl font-bold md:text-4xl text-[#1E4E6D]"
            >
              ConnectSkool <span className="text-[#F0970A]">School ERP</span> Pricing Plans
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-500">
              Flexible School ERP pricing for schools of every size. Compare features, 
              request a demo, and choose the best solution for your institution.
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div 
            className="grid gap-6 md:grid-cols-3"
            role="list"
            aria-label="Pricing plans"
          >
            {plans.map((plan, index) => (
              <PricingCard key={plan.slug} plan={plan} index={index} />
            ))}
          </div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <div className="rounded-2xl bg-[#F8F9FC] p-6 text-center">
              <p className="mb-4 text-sm font-semibold text-[#1E4E6D]">
                Everything you need to get started — included with every plan
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                {trustSignals.map((signal) => (
                  <span key={signal} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F0970A]" aria-hidden="true" />
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-slate-500">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </motion.div>

          {/* FAQ Link - Only if /faq exists */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-[#1E4E6D] hover:text-[#F0970A] transition-colors duration-200"
              aria-label="View frequently asked questions about pricing"
            >
              Have questions? View our FAQ
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Book Demo CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-slate-400">
              Need a custom quotation for your school?
            </p>
            <Link
              href="/demo"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
              aria-label="Book a free demo and get a custom quotation"
            >
              Book Free Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  )
}