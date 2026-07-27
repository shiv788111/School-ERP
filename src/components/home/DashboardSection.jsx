"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  Wallet,
  UserCircle,
  Monitor,
  Rocket,
  Target,
  Trophy,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// ─── THEME TOKENS ────────────────────────────────────────────────
const T = {
  bg: "#F8F9FC",
  navy: "#1E4E6D",
  navyDark: "#163A52",
  orange: "#F0970A",
  orangeLight: "#FEF3E2",
  orangeBorder: "#F0970A",
  white: "#FFFFFF",
  slate: "#5A6880",
  muted: "#8A96A8",
  border: "#E4E9F0",
};

// ─── SERVICES DATA ────────────────────────────────────────────────
const services = [
  {
    id: "001",
    title: "Hassle-free School Management",
    desc: "Easy-to-use interface with 40+ modules covering every school operation from admissions to alumni.",
    icon: Monitor,
    accent: "#EEF4FB",
    tag: "40+ Modules",
    seoTitle: "School Management Software - Complete ERP Solution",
    seoDesc: "Comprehensive school management system with 40+ modules covering admissions, attendance, fees, exams, and alumni management.",
    slug: "school-management-software",
  },
  {
    id: "002",
    title: "Student Competition Platform",
    desc: "Ground zero platform where unknown students compete on activities conducted by ConnectSkool group.",
    icon: Rocket,
    accent: "#FFF4E5",
    tag: "Live Contests",
    seoTitle: "Student Competition Platform - Online Contests for Students",
    seoDesc: "Online competition platform for students to participate in various activities, contests, and challenges organized by ConnectSkool.",
    slug: "student-competition-platform",
  },
  {
    id: "003",
    title: "Career Goal Tracking",
    desc: "Career Interest is the final destination. We prepare the circumstances for students to build their path smartly.",
    icon: Target,
    accent: "#EDFBF4",
    tag: "Career Mapping",
    seoTitle: "Career Goal Tracking Software for Students",
    seoDesc: "Smart career mapping and goal tracking platform that helps students identify career interests and build their professional path.",
    slug: "career-goal-tracking",
  },
  {
    id: "004",
    title: "Achievement & Awards",
    desc: "Recognise student milestones with digital certificates, leaderboards, and performance reports.",
    icon: Trophy,
    accent: "#F3EFFE",
    tag: "Recognition",
    seoTitle: "Student Achievement & Awards Management System",
    seoDesc: "Digital recognition platform for student achievements with certificates, leaderboards, and performance tracking reports.",
    slug: "achievement-awards-management",
  },
];

// ─── DASHBOARD ROLES DATA ─────────────────────────────────────────
const roles = [
  {
    title: "Admin Dashboard",
    desc: "Full school control with real-time analytics, staff management, and system-wide configuration tools.",
    icon: ShieldCheck,
    color: "#1E4E6D",
    lightBg: "#EEF4FB",
    seoTitle: "School Admin Dashboard",
    seoDesc: "Full-featured admin dashboard with real-time analytics, staff management, and complete school system configuration.",
  },
  {
    title: "Teacher Panel",
    desc: "Manage classes, record attendance, assign marks, and track student progress from one clean view.",
    icon: GraduationCap,
    color: "#0D7A5F",
    lightBg: "#EDFBF4",
    seoTitle: "Teacher Panel",
    seoDesc: "Complete teacher panel for managing classes, attendance, assignments, marks, and student progress tracking.",
  },
  {
    title: "Accountant View",
    desc: "Fee tracking, expense reports, salary management and complete financial overview at a glance.",
    icon: Wallet,
    color: "#B86C08",
    lightBg: "#FEF3E2",
    seoTitle: "School Accountant Dashboard",
    seoDesc: "Financial management dashboard for school accountants with fee tracking, expense reports, and salary management.",
  },
  {
    title: "Student Portal",
    desc: "View results, check attendance, submit assignments and stay updated with school announcements.",
    icon: UserCircle,
    color: "#6941C6",
    lightBg: "#F3EFFE",
    seoTitle: "Student Portal",
    seoDesc: "Student portal for viewing exam results, checking attendance, submitting assignments, and receiving school announcements.",
  },
];

