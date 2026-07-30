'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiPlus, HiMinus } from 'react-icons/hi';

// ─── BENEFITS DATA ────────────────────────────────────────────────────────────
const benefits = [
  {
    id: 1,
    title: 'Smart E-Learning Ecosystem',
    description: 'ConnectSkool delivers a complete digital learning environment where classes, assignments, and study resources come together in one seamless platform. Students can attend live sessions, access recorded lectures, and download materials anytime. This ensures uninterrupted learning beyond classrooms, making education more flexible, accessible, and future-ready.',
    image: '/assets/benifitfeature1.webp',
    alt: 'Smart E-Learning Ecosystem - Online classes, assignments, and study resources dashboard'
  },
  {
    id: 2,
    title: 'Intelligent Assessment System',
    description: 'Simplify examinations with automated test creation, instant result generation, and performance analytics. Teachers can evaluate faster while reducing errors, and students receive timely feedback. ConnectSkool transforms traditional assessments into a smart, data-driven evaluation system.',
    image: '/assets/connect_skool_feature_3.webp',
    alt: 'Intelligent Assessment System - Automated test creation and result generation dashboard'
  },
  {
    id: 3,
    title: 'Real-Time Student Safety Tracking',
    description: 'Ensure complete student safety with live GPS tracking and instant alerts for school transport. Parents can monitor their child\'s journey in real time, while schools maintain full visibility over routes and vehicles. Safety becomes proactive, transparent, and reliable.',
    image: '/assets/benifitfeature3.webp',
    alt: 'Real-Time Student Safety Tracking - GPS tracking and instant alerts dashboard'
  },
  {
    id: 4,
    title: 'Effortless Attendance Management',
    description: 'Mark attendance digitally within seconds using mobile, web, or biometric systems. Automated reports, instant notifications, and real-time tracking eliminate manual work completely. Save time while maintaining accurate and transparent attendance records.',
    image: '/assets/benifitfeature4.webp',
    alt: 'Effortless Attendance Management - Digital attendance tracking dashboard'
  },
  {
    id: 5,
    title: 'One-Click Report Card Generation',
    description: 'Generate professional report cards instantly with automated grading and performance insights. Customize formats, include teacher remarks, and publish results with a single click. Reduce manual effort and deliver accurate academic reports effortlessly.',
    image: '/assets/benifitfeature5.webp',
    alt: 'One-Click Report Card Generation - Automated report card dashboard'
  },
  {
    id: 6,
    title: 'Automated Payroll & Finance',
    description: 'Manage salaries, deductions, and financial operations with complete automation and accuracy. Generate payslips, track expenses, and handle compliance without manual errors. ConnectSkool ensures smooth financial management for institutions.',
    image: '/assets/benifitfeature6.webp',
    alt: 'Automated Payroll & Finance - Salary and financial management dashboard'
  },
  {
    id: 7,
    title: 'Enhanced Parent Engagement',
    description: 'Keep parents actively involved with real-time updates, notifications, and direct communication channels. From attendance alerts to academic progress, everything is instantly accessible. Build stronger trust and transparency between schools and parents.',
    image: '/assets/benifitfeature7.webp',
    alt: 'Enhanced Parent Engagement - Real-time parent communication dashboard'
  },
  {
    id: 8,
    title: 'Simplified Administrative Workflow',
    description: 'Streamline admissions, records, and daily operations through a centralized dashboard. Automate repetitive tasks, reduce paperwork, and improve efficiency across departments. ConnectSkool helps institutions operate smarter and faster.',
    image: '/assets/connect_skool_1and5.avif',
    alt: 'Simplified Administrative Workflow - Centralized administration dashboard'
  },
  {
    id: 9,
    title: 'Fast & Seamless Communication',
    description: 'Enable instant communication between teachers, parents, and management through notifications, SMS, and in-app messaging. Ensure every update reaches the right audience at the right time. Communication becomes faster, clearer, and more effective.',
    image: '/assets/benifitfeature9.webp',
    alt: 'Fast & Seamless Communication - In-app messaging and notifications dashboard'
  },
  {
    id: 10,
    title: 'Smart Library Management',
    description: 'Digitally manage books, track inventory, and handle issue-return processes with ease. Students can browse catalogs and get notifications, while staff can maintain records efficiently. A modern library system for a smarter institution.',
    image: '/assets/benifitfeature10.webp',
    alt: 'Smart Library Management - Digital library management dashboard'
  },
  {
    id: 11,
    title: 'Reduced Workload & Time Saving',
    description: 'Automate routine tasks and eliminate manual processes across departments. Save valuable time, reduce workload, and improve overall productivity. Focus more on growth and quality education instead of administrative burden.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c2231a9b?w=800&q=80',
    alt: 'Reduced Workload & Time Saving - Automated task management dashboard'
  },
  {
    id: 12,
    title: 'Role-Based Personalized Access',
    description: 'Provide secure, role-specific dashboards tailored for students, teachers, parents, and administrators. Each user gets access to exactly what they need, ensuring better usability and data security across the platform.',
    image: '/assets/benifitfeature12.webp',
    alt: 'Role-Based Personalized Access - Role-specific dashboards for students, teachers, parents, and administrators'
  },
  {
    id: 13,
    title: 'Complete E-Learning Management',
    description: 'Manage the entire digital learning lifecycle from classes to assignments and results in one platform. Deliver structured learning experiences with full control and flexibility for both teachers and students.',
    image: '/assets/benifitfeature13.webp',
    alt: 'Complete E-Learning Management - Digital learning lifecycle management dashboard'
  },
  {
    id: 14,
    title: 'Cloud-Based & Always Accessible',
    description: 'Access your school system anytime, anywhere with secure cloud infrastructure. No installations, no maintenance — just seamless performance across devices with real-time data synchronization.',
    image: '/assets/benifitfeature14.webp',
    alt: 'Cloud-Based & Always Accessible - Cloud school management platform dashboard'
  },
  {
    id: 15,
    title: 'Dedicated Support & Helpdesk',
    description: 'Get continuous support from a dedicated team ensuring smooth operations at all times. From onboarding to troubleshooting, ConnectSkool provides reliable assistance so your system runs without interruptions.',
    image: '/assets/benifitfeature15.webp',
    alt: 'Dedicated Support & Helpdesk - 24/7 support and helpdesk dashboard'
  }
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function BenefitsSection() {
  const [activeId, setActiveId] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const visibleBenefits = showMore ? benefits : benefits.slice(0, 6);
  const activeBenefit = benefits.find((b) => b.id === activeId);

  return (
    <section 
      className="w-full py-20 px-4 md:px-8 lg:px-16 bg-[#f8f9fa]"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* ─── Header ─── */}
        <div className="mb-12 border-b pb-6">
          <span className="inline-block px-4 py-1.5 mb-3 text-[11px] font-bold tracking-[2px] uppercase text-[#F0A80A] bg-[#F0A80A]/10 rounded-full border border-[#F0A80A]/20">
            School ERP Benefits
          </span>
          <h2 
            id="benefits-heading"
            className="text-3xl md:text-4xl font-black text-[#1E4E6D] mb-2"
          >
            Powerful Benefits of <span className="text-[#F0A80A]">ConnectSkool</span>
          </h2>
          <p className="text-[#F0A80A] font-bold tracking-wide uppercase text-sm mb-4">
            Transforming School Operations with Smart Digital Solutions
          </p>
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            ConnectSkool ERP is designed to simplify, automate, and enhance every aspect of school management. 
            From academics to administration, our platform ensures efficiency, transparency, and seamless communication.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* ─── LEFT: Accordion List ─── */}
          <div className="w-full lg:w-3/5 space-y-2">
            {visibleBenefits.map((benefit) => (
              <div 
                key={benefit.id} 
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  activeId === benefit.id ? 'shadow-md border-l-4 border-[#F0A80A]' : 'border-b border-gray-100'
                }`}
              >
                <button
                  onClick={() => setActiveId(benefit.id)}
                  className={`w-full flex items-center justify-between py-4 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2 ${
                    activeId === benefit.id ? 'bg-white' : 'hover:bg-gray-50 bg-transparent'
                  }`}
                  aria-expanded={activeId === benefit.id}
                  aria-controls={`benefit-${benefit.id}-description`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                      activeId === benefit.id ? 'bg-[#F0A80A] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {benefit.id}
                    </span>
                    <span className={`text-left font-bold text-sm md:text-base ${
                      activeId === benefit.id ? 'text-[#F0A80A]' : 'text-gray-600'
                    }`}>
                      {benefit.title}
                    </span>
                  </div>
                  <div className={activeId === benefit.id ? 'text-[#F0A80A]' : 'text-gray-400'}>
                    {activeId === benefit.id ? <HiMinus size={20} aria-hidden="true" /> : <HiPlus size={20} aria-hidden="true" />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === benefit.id && (
                    <motion.div
                      id={`benefit-${benefit.id}-description`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                      style={{ backgroundColor: '#1F4E6D' }}
                    >
                      <div className="p-5 text-sm leading-relaxed text-white">
                        {benefit.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Show More / Show Less Button */}
            <div className="pt-6">
              <button 
                onClick={() => setShowMore(!showMore)}
                className="group flex items-center gap-2 bg-[#F0A80A] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#d89608] transition-all shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2"
                aria-expanded={showMore}
              >
                {showMore ? 'Show Less' : 'Show More Benefits'}
                <motion.span animate={{ rotate: showMore ? 180 : 0 }} aria-hidden="true">
                  <HiPlus />
                </motion.span>
              </button>
            </div>
          </div>

          {/* ─── RIGHT: Visual Preview ─── */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-white"
              >
                {isHydrated && (
                  <Image
                    src={activeBenefit?.image || '/assets/placeholder.webp'}
                    alt={activeBenefit?.alt || activeBenefit?.title || 'ConnectSkool benefit'}
                    width={600}
                    height={450}
                    className="w-full h-[450px] object-cover"
                    priority={activeId <= 3}
                    quality={85}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black text-xl leading-tight">
                    {activeBenefit?.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-6 flex justify-between items-center px-4">
              <div className="h-1 flex-1 bg-gray-200 rounded-full mr-4 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#F0A80A]"
                  animate={{ width: `${(activeId / 15) * 100}%` }}
                />
              </div>
              <span className="text-xs font-black text-[#1E4E6D]">
                {activeId.toString().padStart(2, '0')} / 15
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ─── JSON-LD STRUCTURED DATA ────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "ConnectSkool Benefits",
            "description": "List of benefits of using ConnectSkool ERP for school management",
            "itemListElement": benefits.map((benefit) => ({
              "@type": "ListItem",
              "position": benefit.id,
              "name": benefit.title,
              "description": benefit.description
            }))
          })
        }}
      />
    </section>
  );
}