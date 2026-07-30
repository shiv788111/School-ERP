'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HiOutlineCheck, HiOutlineCalendar } from 'react-icons/hi2';
import { useCallback } from 'react';

// ─── PRICING DATA ────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Dashboard Plan',
    price: '10,000',
    desc: 'Best for schools that need a powerful management dashboard',
    features: [
      'Up to 300 students',
      'Admin Dashboard',
      'Attendance Management',
      'Fee Management',
      'Reports & Analytics',
      'Email Support'
    ],
    popular: false,
    slug: 'dashboard',
    ctaText: 'Book Free Demo',
    seoTitle: 'School Dashboard Plan - ₹10,000/year',
    seoDesc: 'Powerful school management dashboard with attendance, fee management, and analytics for up to 300 students.',
    badge: 'Starter'
  },
  {
    name: 'Mobile App Plan',
    price: '15,000',
    desc: 'Complete ERP with mobile app for parents & staff',
    features: [
      'Up to 300 students',
      'Android Mobile App',
      'All Dashboard features',
      'Push Notifications',
      'Parent & Student Login',
      'Priority Support',
    ],
    popular: true,
    slug: 'mobile-app',
    ctaText: 'Book Free Demo',
    seoTitle: 'School ERP with Mobile App - ₹15,000/year',
    seoDesc: 'Complete school ERP with Android mobile app for parents, staff, and students. Includes push notifications and priority support.',
    badge: 'Popular'
  },
  {
    name: 'Custom Plan',
    price: 'Custom',
    desc: 'For large schools & custom requirements',
    features: [
      '300+ students',
      'Custom modules',
      'Android + iOS Apps',
      'API Integrations',
      'Custom branding',
      'Dedicated Support'
    ],
    popular: false,
    slug: 'custom',
    ctaText: 'Contact Sales',
    seoTitle: 'Custom School ERP Plan - Contact Sales',
    seoDesc: 'Custom school management solution for large institutions with 300+ students, custom modules, and dedicated support.',
    badge: 'Enterprise'
  },
];

// ─── PRICING CARD COMPONENT ─────────────────────────────────────────────────
function PricingCard({ plan, index, onBookDemo }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 transition-all duration-300 ${
        isPopular 
          ? 'bg-white border-2 border-[#0DA2E7] shadow-2xl scale-105 z-10' 
          : 'bg-white border shadow-md hover:shadow-xl hover:-translate-y-1'
      }`}
      role="article"
      aria-label={`${plan.name} - ${plan.seoTitle}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0DA2E7] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-[#0DA2E7]/30"
          aria-label="Most popular plan"
        >
          Most Popular
        </div>
      )}

      {/* Plan Badge */}
      <div className="text-xs font-semibold text-[#0DA2E7] mb-2 uppercase tracking-wider">
        {plan.badge}
      </div>

      {/* Plan Name */}
      <h3 className="text-xl font-bold mb-2 text-[#1E4E6D]" itemProp="name">{plan.name}</h3>
      
      {/* Description */}
      <p className="text-sm text-gray-500 mb-6" itemProp="description">{plan.desc}</p>

      {/* Price */}
      <div className="mb-4">
        {plan.price !== 'Custom' ? (
          <div className="flex items-baseline gap-1">
            <h4 className="text-4xl font-extrabold text-[#0DA2E7]" itemProp="price">
              ₹{plan.price}
            </h4>
            <span className="text-xs text-gray-400" itemProp="priceCurrency" content="INR">/year</span>
          </div>
        ) : (
          <h4 className="text-3xl font-bold text-[#0DA2E7]">Contact Us</h4>
        )}
      </div>

      {/* Student Info */}
      {plan.price !== 'Custom' && (
        <p className="text-xs text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-6 font-medium">
          ✓ Includes up to 300 students
        </p>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-8" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
            <HiOutlineCheck className="text-emerald-500 w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => onBookDemo(plan.slug)}
        className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
          isPopular 
            ? 'bg-[#0DA2E7] text-white hover:opacity-90 hover:scale-105 shadow-lg shadow-[#0DA2E7]/30' 
            : 'border-2 border-[#0DA2E7] text-[#0DA2E7] hover:bg-[#0DA2E7] hover:text-white hover:scale-105'
        } focus:outline-none focus:ring-2 focus:ring-[#0DA2E7] focus:ring-offset-2`}
        aria-label={`${plan.ctaText} for ${plan.name}`}
      >
        <HiOutlineCalendar className="w-4 h-4" aria-hidden="true" />
        {plan.ctaText}
      </button>

      {/* Hidden Schema Data */}
      <meta itemProp="description" content={plan.seoDesc} />
      <meta itemProp="category" content="School Management Software" />
      {plan.price !== 'Custom' && (
        <>
          <meta itemProp="priceCurrency" content="INR" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </>
      )}
    </motion.div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Pricing() {
  const router = useRouter();

  const handleBookDemo = useCallback((planSlug) => {
    router.push(`/demo?plan=${planSlug}`);
  }, [router]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "School ERP Pricing Plans",
            "description": "Affordable school ERP pricing plans for schools of all sizes.",
            "itemListElement": plans.map((plan, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": plan.seoTitle,
                "description": plan.seoDesc,
                "offers": {
                  "@type": "Offer",
                  "price": plan.price === 'Custom' ? "0" : plan.price.replace(',', ''),
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": `https://www.connectskool.com/demo?plan=${plan.slug}`
                }
              }
            }))
          })
        }}
      />

      {/* FAQ Schema - Optional but helpful */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the school ERP pricing plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ConnectSkool offers three pricing plans: Dashboard Plan at ₹10,000/year, Mobile App Plan at ₹15,000/year, and Custom Plan for large schools. All plans include free onboarding and data migration."
                }
              },
              {
                "@type": "Question",
                "name": "How much does ConnectSkool school ERP cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ConnectSkool pricing starts from ₹10,000 per year for the Dashboard Plan and ₹15,000 per year for the Mobile App Plan. Custom pricing is available for larger institutions."
                }
              }
            ]
          })
        }}
      />

      <section 
        className="py-20 md:py-30 bg-gradient-to-b from-slate-50 to-white"
        aria-labelledby="pricing-heading"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0DA2E7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA2E7]" aria-hidden="true" />
              Pricing
            </div>
            <h2 
              id="pricing-heading"
              className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1E4E6D]"
            >
              Choose Your <span className="text-[#0DA2E7]">Plan</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Simple pricing designed for schools of all sizes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Pricing plans">
            {plans.map((plan, index) => (
              <PricingCard 
                key={plan.slug} 
                plan={plan} 
                index={index} 
                onBookDemo={handleBookDemo} 
              />
            ))}
          </div>

          {/* Extra Pricing */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Additional students will be charged{' '}
              <span className="font-semibold text-[#1E4E6D]">₹10–₹12 per student/month</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              * All plans include free onboarding and data migration
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA2E7]" aria-hidden="true" />
              No hidden costs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA2E7]" aria-hidden="true" />
              Free onboarding
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA2E7]" aria-hidden="true" />
              Data migration included
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0DA2E7]" aria-hidden="true" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>
    </>
  );
}