// ─── SERVICE CARD ─────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);
  const handleFocus = useCallback(() => setHovered(true), []);
  const handleBlur = useCallback(() => setHovered(false), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 transition-all duration-200"
      style={{
        border: `2px solid ${hovered ? T.orange : T.border}`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(240,151,10,0.12)"
          : "0 2px 12px rgba(30,78,109,0.06)",
      }}
      role="article"
      aria-label={service.seoTitle}
    >
      {/* Number badge */}
      <span
        className="mb-5 font-mono text-[11px] font-semibold tracking-[2px] transition-colors duration-200"
        style={{ color: hovered ? T.orange : T.muted }}
        aria-hidden="true"
      >
        ( {service.id} )
      </span>

      {/* Icon */}
      <div
        className="mb-[22px] flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-200"
        style={{
          background: hovered ? T.orange : service.accent,
        }}
        aria-hidden="true"
      >
        <Icon
          size={26}
          className="transition-colors duration-200"
          style={{ color: hovered ? "#fff" : T.navy }}
        />
      </div>

      {/* Title */}
      <h3
        className="mb-2.5 text-[17px] font-bold leading-[1.35] transition-colors duration-200"
        style={{ color: hovered ? T.orange : T.navy }}
      >
        {service.title}
      </h3>

      {/* Desc */}
      <p className="mb-5 flex-1 text-[13.5px] leading-relaxed" style={{ color: T.slate }}>
        {service.desc}
      </p>

      {/* Tag + Link */}
      <div className="flex items-center justify-between">
        <span
          className="rounded-full px-3 py-1 text-[11.5px] font-semibold transition-colors duration-200"
          style={{
            background: hovered ? T.orange : T.orangeLight,
            color: hovered ? "#fff" : "#B86C08",
          }}
        >
          {service.tag}
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:translate-x-1"
          style={{ color: hovered ? T.orange : T.muted }}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── DASHBOARD ROLE CARD (Selectable Cards - Not Tabs) ──────────
function RoleCard({ role, index, active, onClick }) {
  const Icon = role.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Select ${role.title} - ${role.seoTitle}`}
      aria-pressed={active}
      className="cursor-pointer rounded-2xl p-7 text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
      style={{
        background: active ? T.navy : T.white,
        border: `2px solid ${active ? T.orange : T.border}`,
        transform: active ? "translateY(-4px)" : "translateY(0)",
        boxShadow: active
          ? "0 12px 40px rgba(30,78,109,0.18)"
          : "0 2px 12px rgba(30,78,109,0.05)",
      }}
    >
      <div
        className="mx-auto mb-[18px] flex h-[60px] w-[60px] items-center justify-center rounded-2xl transition-colors duration-200"
        style={{
          background: active ? T.orange : role.lightBg,
        }}
        aria-hidden="true"
      >
        <Icon size={26} color={active ? "#fff" : role.color} />
      </div>
      <h3
        className="mb-2.5 text-[15px] font-bold transition-colors duration-200"
        style={{ color: active ? "#fff" : T.navy }}
      >
        {role.title}
      </h3>
      <p
        className="text-[13px] leading-relaxed transition-colors duration-200"
        style={{ color: active ? "rgba(255,255,255,0.72)" : T.slate }}
      >
        {role.desc}
      </p>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-orange-500/15 px-3 py-1 text-[12px] font-semibold text-[#F0970A]"
          aria-live="polite"
        >
          Active <ChevronRight size={12} aria-hidden="true" />
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── SECTION LABEL ────────────────────────────────────────────────
function SectionLabel({ text }) {
  return (
    <p
      className="mb-3 text-[11.5px] font-bold uppercase tracking-[2.5px] text-[#F0970A]"
      aria-hidden="true"
    >
      {text}
    </p>
  );
}

// ─── SERVICES SECTION ─────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="bg-[#F8F9FC] px-6 py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <SectionLabel text="Our Services" />
          <h2
            id="services-heading"
            className="mx-auto max-w-2xl text-[clamp(24px,4vw,36px)] font-extrabold leading-[1.25] text-[#1E4E6D]"
          >
            Complete School ERP Software for{" "}
            <span className="text-[#F0970A]">Every School</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-[#5A6880]">
            One powerful platform covering every corner of school management — from classrooms to careers.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2"
            aria-label="View all school management services"
          >
            Explore All Services <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── DASHBOARD SECTION ────────────────────────────────────────────
function DashboardSection() {
  const [activeRole, setActiveRole] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const handleRoleSelect = useCallback((index) => {
    setActiveRole(index);
  }, []);

  return (
    <section
      ref={ref}
      className="border-t border-[#E4E9F0] bg-white px-6 py-20"
      aria-labelledby="dashboard-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <SectionLabel text="Role-Based Dashboards" />
          <h2
            id="dashboard-heading"
            className="mx-auto max-w-2xl text-[clamp(24px,4vw,34px)] font-extrabold leading-[1.25] text-[#1E4E6D]"
          >
            Tailored Experience for{" "}
            <span className="text-[#F0970A]">Every User</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#5A6880]">
            Each role gets their own smart dashboard — no clutter, just the tools they need.
          </p>
        </motion.div>

        {/* Role Cards - Selectable Cards, Not Tabs */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          role="group"
          aria-label="Dashboard roles"
        >
          {roles.map((role, i) => (
            <RoleCard
              key={role.title}
              role={role}
              index={i}
              active={activeRole === i}
              onClick={() => handleRoleSelect(i)}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-[#1E4E6D] px-9 py-8"
        >
          <div>
            <p className="mb-1 text-[13px] text-white/60">Ready to transform your school?</p>
            <h3 className="text-[20px] font-bold text-white">Get started with ConnectSkool today</h3>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F0970A] px-7 py-3 text-[14px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
            aria-label="Request a demo for ConnectSkool school management software"
          >
            Book Free Demo <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── DEFAULT EXPORT ──────────────────────────────────────────────
export default function ConnectSkoolSections() {
  return (
    <main className="font-sans" style={{ background: T.bg }}>
      <ServicesSection />
      <DashboardSection />
    </main>
  );
}