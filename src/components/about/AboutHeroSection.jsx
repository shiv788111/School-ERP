'use client'

import { motion } from 'framer-motion'
import DemoPopModal from '../../views/demo/DemoPopModal'
import { useState } from 'react'

export default function AboutHero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="bg-[#275572] text-white pt-20 pb-16 md:pt-24 md:pb-20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-white/60 mb-4"
        >
          About ConnectSkool
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-10"
        >
          A smarter way to manage schools with{' '}
          <span className="text-[#F0970A]">modern ERP technology</span>
        </motion.h1>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-base md:text-lg leading-relaxed"
          >
            <p className="mb-5">
              ConnectSkool simplifies school operations — from{' '}
              <span className="text-[#F0970A] font-medium">
                student management & attendance
              </span>{' '}
              to seamless communication between teachers, parents, and admins.
            </p>

            <p className="mb-6">
              Built to save time, reduce manual work, and bring everything into
              one powerful platform.
            </p>

            {/* <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-[#F0970A] text-white rounded-lg font-semibold hover:bg-[#e48808] transition"
            >
              Book a Demo
            </button> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/assets/Aboute.webp"
              alt="School Illustration"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
            />
          </motion.div>

        </div>
      </div>

      {/* Modal */}
      {showModal && <DemoPopModal onClose={() => setShowModal(false)} />}
    </section>
  )
}