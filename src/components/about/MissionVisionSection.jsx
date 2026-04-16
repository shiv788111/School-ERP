'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Zap } from 'lucide-react'

const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To revolutionize school management by providing intuitive, secure, and scalable technology solutions that empower educational institutions to operate efficiently and focus on student excellence.',
    highlight: 'Empowering Education'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A future where every school, regardless of size or location, has access to enterprise-grade technology that streamlines operations and enhances learning outcomes.',
    highlight: 'Global Education'
  },
  {
    icon: Zap,
    title: 'Our Promise',
    description: 'We are committed to continuous innovation, exceptional customer support, and maintaining the highest standards of data security and privacy for our school partners.',
    highlight: 'Your Success'
  }
]

export default function MissionVisionSection() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1E4E6D]">
            Our <span className="text-[#F0970A]">Purpose</span>
          </h2>
          <p className="section-subtitle text-slate-600 mt-4">
            Guided by clear values and a commitment to excellence
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {missionVision.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F0970A]/5 to-[#1E4E6D]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-full rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#F0970A]/30 hover:shadow-lg">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#F0970A]/10 text-[#F0970A] mb-6 group-hover:bg-[#F0970A]/20 transition">
                      <Icon size={28} />
                    </div>

                    {/* Title & Highlight */}
                    <h3 className="text-2xl font-bold text-[#1E4E6D] mb-2">{item.title}</h3>
                    <p className="text-sm font-semibold text-[#F0970A] mb-4">{item.highlight}</p>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
