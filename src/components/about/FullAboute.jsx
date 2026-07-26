"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Lightbulb,
  Users,
  Zap,
  Award,
  Shield,
  TrendingUp,
  Clock,
  MessageSquare,
  Lock,
  Smartphone,
  Cloud,
  CheckCircle2,
  Rocket,
  BarChart3,
  Workflow,
  Wallet,
  Heart,
} from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const IconCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-transparent hover:border-[#F0970A] transition-all duration-300 hover:shadow-xl hover:bg-white"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E4E6D]/10 to-[#F0970A]/10 text-[#1E4E6D] group-hover:from-[#F0970A]/20 group-hover:to-[#F0970A]/10 group-hover:text-[#F0970A] transition-all duration-300">
          <Icon size={28} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-[#1E4E6D] group-hover:text-[#F0970A] transition text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon }) => {
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-[#F0970A]/20 p-8 hover:border-[#F0970A]/50 transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F0970A]/10 to-transparent rounded-full blur-3xl -mr-8 -mt-8 group-hover:from-[#F0970A]/20 transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 text-[#F0970A]" />
          <div className="text-3xl font-bold bg-gradient-to-r from-[#1E4E6D] to-[#F0970A] bg-clip-text text-transparent">
            {value}
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>
    </motion.div>
  );
};

export default function AboutSections() {
  const [activeStep, setActiveStep] = useState(0);

  const whyUsItems = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      desc: "Deploy and start using ConnectSkool in hours, not weeks. Zero technical knowledge required.",
    },
    {
      icon: Users,
      title: "Trusted by 500+ Schools",
      desc: "Schools across India rely on ConnectSkool for daily operations and student management.",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "Enterprise-level encryption and compliance with education standards to protect student data.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      desc: "Get instant insights into attendance, fees, performance, and more with interactive dashboards.",
    },
    {
      icon: MessageSquare,
      title: "Unified Communication",
      desc: "Connect parents, teachers, and staff instantly with SMS, email, and in-app notifications.",
    },
    {
      icon: Award,
      title: "Award-Winning Support",
      desc: "Dedicated support team available 24/7 to help you succeed with personalized training.",
    },
  ];

  const journeySteps = [
    {
      title: "Founded",
      desc: "Started with a mission to digitize education in India",
      year: "2020",
    },
    {
      title: "First 100 Schools",
      desc: "Rapid adoption across multiple states and educational boards",
      year: "2021",
    },
    {
      title: "500+ Schools",
      desc: "Trusted by thousands of educators managing millions of students",
      year: "2023",
    },
    {
      title: "Going Global",
      desc: "Expanding internationally with multi-language and multi-currency support",
      year: "2024",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Setup School Profile",
      desc: "Configure your school details, add classes, and set up the organizational structure",
    },
    {
      step: "2",
      title: "Import Student Data",
      desc: "Bulk upload student records and automatically create login credentials for students and parents",
    },
    {
      step: "3",
      title: "Train Your Team",
      desc: "Our team provides comprehensive training for staff to use attendance, fees, and communication modules",
    },
    {
      step: "4",
      title: "Go Live & Scale",
      desc: "Start managing operations digitally and watch efficiency improve immediately across all departments",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#275572] mb-6">
          Our <span className="text-[#F0970A]">Purpose</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          ConnectSkool is built to simplify school operations — bringing
          attendance, fee management, and communication into one seamless system
          that saves time and reduces manual effort.
        </p>
      </section>
      {/* ================= MISSION & VALUES ================= */}
      {/* <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F0970A]/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#F0970A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E4E6D]">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To simplify school operations and empower educators to spend less time on administration and more time transforming young minds.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F0970A]/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-[#F0970A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E4E6D]">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A world where technology removes barriers to education, allowing schools of all sizes to deliver quality learning experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, label: "Student-Centric" },
              { icon: Lock, label: "Secure by Default" },
              { icon: Zap, label: "Innovation First" },
              { icon: Heart, label: "People-Focused" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-[#F0970A]/10 to-[#1E4E6D]/5 border border-[#F0970A]/20 text-center hover:border-[#F0970A]/50 transition-all">
                  <Icon className="w-8 h-8 text-[#F0970A] mx-auto mb-3" />
                  <p className="font-semibold text-[#1E4E6D] text-sm">{item.label}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section> */}

      {/* ================= PROBLEM & SOLUTION ================= */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* PROBLEM */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                THE CHALLENGE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E6D] mb-6">
                Schools are struggling with outdated systems
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Manual attendance registers waste 2-3 hours daily",
                  "Fee tracking is error-prone and time-consuming",
                  "Communication gaps between school and parents",
                  "No visibility into real-time operational data",
                  "Staff spends more time on paperwork than teaching",
                  "Lack of security and backup for student records",
                ].map((problem, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-3 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100">
                        <span className="text-red-600 text-sm">✕</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{problem}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden md:block h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/problmabout.webp"
                alt="School Dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* SOLUTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, scale: 1.1 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="hidden md:block h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/solutionaboute.webp"
                alt="about"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                OUR SOLUTION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E6D] mb-6">
                One platform. Complete control.
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Biometric & app-based attendance in seconds",
                  "Automated fee management with payment gateways",
                  "Instant parent-teacher communication channels",
                  "Real-time dashboards for all stakeholders",
                  "Time saved = More focus on quality education",
                  "Military-grade security & daily cloud backups",
                ].map((solution, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-3 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">{solution}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 md:px-12 bg-[#1E4E6D]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Setup to Success
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Our streamlined onboarding process gets your school ready in 4
              simple steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0970A]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm group-hover:border-[#F0970A]/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#F0970A] text-[#1E4E6D] flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {i < 3 && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 text-[#F0970A]">
                      <Rocket size={20} className="rotate-90" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E6D] mb-4">
            Making Real Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ConnectSkool has transformed how schools operate across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <StatCard value="500+" label="Schools Connected" icon={Users} />
          <StatCard value="50K+" label="Students Managed" icon={Users} />
          <StatCard value="10+ Hrs" label="Saved Weekly" icon={Clock} />
          <StatCard value="99.9%" label="Uptime Guarantee" icon={TrendingUp} />
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E6D] mb-4">
              Built for Modern Schools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Features designed around the actual needs of educators and
              administrators.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Smart Attendance",
                desc: "Biometric, app-based, and QR code options with instant sync",
              },
              {
                icon: Wallet,
                title: "Automated Fees",
                desc: "Payment gateway integration with automated reminders",
              },
              {
                icon: MessageSquare,
                title: "Unified Messaging",
                desc: "SMS, email, and in-app notifications to parents instantly",
              },
              {
                icon: BarChart3,
                title: "Real-Time Reports",
                desc: "Interactive dashboards for attendance, fees, performance",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                desc: "Dedicated apps for teachers, parents, and administrators",
              },
              {
                icon: Cloud,
                title: "Cloud Safe",
                desc: "Automatic daily backups with bank-grade security",
              },
            ].map((item, i) => (
              <IconCard
                key={i}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                delay={i * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CONNECTSKOOL ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E6D] mb-4">
            Why <span className="text-[#F0970A]">500+ Schools</span> Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're not just software—we're your partner in educational
            excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUsItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#F0970A] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0970A]/10 text-[#F0970A] group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E4E6D] mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= JOURNEY ================= */}
      {/* <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#1E4E6D] to-[#275572]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From a startup dream to trusted by hundreds of schools across India
            </p>
          </motion.div>

          <div className="space-y-8">
            {journeySteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-8 items-center ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#F0970A]/50 transition-all">
                    <div className="text-3xl font-bold text-[#F0970A] mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#F0970A] border-4 border-[#1E4E6D]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= CTA SECTION ================= */}
    </div>
  );
}

