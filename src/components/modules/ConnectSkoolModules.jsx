'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// ── DATA ─────────────────────────────────────────────────────────────────────
const statusConfig = {
  yes: { bg: 'bg-emerald-500', label: 'Available', ariaLabel: 'Fully available in ConnectSkool' },
  no: { bg: 'bg-rose-400', label: 'Not Available', ariaLabel: 'Not available in ConnectSkool' },
  basic: { bg: 'bg-amber-500', label: 'Basic Version', ariaLabel: 'Basic version available in ConnectSkool' },
  advanced: { bg: 'bg-sky-500', label: 'Advanced Version', ariaLabel: 'Advanced version available in ConnectSkool' },
  multi: { bg: 'bg-violet-500', label: 'Multiple Apps', ariaLabel: 'Multiple app versions available in ConnectSkool' },
};

const modules = [
  {
    id: 'platform',
    label: 'Platform',
    icon: '☁️',
    description: 'Enterprise-grade cloud-based school management platform with 99.78% uptime and 256-bit encryption.',
    longDescription: 'ConnectSkool Platform provides a secure, reliable, and scalable foundation for all school operations. Built on modern cloud architecture, it eliminates the need for physical servers while ensuring data security and continuous availability.',
    features: [
      { name: 'Cloud-Based Online System', next: 'yes', other: 'yes' },
      { name: 'Secure & Reliable (99.78% Uptime) with 256-Bit Encryption', next: 'yes', other: 'basic' },
      { name: 'No Physical Server Needed', next: 'yes', other: 'no' },
      { name: 'Single Platform for all School Operations', next: 'yes', other: 'multi' },
      { name: 'Future-Ready Architecture', next: 'yes', other: 'basic' },
      { name: 'Expert-Driven R&D for Continuous Innovation', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'Cloud-Based School Management Platform | ConnectSkool ERP',
    seoDesc: 'Enterprise-grade cloud school management platform with 99.78% uptime, 256-bit encryption, and future-ready architecture for modern educational institutions.',
  },
  {
    id: 'support',
    label: 'Support',
    icon: '🎧',
    description: 'Dedicated multi-channel support system with 24/7 assistance and comprehensive knowledge base.',
    longDescription: 'ConnectSkool offers industry-leading support with multiple communication channels, dedicated team, and a comprehensive knowledge base to ensure smooth operations at all times.',
    features: [
      { name: 'Dedicated Support Team', next: 'yes', other: 'yes' },
      { name: 'Toll-Free, Email, and WhatsApp Support', next: 'yes', other: 'yes' },
      { name: 'In-App Ticketing System for Quick Issue Resolution', next: 'yes', other: 'basic' },
      { name: 'Continuous Training & Guidance', next: 'yes', other: 'basic' },
      { name: 'QC-Assured Implementation', next: 'yes', other: 'no' },
      { name: 'Comprehensive Knowledge Base & FAQs', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School ERP Support System | 24/7 Multi-Channel Support',
    seoDesc: 'Get 24/7 dedicated support for your school ERP with toll-free, email, WhatsApp, and in-app ticketing system for quick issue resolution.',
  },
  {
    id: 'common',
    label: 'Common Features',
    icon: '⚙️',
    description: 'Essential cross-module features including self-configuration, comprehensive reporting, and secure transactions.',
    longDescription: 'ConnectSkool provides a unified set of common features that work seamlessly across all modules, ensuring consistency, security, and ease of use throughout the platform.',
    features: [
      { name: 'Self-Configuration System with 24/7 Help Center Access', next: 'yes', other: 'basic' },
      { name: 'Comprehensive Reports Across All Modules', next: 'yes', other: 'basic' },
      { name: 'Secure & Dedicated Allocation for Settings & Transactions', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School ERP Common Features | Self-Configuration & Reporting',
    seoDesc: 'Discover ConnectSkool common features including self-configuration, comprehensive reporting, and secure transactions across all modules.',
  },
  {
    id: 'admission',
    label: 'Admission',
    icon: '🚪',
    description: 'Complete admission management with multi-tier processes, online and walk-in support, and smart lead tracking.',
    longDescription: 'ConnectSkool Admission Management streamlines the entire student admission process from inquiry to enrollment. With multi-tier workflows, automated follow-ups, and centralized management for multi-branch institutions, admissions become efficient and error-free.',
    features: [
      { name: 'Multi-Tier Admission Process with Year-Round Sequence', next: 'yes', other: 'basic' },
      { name: 'Walk-In & Online Admissions Assistance', next: 'yes', other: 'yes' },
      { name: 'Centralised Admissions Support for Multi-Branch Institutions', next: 'yes', other: 'no' },
      { name: 'Smart Follow-up and Lead Tracking', next: 'yes', other: 'basic' },
      { name: 'Admission Counsellor Tracking', next: 'yes', other: 'basic' },
      { name: 'Customised Admission Forms for Flexibility', next: 'yes', other: 'basic' },
      { name: 'Effective Bulk Admissions Upload for Efficiency', next: 'yes', other: 'no' },
      { name: 'Advance Fee Collection during Admission', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Admission Management Software | ConnectSkool ERP',
    seoDesc: 'Streamline student admissions with ConnectSkool\'s multi-tier admission management, online and walk-in support, and smart lead tracking for schools.',
  },
  {
    id: 'fee',
    label: 'Fee',
    icon: '💳',
    description: 'Comprehensive fee management with flexible structures, online/offline collection, and 45+ financial reports.',
    longDescription: 'ConnectSkool Fee Management provides a complete solution for school fee collection, tracking, and reconciliation. With flexible fee structures, multiple payment options, and comprehensive reporting, financial management becomes effortless.',
    features: [
      { name: 'Flexible Fee Structures', next: 'yes', other: 'basic' },
      { name: 'Online & Offline Fee Collection', next: 'yes', other: 'yes' },
      { name: 'Concessions, Fines & Adjustments', next: 'yes', other: 'basic' },
      { name: 'Custom Receipts & Challans', next: 'yes', other: 'basic' },
      { name: 'Multi-Bank Payment Split', next: 'yes', other: 'no' },
      { name: 'Defaulter Tracking & Reminders', next: 'yes', other: 'basic' },
      { name: 'Refund Processing', next: 'yes', other: 'basic' },
      { name: 'Sibling Discounts Management', next: 'yes', other: 'basic' },
      { name: '45+ Fee Reports', next: 'yes', other: 'basic' },
      { name: 'Integration with Accounts & Payroll', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School Fee Management Software | Online Fee Collection',
    seoDesc: 'Manage school fees efficiently with ConnectSkool\'s fee management software. Features include online/offline collection, flexible structures, and 45+ financial reports.',
  },
  {
    id: 'transport',
    label: 'Transport',
    icon: '🚌',
    description: 'Smart transport management with GPS tracking, route optimization, and real-time parent notifications.',
    longDescription: 'ConnectSkool Transport Management revolutionizes school transportation with GPS tracking, route optimization, and real-time notifications. Ensure student safety and operational efficiency with our comprehensive transport solution.',
    features: [
      { name: 'Multi-Route Management', next: 'yes', other: 'basic' },
      { name: 'GPS Tracking Integration', next: 'yes', other: 'advanced' },
      { name: 'NFC Attendance on Bus', next: 'yes', other: 'no' },
      { name: 'Fuel & Maintenance Logs', next: 'yes', other: 'basic' },
      { name: 'Parent Notifications for Bus Tracking', next: 'yes', other: 'basic' },
      { name: 'Unified Transport App', next: 'yes', other: 'multi' },
    ],
    seoTitle: 'School Transport Management Software | GPS Tracking',
    seoDesc: 'Optimize school transport with ConnectSkool\'s GPS tracking, route management, and real-time parent notifications for enhanced student safety.',
  },
  {
    id: 'accounts',
    label: 'Accounts',
    icon: '📊',
    description: 'Complete financial management with Chart of Accounts, voucher management, and Tally integration.',
    longDescription: 'ConnectSkool Accounts Management provides comprehensive financial tools for schools, including Chart of Accounts, voucher management, and seamless Tally integration for complete financial visibility.',
    features: [
      { name: 'Chart of Accounts (COA)', next: 'yes', other: 'basic' },
      { name: 'Voucher Management', next: 'yes', other: 'basic' },
      { name: 'Daybook & P&L Reports', next: 'yes', other: 'basic' },
      { name: 'Tally Integration', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School Accounting Software | Tally Integration',
    seoDesc: 'Manage school finances with ConnectSkool\'s accounting software featuring Chart of Accounts, voucher management, and seamless Tally integration.',
  },
  {
    id: 'examination',
    label: 'Examination',
    icon: '📝',
    description: 'Comprehensive exam management with smart grading, instant report cards, and 100+ report card templates.',
    longDescription: 'ConnectSkool Examination Management simplifies the entire exam lifecycle from creation to result generation. With smart grading, automated report cards, and performance tracking, schools can manage exams efficiently.',
    features: [
      { name: 'Smart Academic Management', next: 'yes', other: 'basic' },
      { name: 'Custom Grading System', next: 'yes', other: 'basic' },
      { name: 'Instant Report Cards', next: 'yes', other: 'basic' },
      { name: '100+ Report Card Templates', next: 'yes', other: 'no' },
      { name: 'Automated Supplementary Exams', next: 'yes', other: 'no' },
      { name: 'Year-wise Performance Tracking', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Exam Management Software | Automated Report Cards',
    seoDesc: 'Streamline school examinations with ConnectSkool\'s exam management software featuring smart grading, instant report cards, and 100+ templates.',
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: '💬',
    description: 'Unified communication platform with SMS, Email, WhatsApp, and push notifications.',
    longDescription: 'ConnectSkool Communication Hub provides a unified platform for all school communications. With SMS, email, WhatsApp, and push notifications, schools can reach parents, teachers, and students instantly.',
    features: [
      { name: 'SMS / Email / WhatsApp / Push Notifications', next: 'yes', other: 'basic' },
      { name: 'DLT Enabled Messaging', next: 'yes', other: 'no' },
      { name: 'Smart Compose with 100+ Templates', next: 'yes', other: 'basic' },
      { name: 'Custom Forms Builder', next: 'yes', other: 'no' },
      { name: 'Surveys & Feedback System', next: 'yes', other: 'basic' },
      { name: 'Route-Based Messaging', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School Communication System | SMS & WhatsApp Integration',
    seoDesc: 'Enhance school communication with ConnectSkool\'s unified platform featuring SMS, email, WhatsApp, and push notifications for instant reach.',
  },
  {
    id: 'student',
    label: 'Student',
    icon: '🎓',
    description: 'Complete student lifecycle management with 360° profiles, QR ID cards, and document storage.',
    longDescription: 'ConnectSkool Student Management provides a comprehensive 360° view of each student. From enrollment to graduation, all academic and personal information is stored securely in one place.',
    features: [
      { name: '360° Student Profile (Academic + Personal)', next: 'yes', other: 'basic' },
      { name: 'QR/Barcode ID Cards', next: 'yes', other: 'basic' },
      { name: 'Document Storage', next: 'yes', other: 'basic' },
      { name: 'Discipline & Incident Tracking', next: 'yes', other: 'no' },
      { name: 'Wellness Records', next: 'yes', other: 'no' },
      { name: 'Sibling Mapping', next: 'yes', other: 'no' },
    ],
    seoTitle: 'Student Management System | 360° Student Profiles',
    seoDesc: 'Manage student lifecycle with ConnectSkool\'s student management system featuring 360° profiles, QR ID cards, and secure document storage.',
  },
  {
    id: 'staff',
    label: 'Staff',
    icon: '👩‍🏫',
    description: 'Complete staff and HR management with 360° profiles, HRMS portal, and competency mapping.',
    longDescription: 'ConnectSkool Staff Management provides comprehensive HR tools for educational institutions. From recruitment to retirement, all staff information is managed efficiently with our HRMS portal.',
    features: [
      { name: '360° Staff Profile', next: 'yes', other: 'basic' },
      { name: 'Barcode ID Cards', next: 'yes', other: 'basic' },
      { name: 'HRMS Portal', next: 'yes', other: 'no' },
      { name: 'Competency Mapping', next: 'yes', other: 'no' },
      { name: 'Hierarchy Management', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'Staff Management System | HRMS for Schools',
    seoDesc: 'Manage school staff efficiently with ConnectSkool\'s HR management system featuring 360° profiles, competency mapping, and HRMS portal.',
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: '📋',
    description: 'Smart attendance tracking with biometric, RFID, geo-facial, and mobile-based methods.',
    longDescription: 'ConnectSkool Attendance Management offers multiple attendance tracking methods including biometric, RFID, geo-facial recognition, and mobile-based tracking for comprehensive coverage.',
    features: [
      { name: 'Mobile-Based Attendance', next: 'yes', other: 'basic' },
      { name: 'Biometric / RFID / Gate Integration', next: 'yes', other: 'advanced' },
      { name: 'Geo-Facial Attendance', next: 'yes', other: 'no' },
      { name: 'Period-Wise Tracking', next: 'yes', other: 'basic' },
      { name: 'Automated Calculations', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Attendance Management | Biometric & RFID',
    seoDesc: 'Track student and staff attendance with ConnectSkool\'s smart attendance system featuring biometric, RFID, geo-facial, and mobile-based tracking.',
  },
  {
    id: 'leave',
    label: 'Leave',
    icon: '🏖️',
    description: 'Complete leave management with custom policies, encashment, and app-based approvals.',
    longDescription: 'ConnectSkool Leave Management simplifies staff leave tracking with custom policies, encashment options, and easy app-based approval workflows.',
    features: [
      { name: 'Custom Leave Policies', next: 'yes', other: 'basic' },
      { name: 'Leave Encashment', next: 'yes', other: 'no' },
      { name: 'App-Based Approval System', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Leave Management Software | Custom Policies',
    seoDesc: 'Simplify staff leave management with ConnectSkool\'s leave management software featuring custom policies, encashment, and app-based approvals.',
  },
  {
    id: 'frontoffice',
    label: 'Front Office',
    icon: '🏢',
    description: 'Front office and visitor management with OTP-based entry/exit and security guard mobile app.',
    longDescription: 'ConnectSkool Front Office Management enhances school security with visitor management, OTP-based entry/exit, and a dedicated security guard mobile app.',
    features: [
      { name: 'Visitor Management', next: 'yes', other: 'basic' },
      { name: 'OTP-Based Entry/Exit', next: 'yes', other: 'no' },
      { name: 'Security Guard Mobile App', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School Visitor Management System | Front Office Software',
    seoDesc: 'Enhance school security with ConnectSkool\'s visitor management system featuring OTP-based entry/exit and security guard mobile app.',
  },
  {
    id: 'library',
    label: 'Library',
    icon: '📚',
    description: 'Digital library management with barcode-based book management and online catalog access.',
    longDescription: 'ConnectSkool Library Management digitizes school libraries with barcode-based book tracking, issue/return management, and online catalog access for students.',
    features: [
      { name: 'Barcode-Based Book Management', next: 'yes', other: 'basic' },
      { name: 'Issue & Return Tracking', next: 'yes', other: 'basic' },
      { name: 'ISBN Auto Fetch', next: 'yes', other: 'no' },
      { name: 'Online Library Access', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School Library Management Software | Digital Library',
    seoDesc: 'Manage school libraries digitally with ConnectSkool\'s library management software featuring barcode-based tracking and online catalog access.',
  },
  {
    id: 'timetable',
    label: 'Timetable',
    icon: '📅',
    description: 'Smart timetable generation with auto/ manual options and substitution management.',
    longDescription: 'ConnectSkool Timetable Management simplifies schedule creation with auto and manual generation options, substitution management, and flexible adjustments.',
    features: [
      { name: 'Auto & Manual Timetable Generation', next: 'yes', other: 'basic' },
      { name: 'aSc Integration', next: 'yes', other: 'no' },
      { name: 'Proxy / Substitution Management', next: 'yes', other: 'no' },
      { name: 'Permanent & Adhoc Adjustments', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Timetable Software | Auto Schedule Generation',
    seoDesc: 'Create school timetables easily with ConnectSkool\'s timetable software featuring auto/manual generation and substitution management.',
  },
  {
    id: 'projectmgmt',
    label: 'Project Management',
    icon: '📌',
    description: 'Project and task management with role assignment and progress tracking.',
    longDescription: 'ConnectSkool Project Management provides tools for task assignment, project tracking, and role-based access to ensure efficient project execution.',
    features: [
      { name: 'Task Management', next: 'yes', other: 'basic' },
      { name: 'Project Tracking', next: 'yes', other: 'basic' },
      { name: 'Role Assignment', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Project Management Software | Task Tracking',
    seoDesc: 'Manage school projects and tasks with ConnectSkool\'s project management software featuring task tracking, role assignment, and progress monitoring.',
  },
  {
    id: 'ticketmgmt',
    label: 'Ticket Management',
    icon: '🎫',
    description: 'Complaint and issue tracking with feedback system and resolution management.',
    longDescription: 'ConnectSkool Ticket Management streamlines complaint resolution with issue tracking, feedback collection, and efficient resolution workflows.',
    features: [
      { name: 'Complaint Management', next: 'yes', other: 'basic' },
      { name: 'Issue Tracking', next: 'yes', other: 'basic' },
      { name: 'Feedback System', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'School Complaint Management Software | Issue Tracking',
    seoDesc: 'Streamline school complaint resolution with ConnectSkool\'s ticket management software featuring issue tracking and feedback collection.',
  },
  {
    id: 'addon',
    label: 'Add-On Integration',
    icon: '🔌',
    description: 'Third-party integrations including RFID, biometric, GPS, and payment gateways.',
    longDescription: 'ConnectSkool Add-On Integration enables seamless connection with third-party systems including RFID, biometric devices, GPS tracking, and payment gateways.',
    features: [
      { name: 'RFID / Biometric / Face Recognition', next: 'yes', other: 'advanced' },
      { name: 'GPS Tracking Integration', next: 'yes', other: 'advanced' },
      { name: 'Payment Gateway Integration', next: 'yes', other: 'basic' },
      { name: 'Tally Integration', next: 'yes', other: 'no' },
      { name: 'Geo-Facial Attendance', next: 'yes', other: 'no' },
    ],
    seoTitle: 'School ERP Integrations | RFID & Biometric',
    seoDesc: 'Connect third-party systems with ConnectSkool including RFID, biometric, GPS tracking, and payment gateway integrations.',
  },
  {
    id: 'workspace',
    label: 'Teacher & Student Workspace',
    icon: '💻',
    description: 'Digital workspace with course planning, live classes, and SCORM integration.',
    longDescription: 'ConnectSkool Workspace provides a comprehensive digital learning environment with course planning, live classes, homework tracking, and SCORM integration for modern education.',
    features: [
      { name: 'Course & Lesson Planning', next: 'yes', other: 'basic' },
      { name: 'Resource Library', next: 'yes', other: 'basic' },
      { name: 'Homework Tracking', next: 'yes', other: 'basic' },
      { name: 'Live Classes (Meet, Zoom, Teams)', next: 'yes', other: 'multi' },
      { name: 'Auto Lecture Recording', next: 'yes', other: 'no' },
      { name: 'SCORM / LTI / G-Suite Integration', next: 'yes', other: 'no' },
      { name: 'Q&A Forum', next: 'yes', other: 'basic' },
      { name: 'Academic Reports', next: 'yes', other: 'basic' },
    ],
    seoTitle: 'Teacher & Student Workspace | Digital Learning Platform',
    seoDesc: 'Empower teachers and students with ConnectSkool\'s digital workspace featuring course planning, live classes, homework tracking, and SCORM integration.',
  },
];

// ── STATUS DOT ────────────────────────────────────────────────────────────────
function Dot({ status }) {
  const cfg = statusConfig[status] || statusConfig.no;
  return (
    <span 
      className={`inline-block w-2.5 h-2.5 rounded-full ${cfg.bg} shadow-sm`} 
      title={cfg.label}
      aria-label={cfg.ariaLabel}
      role="img"
    />
  );
}

// ── SECTION TABLE ──
function ModuleSection({ mod, isActive }) {
  return (
    <div 
      id={`section-${mod.id}`} 
      className="mb-8 scroll-mt-20"
      role="region"
      aria-labelledby={`section-${mod.id}-title`}
    >
      {/* Section header */}
      <div className="flex items-center gap-2.5 mb-4 pb-1 border-b border-amber-200/50">
        <span className="text-3xl" aria-hidden="true">{mod.icon}</span>
        <h2 
          id={`section-${mod.id}-title`}
          className="text-base font-bold text-[#f0970a] tracking-tight"
        >
          {mod.label}
        </h2>
        <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full ml-2">
          {mod.features.length}
        </span>
      </div>

      {/* Description - SEO optimized */}
      <p className="text-sm text-gray-300 mb-1">{mod.description}</p>
      <p className="text-xs text-gray-400 mb-3">{mod.longDescription}</p>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-amber-100 bg-white shadow-sm">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_90px] bg-amber-50/80 border-b border-amber-100">
          <div className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Feature Name</div>
          <div className="px-3 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">ConnectSkool</div>
        </div>

        {/* Rows */}
        {mod.features.map((feat, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_90px] border-b border-amber-50 last:border-0 transition-colors ${
              i % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'
            } hover:bg-amber-50/60`}
          >
            <div className="px-4 py-2.5 text-[13px] text-gray-700 flex items-center">{feat.name}</div>
            <div className="px-3 py-2.5 flex items-center justify-center">
              <Dot status={feat.next} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ──
export default function ConnectSkoolModules() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const isClickScrolling = useRef(false);

  // Memoized total features count
  const totalFeatures = useMemo(() => {
    return modules.reduce((s, m) => s + m.features.length, 0);
  }, []);

  // Scroll spy — tracks which section is in view
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let current = modules[0].id;
      let minDistance = Infinity;
      const containerTop = container.getBoundingClientRect().top;

      for (const mod of modules) {
        const el = document.getElementById(`section-${mod.id}`);
        if (!el) continue;
        const elementTop = el.getBoundingClientRect().top;
        const distance = Math.abs(elementTop - containerTop);
        if (distance < minDistance) {
          minDistance = distance;
          current = mod.id;
        }
      }
      setActiveId(current);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep active sidebar item visible
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const activeBtn = sidebar.querySelector(`[data-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeId]);

  // Click sidebar → smooth scroll to section
  const scrollTo = useCallback((id) => {
    const container = contentRef.current;
    const el = document.getElementById(`section-${id}`);
    if (!container || !el) return;

    isClickScrolling.current = true;
    setActiveId(id);

    const containerTop = container.getBoundingClientRect().top;
    const elementTop = el.getBoundingClientRect().top;
    const scrollOffset = elementTop - containerTop + container.scrollTop;

    container.scrollTo({
      top: scrollOffset - 24,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  }, []);

  // Generate JSON-LD structured data for all modules
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ConnectSkool ERP Modules",
    "description": "Complete list of ConnectSkool ERP modules and features for school management",
    "itemListElement": modules.map((mod, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": mod.label,
      "description": mod.seoDesc,
      "url": `https://www.connectskool.com/modules#section-${mod.id}`,
      "numberOfItems": mod.features.length
    }))
  }), []);

  return (
    <>
      {/* Head section for SEO */}
      <Head>
        <title>ConnectSkool ERP Modules | 200+ School Management Features</title>
        <meta name="description" content="Explore ConnectSkool's complete ERP modules with 200+ features for attendance, fees, exams, transport, communication, and more. Cloud-based school management software." />
        <meta name="keywords" content="school erp modules, school management features, erp software features, school automation, attendance management, fee management, exam management" />
        <link rel="canonical" href="https://www.connectskool.com/modules" />
        <meta property="og:title" content="ConnectSkool ERP Modules | 200+ School Management Features" />
        <meta property="og:description" content="Complete school management ERP with 200+ features across 19 modules. Cloud-based, secure, and designed for modern educational institutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.connectskool.com/modules" />
        <meta property="og:image" content="/assets/og-modules.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ConnectSkool ERP Modules | 200+ School Management Features" />
        <meta name="twitter:description" content="Complete school management ERP with 200+ features across 19 modules. Cloud-based, secure, and designed for modern educational institutions." />
      </Head>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Additional FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What modules does ConnectSkool ERP offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ConnectSkool offers 19 modules including Platform, Support, Admission, Fee Management, Transport, Accounts, Examination, Communication, Student Management, Staff Management, Attendance, Leave, Front Office, Library, Timetable, Project Management, Ticket Management, Add-On Integration, and Teacher & Student Workspace."
                }
              },
              {
                "@type": "Question",
                "name": "How many features does ConnectSkool have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ConnectSkool offers 200+ curated features across all modules, covering every aspect of school management including attendance, fees, exams, transport, communication, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Is ConnectSkool cloud-based?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, ConnectSkool is a cloud-based school management platform with 99.78% uptime, 256-bit encryption, and no physical server needed. It's accessible from anywhere, anytime."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-[#F7F8FB] font-['Inter',system-ui,sans-serif]">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
              ConnectSkool <span className="text-[#F0A80A]">ERP</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
              200+ Curated Features Across 19 Modules — All in One Unified Platform.
            </p>
            <div className="flex justify-center items-center gap-3 mt-4 text-xs text-gray-400 bg-gray-50 px-4 py-2 rounded-full w-fit mx-auto">
              <span className="font-medium text-gray-600">{totalFeatures} features</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden="true"></span>
              <span>{modules.length} modules</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden="true"></span>
              <span className="text-emerald-600 font-medium">✓ 99.78% Uptime</span>
            </div>
          </div>
        </header>

        {/* Main 2-column layout */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-6">
            {/* LEFT SIDEBAR */}
            <aside
              ref={sidebarRef}
              className="w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto rounded-xl bg-[#F8F9FC] border border-gray-100 shadow-sm"
              aria-label="Module navigation"
            >
              <div className="p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-2 pb-3">
                  Module Names
                </div>
                <nav className="space-y-0.5" role="tablist" aria-label="ERP Modules">
                  {modules.map((mod) => {
                    const isActive = activeId === mod.id;
                    return (
                      <button
                        key={mod.id}
                        data-id={mod.id}
                        onClick={() => scrollTo(mod.id)}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`${mod.label} module with ${mod.features.length} features`}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all duration-200 text-sm font-medium ${
                          isActive
                            ? 'bg-amber-100 text-amber-800 shadow-sm ring-1 ring-amber-200'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2`}
                      >
                        <span className="text-lg leading-none" aria-hidden="true">{mod.icon}</span>
                        <span className="leading-tight">{mod.label}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main 
              ref={contentRef} 
              className="flex-1 overflow-y-auto h-[calc(100vh-120px)] pr-2" 
              style={{ scrollBehavior: 'smooth' }}
              role="tabpanel"
            >
              <div className="bg-[#204E6C] rounded-xl border border-amber-100 p-6 shadow-sm">
                {modules.map((mod) => (
                  <ModuleSection key={mod.id} mod={mod} isActive={activeId === mod.id} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}