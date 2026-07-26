'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2019',
    title: 'Journey Begins',
    description: 'ConnectSkool founded with a vision to transform school management across India.'
  },
  {
    year: '2020',
    title: 'Rapid Growth',
    description: 'Reached 50+ schools during pandemic, proving the need for digital solutions.'
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Launched advanced modules for attendance, fees, and student management.'
  },
  {
    year: '2022',
    title: 'Market Leader',
    description: 'Crossed 300+ schools, became trusted by premium and growing institutions.'
  },
  {
    year: '2023',
    title: 'Innovation Focus',
    description: 'Introduced AI-powered analytics and mobile-first interface redesign.'
  },
  {
    year: '2024',
    title: 'Milestone Achieved',
    description: '500+ schools trust ConnectSkool for managing 2M+ students and staff.'
  }
]

export default function JourneySection() {
  return (
    <section className="section-gap bg-white">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1E4E6D]">
            Our <span className="text-[#F0970A]">Journey</span>
          </h2>
          <p className="section-subtitle text-slate-600 mt-4">
            From startup dream to trusted partner of 500+ schools
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F0970A] via-[#F0970A] to-[#1E4E6D] transform -translate-x-1/2 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold text-[#1E4E6D] mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Center Dot */}
                <div className="flex justify-center md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <motion.div
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="w-6 h-6 rounded-full bg-[#F0970A] border-4 border-white shadow-lg relative z-10"
                  />
                </div>

                {/* Year */}
                <div className="flex-1 md:pl-12">
                  <span className="inline-block px-4 py-2 bg-[#F0970A]/10 text-[#F0970A] font-bold rounded-lg text-sm">
                    {milestone.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
