'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import DemoPopModal from '../../views/demo/DemoPopModal'

export default function AboutCTASection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="section-gap">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4E6D] to-[#1E4E6D]/80" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0970A]/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join 500+ Schools?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience how ConnectSkool can streamline your school operations and enhance learning outcomes. Get a personalized demo today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 
                           bg-[#F0970A] text-white font-bold rounded-xl
                           hover:bg-[#E48608] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Your Free Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 
                           border-2 border-white text-white font-bold rounded-xl
                           hover:bg-white hover:text-[#1E4E6D] transition-all duration-300"
              >
                View Pricing
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {showModal && <DemoPopModal onClose={() => setShowModal(false)} />}
    </section>
  )
}
