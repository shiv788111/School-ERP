'use client'

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Color tokens ─────────────────────────────────────────────────────────────
const C = {
  pageBg: "#F8F9FC",
  sectionDark: "#1E4E6D",
  orange: "#F0970A",
  orangeLight: "rgba(240,151,10,0.15)",
  white: "#ffffff",
  cardGlass: "rgba(255,255,255,0.07)",
  cardGlassBorder: "rgba(255,255,255,0.12)",
  textWhite: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textBody: "rgba(255,255,255,0.88)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// NOTE: Replace with real testimonials from actual customers before production
// For development, using placeholder images that exist
const testimonials = [
  { 
    id: 0,  
    name: "Mrs. Sharma",      
    role: "Principal, Delhi Public School",        
    img: "https://i.pravatar.cc/150?img=1",  
    text: "ConnectSkool reduced our attendance management time by 70%. The biometric integration with parent notifications has been a game-changer.",
    feature: "Attendance Management"
  },
  { 
    id: 1,  
    name: "Mr. Patel",       
    role: "Administrator, St. Mary's School",       
    img: "https://i.pravatar.cc/150?img=2",  
    text: "Fee collection used to take weeks. Now with ConnectSkool's online payment system, we collect 95% of fees within the first week.",
    feature: "Fee Management"
  },
  { 
    id: 2,  
    name: "Dr. Mehta", 
    role: "Director, Green Valley Academy",      
    img: "https://i.pravatar.cc/150?img=3",  
    text: "The exam management system has eliminated errors in report cards. We generate results for 2000+ students in minutes, not days.",
    feature: "Exam Management"
  },
  { 
    id: 3,  
    name: "Ms. Reddy",     
    role: "Parent Coordinator, Sunshine School",  
    img: "https://i.pravatar.cc/150?img=4",  
    text: "Parent communication has improved dramatically. Real-time updates on attendance, homework, and exam results keep parents engaged.",
    feature: "Parent Communication"
  },
  { 
    id: 4,  
    name: "Mr. Kumar",     
    role: "Head of IT, Modern School",       
    img: "https://i.pravatar.cc/150?img=5",  
    text: "As a technical person, I appreciate the security features. Role-based access and data encryption give us peace of mind.",
    feature: "Data Security"
  },
  { 
    id: 5,  
    name: "Mrs. Singh",    
    role: "Accountant, Cambridge School",      
    img: "https://i.pravatar.cc/150?img=6",  
    text: "ConnectSkool simplified our financial reconciliation. We now generate accurate expense reports in real-time.",
    feature: "Financial Management"
  },
  { 
    id: 6,  
    name: "Mr. Nair",       
    role: "Transport Coordinator, Global School",   
    img: "https://i.pravatar.cc/150?img=7",  
    text: "GPS tracking and route optimization have reduced our transport costs by 25%. Parents love the real-time bus tracking.",
    feature: "Transport Management"
  },
  { 
    id: 7,  
    name: "Dr. Gupta",    
    role: "Director, Presidency School",       
    img: "https://i.pravatar.cc/150?img=8",  
    text: "We manage 5 campuses with ConnectSkool. Multi-campus reporting and centralized administration have streamlined our operations.",
    feature: "Multi-Campus Management"
  },
  { 
    id: 8,  
    name: "Ms. Iyer",  
    role: "Head of Academics, Beacon School",          
    img: "https://i.pravatar.cc/150?img=9",  
    text: "The academic dashboard gives me complete visibility into student performance across all subjects and classes.",
    feature: "Academic Analytics"
  },
];

// ─── 5-Star Row ───────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={C.orange} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Single Card ──────────────────────────────────────────────────────────────
function Card({ item, position, onCardClick }) {
  const isActive = position === 0;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (position !== 0) onCardClick(position);
    }
  }, [position, onCardClick]);

  // Determine styles based on state - using CSS classes instead of React state
  const getBgClass = () => {
    if (isActive) return 'bg-white';
    return 'bg-[rgba(255,255,255,0.07)] hover:bg-[rgba(240,151,10,0.15)]';
  };

  const getBorderClass = () => {
    if (isActive) return 'border-2 border-[#F0970A]';
    return 'border-[1.5px] border-[rgba(255,255,255,0.12)] hover:border-[#F0970A]';
  };

  const getTextColor = () => isActive ? 'text-[#1E4E6D]' : 'text-[rgba(255,255,255,0.88)]';
  const getAuthorColor = () => isActive ? 'text-[#777]' : 'text-[rgba(255,255,255,0.5)]';

  return (
    <motion.div
      onClick={() => onCardClick(position)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${item.name}'s testimonial about ${item.feature} - ${isActive ? 'Active' : 'Click to view'}`}
      aria-current={isActive ? 'true' : 'false'}
      animate={{
        x: `${position * 300}px`,
        y: isActive ? -14 : 0,
        scale: isActive ? 1.04 : Math.abs(position) === 1 ? 0.93 : 0.86,
        opacity: Math.abs(position) > 1 ? 0 : Math.abs(position) === 1 ? 0.72 : 1,
        zIndex: isActive ? 10 : Math.abs(position) === 1 ? 5 : 1,
      }}
      transition={{ type: "spring", stiffness: 270, damping: 28 }}
      className={`
        absolute left-1/2 top-1/2 w-[288px] -translate-x-1/2 -translate-y-1/2 
        rounded-2xl p-6 backdrop-blur-sm transition-all duration-200
        ${getBgClass()} ${getBorderClass()}
        ${isActive ? 'cursor-default' : 'cursor-pointer'}
      `}
      style={{
        boxShadow: isActive ? `0 16px 48px rgba(240,151,10,0.16)` : "none",
        WebkitBackdropFilter: "blur(6px)",
        userSelect: "none",
      }}
    >
      {/* Avatar with Next.js Image */}
      <div className="relative w-[46px] h-[46px] mb-[14px]">
        <Image
          src={item.img}
          alt={`${item.name} - ${item.role}`}
          fill
          className="rounded-full object-cover"
          style={{ 
            border: isActive ? `2px solid ${C.orange}` : "2px solid rgba(255,255,255,0.2)" 
          }}
          sizes="46px"
          unoptimized={item.img.startsWith('http')}
        />
      </div>

      <Stars />
      
      <p className={`text-[13.5px] leading-relaxed mb-3 min-h-[72px] ${getTextColor()}`}>
        "{item.text}"
      </p>

      {/* Feature Badge */}
      <span 
        className={`
          inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3
          ${isActive 
            ? 'bg-[rgba(240,151,10,0.15)] text-[#F0970A] border border-[#F0970A]' 
            : 'bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.5)] border border-transparent'
          }
        `}
      >
        {item.feature}
      </span>
      
      <p className={`text-[12px] italic ${getAuthorColor()}`}>
        — {item.name}, {item.role}
      </p>
    </motion.div>
  );
}

