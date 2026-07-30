'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineCalendar } from 'react-icons/hi2'
import dynamic from 'next/dynamic'

// ─── LAZY LOAD MODAL ──────────────────────────────────────────────────────────
// Move DemoPopModal to lazy loading to prevent hydration issues
const DemoPopModal = dynamic(
  () => import('../../views/demo/DemoPopModal'),
  { 
    ssr: false,
    loading: () => null
  }
)

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=91923678866&text=Hi+ConnectSkool%2C+I+want+to+know+more+about+your+School+ERP&type=phone_number&app_absent=0"

// ─── TRUST BADGES ────────────────────────────────────────────────────────────
const trustBadges = [
  { text: 'Free Demo', icon: '✓' },
  { text: 'Free Technical Consultation', icon: '✓' },
  { text: '24/7 Support', icon: '✓' },
  { text: 'No Commitment Required', icon: '✓' },
]

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleOpenModal = useCallback(() => setIsModalOpen(true), [])
  const handleCloseModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <>
      {/* Modal Component - Only rendered after hydration */}
      {isHydrated && (
        <DemoPopModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      )}

      {/* Page Wrapper: BG #F8F9FC */}
      <section 
        className="w-full py-24 px-4 bg-[#F8F9FC]"
        aria-labelledby="cta-heading"
        suppressHydrationWarning
      >
        {/* Max Width Container */}
        <div className="max-w-7xl mx-auto">
          
          {/* Main Card - Centered Content & Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[50px] bg-[#1E4E6D] py-16 px-6 md:px-20 shadow-[0_40px_100px_-20px_rgba(30,78,109,0.5)] border border-white/10 text-center"
            suppressHydrationWarning
          >
            {/* Background Animated Glows */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#F0970A]/20 rounded-full blur-[120px] pointer-events-none"
              aria-hidden="true"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-4xl mx-auto">
              
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#F0970A] font-black tracking-[0.3em] uppercase text-xs mb-6 px-4 py-1.5 bg-[#F0970A]/10 rounded-full border border-[#F0970A]/20"
                aria-hidden="true"
              >
                Free School ERP Demo
              </motion.span>
              
              {/* Heading - SEO Optimized */}
              <motion.h2 
                id="cta-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight"
                suppressHydrationWarning
              >
                Ready to Transform Your School with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0970A] to-[#ffc14d]">
                  ConnectSkool School ERP?
                </span>
              </motion.h2>
              
              {/* Description - Product-Focused */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-blue-100/70 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
                suppressHydrationWarning
              >
                Book a free demo to see how ConnectSkool School ERP software simplifies{' '}
                <span className="text-white/90 font-semibold">attendance management</span>,{' '}
                <span className="text-white/90 font-semibold">fee collection</span>,{' '}
                <span className="text-white/90 font-semibold">examinations</span>,{' '}
                <span className="text-white/90 font-semibold">parent communication</span>, and{' '}
                <span className="text-white/90 font-semibold">school administration</span>.
              </motion.p>

              {/* Buttons Group */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                {/* Demo Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#F0970A] text-white font-black rounded-2xl transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(240,151,10,0.5)] border-2 border-[#F0970A] hover:bg-white hover:text-[#1E4E6D] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
                  aria-label="Book a free demo of ConnectSkool School ERP"
                  suppressHydrationWarning
                >
                  <HiOutlineCalendar size={24} aria-hidden="true" />
                  <span className="tracking-wide">BOOK FREE DEMO</span>
                </motion.button>

                {/* WhatsApp Button */}
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-xl text-white font-black rounded-2xl transition-all duration-300 border-2 border-white/20 hover:bg-white hover:text-[#1E4E6D] hover:border-white shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
                  aria-label="Chat with us on WhatsApp about ConnectSkool School ERP"
                  suppressHydrationWarning
                >
                  <FaWhatsapp size={24} className="text-[#25D366]" aria-hidden="true" />
                  <span className="tracking-wide">CHAT ON WHATSAPP</span>
                </motion.a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4 text-white/40 text-sm font-medium"
                suppressHydrationWarning
              >
                {trustBadges.map((badge) => (
                  <span key={badge.text} className="flex items-center gap-1.5">
                    <span className="text-[#F0970A]" aria-hidden="true">{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </motion.div>

              {/* Additional Trust Line */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-white/30 text-sm font-medium"
                suppressHydrationWarning
              >
                30-minute personalized demo • No obligation • Answers to all your questions
              </motion.p>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CTASection