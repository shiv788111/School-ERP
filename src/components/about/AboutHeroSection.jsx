'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import DemoPopModal from '../../views/demo/DemoPopModal'
import { useState, useCallback } from 'react'

export default function AboutHero() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = useCallback(() => setShowModal(true), [])
  const handleCloseModal = useCallback(() => setShowModal(false), [])

  return (
    <section 
      className="bg-[#275572] text-white pt-20 pb-16 md:pt-24 md:pb-20"
      aria-labelledby="about-hero-heading"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-white/60 mb-4"
          aria-hidden="true"
        >
          About ConnectSkool
        </motion.p>

        {/* Heading */}
        <motion.h1
          id="about-hero-heading"
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

            {/* CTA Button - Uncomment when ready */}
            {/* <button
              onClick={handleOpenModal}
              className="px-6 py-3 bg-[#F0970A] text-white rounded-lg font-semibold hover:bg-[#e48808] transition focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#275572]"
              aria-label="Book a demo of ConnectSkool"
            >
              Book a Demo
            </button> */}
          </motion.div>

          {/* RIGHT IMAGE - Using Next.js Image for optimization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
              <Image
                src="/assets/Aboute.webp"
                alt="ConnectSkool school management illustration with student management, attendance, and communication features"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modal */}
      <DemoPopModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
      />
    </section>
  )
}