// ─── Dot Indicators ──────────────────────────────────────────────────────────
function Dots({ total, current, onClick }) {
  return (
    <div className="flex gap-1.5 justify-center mt-5" role="tablist" aria-label="Testimonial navigation">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to testimonial ${i + 1}`}
          onClick={() => onClick(i)}
          className="transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D] rounded-full"
          style={{
            width: i === current ? 22 : 7,
            height: 7,
            borderRadius: 4,
            background: i === current ? C.orange : "rgba(255,255,255,0.25)",
            border: 'none',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavBtn({ onClick, children, label }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={label}
      className="
        w-[46px] h-[46px] rounded-full flex items-center justify-center 
        border border-white/25 text-white cursor-pointer
        transition-all duration-150 outline-none
        hover:border-[#F0970A] hover:bg-[#F0970A]
        focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]
      "
    >
      {children}
    </motion.button>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  const handleCardClick = useCallback((position) => {
    if (position !== 0) {
      setCurrent((c) => (c + position + total) % total);
    }
  }, [total]);

  const allVisible = [-2, -1, 0, 1, 2].map((offset) => ({
    item: testimonials[(current + offset + total) % total],
    position: offset,
    key: (current + offset + total) % total,
  }));

  return (
    <section
      className="w-full flex items-center justify-center py-20 px-4"
      style={{ backgroundColor: C.pageBg, minHeight: "100vh" }}
      aria-labelledby="testimonials-heading"
    >
      <div 
        className="w-full max-w-[1080px] rounded-3xl px-6 py-14 md:py-16"
        style={{ backgroundColor: C.sectionDark }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-3.5"
            style={{ 
              background: C.orangeLight, 
              color: C.orange,
            }}
            aria-hidden="true"
          >
            ★ Testimonials
          </span>
          <h2 
            id="testimonials-heading"
            className="text-[clamp(22px,4vw,36px)] font-bold leading-[1.2] mb-2.5"
            style={{ color: C.white }}
          >
            What <span style={{ color: C.orange }}>Schools Say</span> About ConnectSkool
          </h2>
          <p 
            className="text-[15px] max-w-2xl mx-auto"
            style={{ color: C.textMuted }}
          >
            Read testimonials from principals, school administrators, and educators using 
            ConnectSkool School ERP software to transform their institutions.
          </p>
        </motion.div>

        {/* Cards carousel */}
        <div 
          className="relative h-[380px] overflow-hidden"
          role="region"
          aria-label="Testimonial carousel"
          aria-live="polite"
        >
          {allVisible.map(({ item, position, key }) => (
            <Card key={key} item={item} position={position} onCardClick={handleCardClick} />
          ))}
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center gap-3 mt-8">
          <NavBtn onClick={prev} label="Previous testimonial">
            <ChevronLeft size={20} aria-hidden="true" />
          </NavBtn>
          <NavBtn onClick={next} label="Next testimonial">
            <ChevronRight size={20} aria-hidden="true" />
          </NavBtn>
        </div>

        {/* Dots */}
        <Dots total={total} current={current} onClick={goTo} />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
            aria-label="Book a free demo to experience ConnectSkool"
          >
            Book Free Demo
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
          <p className="mt-2 text-xs" style={{ color: C.textMuted }}>
            Join schools transforming their operations with ConnectSkool
          </p>
        </motion.div>
      </div>
    </section>
  );
}