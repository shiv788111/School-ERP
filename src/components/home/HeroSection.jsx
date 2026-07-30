'use client'

import { Shield, Users, Calculator, GraduationCap, ClipboardList, Wallet, ArrowRight } from "lucide-react";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load heavy components
const DemoPopModal = dynamic(
  () => import("../../views/demo/DemoPopModal"),
  { 
    ssr: false,
    loading: () => null
  }
);

const ErpOrbit = dynamic(
  () => import("../shared/ErpOrbit"),
  { 
    ssr: false,
    loading: () => <div className="w-64 h-64 bg-slate-800/50 rounded-full animate-pulse" aria-hidden="true" />
  }
);

// ─── MODULES DATA ────────────────────────────────────────────────────────────
const MODULES = [
  {
    id: "admin",
    label: "Admin",
    title: "Admin Control Center",
    desc: "Centralized access to manage all school operations, staff, and system settings.",
    icon: Shield,
    href: "https://connectskool-admin-dashboard.vercel.app/login", 
  },
  {
    id: "teacher",
    label: "Teacher",
    title: "Teacher Workspace",
    desc: "Plan lessons, track student progress, manage assignments, and communicate with parents.",
    icon: Users,
    href: "https://connectskool-admin-dashboard.vercel.app/login",
  },
  {
    id: "accountant",
    label: "Accountant",
    title: "Accounts & Ledger",
    desc: "Keep budgets, track expenses, manage fee collections, and generate financial reports.",
    icon: Calculator,
    href: "https://connectskool-admin-dashboard.vercel.app/login",
  },
  {
    id: "student",
    label: "Student",
    title: "Student Hub",
    desc: "Access profiles, attendance records, exam results, and learning resources.",
    icon: GraduationCap,
    href: "https://student-dashborad-sand.vercel.app/login",
  },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section 
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-600 text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs - decorative */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-80px] right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_45%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        {/* ── LEFT COLUMN ── */}
        <div className="relative z-10">
          {/* Heading - SEO Optimized */}
          <h1 id="hero-heading" className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Complete School ERP Software to{" "}
            <span className="bg-gradient-to-r from-[#F0970A] to-[#F0970A] bg-clip-text text-transparent">
              Run Your School Smarter
            </span>
          </h1>

          {/* Subtext - SEO Optimized */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            ConnectSkool is a comprehensive School ERP Software that helps schools manage admissions, 
            attendance, fee collection, examinations, transport, staff management, and parent communication 
            from a single platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Book a free demo of ConnectSkool School ERP"
              className="flex items-center gap-2 rounded-full bg-[#F0970A] px-6 py-3 text-sm font-semibold text-white border-2 border-[#F0970A] shadow-lg shadow-[#F0970A]/30 transition-all duration-300 ease-out hover:bg-white hover:text-black hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Book Free Demo
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <a 
              href="https://play.google.com/store/apps/details?id=com.connectskool.schoolerp&pcampaignid=web_share"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download ConnectSkool School ERP mobile app from Google Play Store"
              className="flex items-center gap-2 rounded-full bg-[#F0970A] px-6 py-3 text-sm font-semibold text-white border-2 border-[#F0970A] shadow-lg shadow-[#F0970A]/30 transition-all duration-300 ease-out hover:bg-white hover:text-black hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="text-lg" aria-hidden="true">▶</span>
              Download App
            </a>
          </div>

          {/* MODULE BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="School management modules">
            {MODULES.map((module) => {
              const Icon = module.icon;
              const hasLink = !!module.href;

              return (
                <div key={module.id} className="group relative">
                  {/* CLICKABLE LINK */}
                  <a
                    href={module.href || "#"}
                    target={hasLink ? "_blank" : undefined}
                    rel={hasLink ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg shadow-black/30 transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${hasLink
                        ? "border-sky-400/40 bg-sky-500/10 text-white hover:-translate-y-0.5 hover:bg-sky-500/20 cursor-pointer"
                        : "border-white/10 bg-white/5 text-slate-400 cursor-not-allowed opacity-60"
                      }`}
                    aria-label={`Open ${module.label} dashboard`}
                    aria-disabled={!hasLink}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-sky-300" aria-hidden="true">
                      <Icon size={13} />
                    </span>
                    {module.label}
                    {hasLink && (
                      <span className="ml-0.5 flex items-center gap-0.5 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-sky-300" aria-hidden="true">
                        Open
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
                          <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3M7.5 1.5V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </a>

                  {/* TOOLTIP */}
                  <div 
                    className="pointer-events-none absolute bottom-full left-0 z-20 mb-3 w-64 origin-bottom rounded-2xl border border-white/15 bg-slate-900/80 p-4 text-left text-slate-200 opacity-0 shadow-xl shadow-black/40 backdrop-blur-2xl transition duration-300 ease-out scale-95 group-hover:scale-100 group-hover:opacity-100"
                    role="tooltip"
                    aria-hidden="true"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300" aria-hidden="true">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{module.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">{module.desc}</p>
                        {hasLink
                          ? <p className="mt-2 text-[10px] font-semibold text-sky-400">Click to open dashboard →</p>
                          : <p className="mt-2 text-[10px] font-semibold text-slate-500">Coming soon</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="relative z-10 min-h-[520px] lg:min-h-[600px]">
          {/* Decorative circle */}
          <div 
            className="pointer-events-none absolute -right-[200px] top-[0px] h-[680px] w-[680px] rounded-full border border-white/10 bg-gradient-to-br from-sky-400/15 via-slate-900/5 to-transparent"
            aria-hidden="true"
          />

          {/* ── CARD 1 — Student Overview (top-left) ── */}
          <div 
            className="absolute left-0 top-6 z-10 hidden w-[300px] rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/5 transition-transform duration-500 hover:-translate-y-1 lg:block"
            aria-hidden="true"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Student Overview</p>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] font-semibold text-sky-300">Live</span>
            </div>
            <div className="flex gap-3">
              {[
                { label: "Total Students", value: "2,480", color: "text-sky-400" },
                { label: "Present Today", value: "91%", color: "text-emerald-400" },
                { label: "New This Month", value: "+34", color: "text-amber-400" },
              ].map((s) => (
                <div key={s.label} className="flex-1 rounded-xl bg-white/5 p-2.5">
                  <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex h-10 items-end gap-1">
              {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-sky-500/30 transition-colors hover:bg-sky-400/50" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-1.5 text-[10px] text-slate-500">Attendance — last 7 days</p>
          </div>

          {/* ── CARD 2 — Fee Collection (middle-right) ── */}
          <div 
            className="absolute right-4 top-[160px] z-10 hidden w-[260px] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/5 transition-transform duration-500 hover:-translate-y-1 lg:block"
            aria-hidden="true"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/20" aria-hidden="true">
                <Wallet size={15} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Fee Collection</p>
                <p className="text-[10px] text-slate-400">April 2025</p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-between text-[10px] text-slate-400">
              <span>Collected</span>
              <span className="font-semibold text-emerald-400">₹8.4L / ₹10L</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
            </div>
            <p className="mt-1.5 text-[10px] text-slate-500">84% target achieved</p>
            <div className="mt-3 space-y-1.5">
              {[
                { name: "Rahul Sharma", amt: "₹12,000", status: "Paid" },
                { name: "Priya Singh", amt: "₹8,500", status: "Pending" },
                { name: "Aryan Mehta", amt: "₹15,000", status: "Paid" },
              ].map((r) => (
                <div key={r.name} className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
                  <p className="text-[10px] text-slate-300">{r.name}</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[10px] font-semibold text-white">{r.amt}</p>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${r.status === "Paid" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                      {r.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 3 — Exam Results (bottom-left) ── */}
          <div 
            className="absolute left-6 top-[340px] z-10 hidden w-[280px] rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/5 transition-transform duration-500 hover:-translate-y-1 lg:block"
            aria-hidden="true"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20" aria-hidden="true">
                <ClipboardList size={15} className="text-sky-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Exam Results</p>
                <p className="text-[10px] text-slate-400">Class X — Term 2</p>
              </div>
              <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                Published
              </span>
            </div>
            <div className="space-y-2">
              {[
                { sub: "Mathematics", score: 88, color: "bg-sky-400" },
                { sub: "Science", score: 92, color: "bg-emerald-400" },
                { sub: "English", score: 76, color: "bg-amber-400" },
              ].map((s) => (
                <div key={s.sub}>
                  <div className="mb-1 flex justify-between text-[10px]">
                    <span className="text-slate-400">{s.sub}</span>
                    <span className="font-semibold text-white">{s.score}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10">
                    <div className={`h-1.5 rounded-full opacity-80 ${s.color}`} style={{ width: `${s.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-slate-500">Avg score: 85.3% · 480 students evaluated</p>
          </div>

          {/* ErpOrbit Animation */}
          <div className="absolute -right-[110px] -bottom-[80px] z-30 opacity-90 transition-opacity duration-300 hover:opacity-100">
            <ErpOrbit />
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoPopModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ConnectSkool School ERP Software",
            "description": "Complete school management software for admissions, attendance, fees, exams, transport, and staff management.",
            "applicationCategory": "Education Management Software",
            "operatingSystem": "Web, Android, iOS",
            "browserRequirements": "Modern browsers",
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
  );
}