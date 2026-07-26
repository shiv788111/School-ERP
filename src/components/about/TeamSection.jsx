'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    bio: 'Former education tech leader with 15+ years in school management systems.',
    image: 'https://i.pravatar.cc/150?img=12',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ]
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technology Officer',
    bio: 'Software architect passionate about scalable solutions for education sector.',
    image: 'https://i.pravatar.cc/150?img=25',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ]
  },
  {
    name: 'Arun Singh',
    role: 'VP Product',
    bio: 'Product strategist focused on user-centric design and feature innovation.',
    image: 'https://i.pravatar.cc/150?img=33',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ]
  },
  {
    name: 'Neha Patel',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring schools maximize value from ConnectSkool platform.',
    image: 'https://i.pravatar.cc/150?img=47',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' },
    ]
  },
]

export default function TeamSection() {
  return (
    <section className="section-gap bg-gradient-to-b from-white to-[#F8F9FC]">
      <div className="container-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#1E4E6D]">
            Meet Our <span className="text-[#F0970A]">Leadership Team</span>
          </h2>
          <p className="section-subtitle text-slate-600 mt-4">
            Experienced leaders committed to transforming education
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:border-[#F0970A] hover:shadow-lg">
                {/* Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#1E4E6D]/20 to-[#F0970A]/20 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1E4E6D] mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#F0970A] mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{member.bio}</p>

                  {/* Socials */}
                  <div className="flex gap-3">
                    {member.socials.map((social, i) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={i}
                          href={social.href}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#F0970A]/10 text-[#F0970A] hover:bg-[#F0970A] hover:text-white transition duration-300"
                        >
                          <Icon size={16} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
