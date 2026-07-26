'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Lightbulb, Rocket, Trophy } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Student-Centric',
    description: 'Every decision we make is focused on improving student outcomes and educational quality.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'We maintain bank-grade security standards to protect sensitive educational data.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in fostering seamless communication between parents, teachers, and administrators.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously evolve to meet the changing needs of modern educational institutions.'
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do - product, support, and service.'
  },
  {
    icon: Trophy,
    title: 'Reliability',
    description: 'Schools trust us with critical operations - we deliver 99.9% uptime consistently.'
  }
]

export default function ValuesSection() {
  return (
    <section className="section-gap bg-gradient-to-b from-[#1E4E6D]/5 to-transparent">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1E4E6D]">
            Our <span className="text-[#F0970A]">Core Values</span>
          </h2>
          <p className="section-subtitle text-slate-600 mt-4">
            Principles that drive our commitment to school excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-transparent bg-white/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#F0970A] hover:shadow-lg hover:bg-white">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#F0970A]/10 text-[#F0970A] mb-4 group-hover:bg-[#F0970A] group-hover:text-white transition duration-300">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1E4E6D] mb-2 group-hover:text-[#F0970A] transition">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
