'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Schools Partnered', description: 'Across India' },
  { value: 2000000, suffix: '+', label: 'Students & Staff Managed', description: 'Daily Operations' },
  { value: 99.9, suffix: '%', label: 'System Uptime', description: 'Guaranteed' },
  { value: 50, suffix: 'K+', label: 'Daily Active Users', description: 'Using ConnectSkool' },
]

function AnimatedNumber({ value, suffix, isFloat = false }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000
    const startTime = Date.now()
    const increment = value / (duration / 16)

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const currentValue = Math.floor(value * progress)
      setDisplayValue(currentValue)

      if (progress === 1) clearInterval(interval)
    }, 16)

    return () => clearInterval(interval)
  }, [value, hasStarted])

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {isFloat ? displayValue.toFixed(1) : displayValue.toLocaleString()}{suffix}
    </motion.span>
  )
}

export default function StatsSection() {
  return (
    <section className="section-gap bg-gradient-to-r from-[#1E4E6D] to-[#1E4E6D]/90">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3">
                <span className="text-3xl md:text-5xl font-bold text-[#F0970A]">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isFloat={stat.value === 99.9}
                  />
                </span>
              </div>
              <p className="text-lg font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
