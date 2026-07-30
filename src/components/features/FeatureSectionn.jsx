'use client'

import { motion } from 'framer-motion'
import Card from '../shared/Card'
import {
  HiOutlineBell,
  HiOutlineBookOpen,
  HiOutlineCreditCard,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentList,
  HiOutlineAcademicCap,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineShieldCheck
} from 'react-icons/hi2'

// ─── FEATURES DATA WITH AI-OPTIMIZED SCHEMA ──────────────────────────────
// Each feature now includes structured data for better AI understanding
const features = [
  {
    title: 'Attendance System',
    desc: 'Biometric and app-based attendance for students and staff with real-time tracking and automated reports.',
    icon: HiOutlineClipboardDocumentList,
    category: 'Attendance',
    seoTitle: 'School Attendance Management System',
    seoDesc: 'Biometric and mobile app-based attendance tracking with real-time reports and parent notifications.',
    schema: {
      '@type': 'Service',
      name: 'School Attendance Management System',
      description: 'Biometric and mobile app-based attendance tracking with real-time reports and parent notifications.',
      category: 'Attendance Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Fee Management',
    desc: 'Complete fee lifecycle management with online payments, auto receipts, due reminders and financial dashboards.',
    icon: HiOutlineCreditCard,
    category: 'Finance',
    seoTitle: 'School Fee Management Software',
    seoDesc: 'Complete fee collection with online payments, automated receipts, overdue alerts, and financial reconciliation.',
    schema: {
      '@type': 'Service',
      name: 'School Fee Management Software',
      description: 'Complete fee collection with online payments, automated receipts, overdue alerts, and financial reconciliation.',
      category: 'Fee Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Exam Management',
    desc: 'Create exams, manage marks, auto-generate report cards and analyze performance trends across classes.',
    icon: HiOutlineBookOpen,
    category: 'Exams',
    seoTitle: 'School Exam Management System',
    seoDesc: 'Create exams, manage marks, auto-generate report cards, and analyze student performance trends.',
    schema: {
      '@type': 'Service',
      name: 'School Exam Management System',
      description: 'Create exams, manage marks, auto-generate report cards, and analyze student performance trends.',
      category: 'Exam Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Student Management',
    desc: 'Digital student profiles with enrollment history, academic records, promotion tracking and document vault.',
    icon: HiOutlineUserGroup,
    category: 'Students',
    seoTitle: 'Student Management System',
    seoDesc: 'Digital student profiles with enrollment history, academic records, promotion tracking, and secure document storage.',
    schema: {
      '@type': 'Service',
      name: 'Student Management System',
      description: 'Digital student profiles with enrollment history, academic records, promotion tracking, and secure document storage.',
      category: 'Student Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Communication Hub',
    desc: 'Instant notifications, SMS, email alerts and parent messaging with delivery tracking from one unified platform.',
    icon: HiOutlineBell,
    category: 'Communication',
    seoTitle: 'School Communication System',
    seoDesc: 'Unified communication platform with SMS, email, and parent messaging with delivery tracking and analytics.',
    schema: {
      '@type': 'Service',
      name: 'School Communication System',
      description: 'Unified communication platform with SMS, email, and parent messaging with delivery tracking and analytics.',
      category: 'School Communication',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Transport System',
    desc: 'GPS-enabled route planning, vehicle tracking, driver management and transport fee integration.',
    icon: HiOutlineTruck,
    category: 'Transport',
    seoTitle: 'School Transport Management System',
    seoDesc: 'GPS-enabled transport management with route planning, vehicle tracking, driver management, and fee integration.',
    schema: {
      '@type': 'Service',
      name: 'School Transport Management System',
      description: 'GPS-enabled transport management with route planning, vehicle tracking, driver management, and fee integration.',
      category: 'Transport Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Academic Reports',
    desc: 'Comprehensive analytics with performance trends, progress tracking and actionable insights for educators.',
    icon: HiOutlineChartBar,
    category: 'Analytics',
    seoTitle: 'School Academic Analytics',
    seoDesc: 'Comprehensive academic analytics with performance trends, progress tracking, and actionable insights for educators.',
    schema: {
      '@type': 'Service',
      name: 'School Academic Analytics',
      description: 'Comprehensive academic analytics with performance trends, progress tracking, and actionable insights for educators.',
      category: 'Academic Analytics',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Staff Management',
    desc: 'Staff records, attendance tracking, payroll processing, leave management and performance reviews.',
    icon: HiOutlineAcademicCap,
    category: 'Staff',
    seoTitle: 'School Staff Management System',
    seoDesc: 'Complete staff management with records, attendance, payroll, leave management, and performance reviews.',
    schema: {
      '@type': 'Service',
      name: 'School Staff Management System',
      description: 'Complete staff management with records, attendance, payroll, leave management, and performance reviews.',
      category: 'Staff Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Settings and Config',
    desc: 'Customizable workflows, role access control, branding options and system configuration tools.',
    icon: HiOutlineCog6Tooth,
    category: 'Configuration',
    seoTitle: 'School ERP Configuration',
    seoDesc: 'Customizable workflows, role-based access control, branding options, and system configuration tools.',
    schema: {
      '@type': 'Service',
      name: 'School ERP Configuration',
      description: 'Customizable workflows, role-based access control, branding options, and system configuration tools.',
      category: 'System Configuration',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Online Portal',
    desc: 'Self-service portal for students and parents to access results, attendance, fees and announcements.',
    icon: HiOutlineGlobeAlt,
    category: 'Portal',
    seoTitle: 'School Parent Student Portal',
    seoDesc: 'Self-service portal for students and parents to access results, attendance, fees, and announcements.',
    schema: {
      '@type': 'Service',
      name: 'School Parent Student Portal',
      description: 'Self-service portal for students and parents to access results, attendance, fees, and announcements.',
      category: 'Parent Portal',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Document Management',
    desc: 'Digital document storage, certificate generation, bulk printing and template management system.',
    icon: HiOutlineDocumentText,
    category: 'Documents',
    seoTitle: 'School Document Management System',
    seoDesc: 'Digital document storage, certificate generation, bulk printing, and template management for schools.',
    schema: {
      '@type': 'Service',
      name: 'School Document Management System',
      description: 'Digital document storage, certificate generation, bulk printing, and template management for schools.',
      category: 'Document Management',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
  {
    title: 'Security and Access',
    desc: 'Role-based access control, data encryption, audit logs and compliance-ready security features.',
    icon: HiOutlineShieldCheck,
    category: 'Security',
    seoTitle: 'School ERP Security Features',
    seoDesc: 'Role-based access control, data encryption, audit logs, and compliance-ready security features.',
    schema: {
      '@type': 'Service',
      name: 'School ERP Security Features',
      description: 'Role-based access control, data encryption, audit logs, and compliance-ready security features.',
      category: 'Security',
      provider: { '@type': 'Organization', name: 'ConnectSkool' }
    }
  },
]

// ─── FEATURE CARD COMPONENT ──────────────────────────────────────────────
function FeatureCard({ feature, index }) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="h-full"
      itemScope
      itemType="https://schema.org/Service"
    >
      <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Hidden Schema Data - Improves AI visibility */}
        <meta itemProp="name" content={feature.seoTitle} />
        <meta itemProp="description" content={feature.seoDesc} />
        <meta itemProp="category" content={feature.category} />
        <meta itemProp="provider" content="ConnectSkool" />

        {/* Category Badge */}
        <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-wider text-[#F0970A]">
          {feature.category}
        </span>

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F0970A] transition-all duration-300 group-hover:bg-[#F0970A] group-hover:text-white">
          <Icon size={24} aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1E4E6D] transition-colors duration-300 group-hover:text-[#F0970A]">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {feature.desc}
        </p>

        {/* Visual Indicator of Feature Category */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <span className="h-1 w-1 rounded-full bg-[#F0970A]" />
          {feature.category} Module
        </div>
      </Card>
    </motion.div>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────
function Features() {
  return (
    <section 
      className="section-gap py-16 md:py-24 bg-gradient-to-b from-white to-[#F8F9FC]"
      aria-labelledby="features-heading"
    >
      <div className="container-shell mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F0970A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0970A]" aria-hidden="true" />
            All Features
          </div>
          <h1 
            id="features-heading"
            className="font-display text-4xl font-extrabold text-[#1E4E6D] sm:text-5xl"
          >
            Complete <span className="text-[#F0970A]">School ERP</span> Features
          </h1>
          <p className="section-subtitle mx-auto mt-3 max-w-2xl text-slate-500">
            Everything you need to manage your school efficiently — from attendance to analytics, all in one platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="School ERP features list"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
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
          <p className="text-sm text-slate-500">
            Ready to experience these features in action?
          </p>
          <a
            href="/demo"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05]"
            aria-label="Book a free demo of ConnectSkool features"
          >
            Book Free Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Features