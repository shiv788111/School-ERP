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
const testimonials = [
  { 
    id: 0,  
    name: "Mrs. Sharma",      
    role: "Principal, Delhi Public School",        
    img: "/assets/avtar/Mrs. Sharma-avtar.webp",  
    text: "ConnectSkool reduced our attendance management time by 70%. The biometric integration with parent notifications has been a game-changer.",
    feature: "Attendance Management"
  },
  { 
    id: 1,  
    name: "Mr. Patel",       
    role: "Administrator, St. Mary's School",       
    img: "/assets/avtar/Mr. Patel-avtar.webp",  
    text: "Fee collection used to take weeks. Now with ConnectSkool's online payment system, we collect 95% of fees within the first week.",
    feature: "Fee Management"
  },
  { 
    id: 2,  
    name: "Dr. Mehta", 
    role: "Director, Green Valley Academy",      
    img: "/assets/avtar/Dr. Mehta-avtar.webp",  
    text: "The exam management system has eliminated errors in report cards. We generate results for 2000+ students in minutes, not days.",
    feature: "Exam Management"
  },
  { 
    id: 3,  
    name: "Ms. Reddy",     
    role: "Parent Coordinator, Sunshine School",  
    img: "/assets/avtar/Ms. Reddy-avtar.webp",  
    text: "Parent communication has improved dramatically. Real-time updates on attendance, homework, and exam results keep parents engaged.",
    feature: "Parent Communication"
  },
  { 
    id: 4,  
    name: "Mr. Kumar",     
    role: "Head of IT, Modern School",       
    img: "/assets/avtar/Mr. Kumar-avtar.webp",  
    text: "As a technical person, I appreciate the security features. Role-based access and data encryption give us peace of mind.",
    feature: "Data Security"
  },
  { 
    id: 5,  
    name: "Mrs. Singh",    
    role: "Accountant, Cambridge School",      
    img: "/assets/avtar/Mrs. Singh-avtar.webp",  
    text: "ConnectSkool simplified our financial reconciliation. We now generate accurate expense reports in real-time.",
    feature: "Financial Management"
  },
  { 
    id: 6,  
    name: "Mr. Nair",       
    role: "Transport Coordinator, Global School",   
    img: "/assets/avtar/Mr. Nair-avtar.webp",  
    text: "GPS tracking and route optimization have reduced our transport costs by 25%. Parents love the real-time bus tracking.",
    feature: "Transport Management"
  },
  { 
    id: 7,  
    name: "Dr. Gupta",    
    role: "Director, Presidency School",       
    img: "/assets/avtar/Dr. Gupta-avtar.webp",  
    text: "We manage 5 campuses with ConnectSkool. Multi-campus reporting and centralized administration have streamlined our operations.",
    feature: "Multi-Campus Management"
  },
  { 
    id: 8,  
    name: "Mrs. Iyer",  
    role: "Head of Academics, Beacon School",          
    img: "/assets/avtar/Mrs. Iyer-avtar.webp",  
    text: "The academic dashboard gives me complete visibility into student performance across all subjects and classes.",
    feature: "Academic Analytics"
  },
];
 
// ─── 5-Star Row ───────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 12 }} aria-label="5 out of 5 stars rating">
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
  const [hovered, setHovered] = useState(false);
  const isActive = position === 0;

  const bg = isActive ? C.white : hovered ? C.orangeLight : C.cardGlass;
  const bdr = isActive ? `2px solid ${C.orange}` : hovered ? `1.5px solid ${C.orange}` : `1.5px solid ${C.cardGlassBorder}`;
  const quoteColor = isActive ? "#1E4E6D" : C.textBody;
  const authorColor = isActive ? "#777" : C.textMuted;
  const opacity = Math.abs(position) > 1 ? 0 : Math.abs(position) === 1 ? 0.72 : 1;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (position !== 0) onCardClick(position);
    }
  }, [position, onCardClick]);

  return (
    <motion.div
      onClick={() => onCardClick(position)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${item.name}'s testimonial about ${item.feature} - ${isActive ? 'Active' : 'Click to view'}`}
      aria-current={isActive ? 'true' : 'false'}
      animate={{
        x: `${position * 300}px`,
        y: isActive ? -14 : 0,
        scale: isActive ? 1.04 : Math.abs(position) === 1 ? 0.93 : 0.86,
        opacity,
        zIndex: isActive ? 10 : Math.abs(position) === 1 ? 5 : 1,
      }}
      transition={{ type: "spring", stiffness: 270, damping: 28 }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        width: 288,
        background: bg,
        border: bdr,
        borderRadius: 16,
        padding: "28px 24px 24px",
        cursor: isActive ? "default" : "pointer",
        boxShadow: isActive ? `0 16px 48px rgba(240,151,10,0.16)` : "none",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        userSelect: "none",
      }}
    >
      {/* Avatar with Next.js Image */}
      <div style={{ width: 46, height: 46, marginBottom: 14, position: 'relative' }}>
        <Image
          src={item.img}
          alt={`${item.name} - ${item.role}`}
          width={46}
          height={46}
          className="rounded-full object-cover"
          style={{
            border: isActive ? `2px solid ${C.orange}` : "2px solid rgba(255,255,255,0.2)",
          }}
          unoptimized={item.img.startsWith('http')}
        />
      </div>

      <Stars />

      <p style={{ color: quoteColor, fontSize: 13.5, lineHeight: 1.65, marginBottom: 12, minHeight: 72 }}>
        "{item.text}"
      </p>

      {/* Feature Badge */}
      <span
        style={{
          display: 'inline-block',
          fontSize: 10,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          padding: '2px 10px',
          borderRadius: 20,
          marginBottom: 12,
          background: isActive ? C.orangeLight : "rgba(255,255,255,0.1)",
          color: isActive ? C.orange : C.textMuted,
          border: isActive ? `1px solid ${C.orange}` : "1px solid transparent",
        }}
      >
        {item.feature}
      </span>

      <p style={{ color: authorColor, fontSize: 12, fontStyle: "italic" }}>
        — {item.name}, {item.role}
      </p>
    </motion.div>
  );
}

// ─── Dot Indicators ──────────────────────────────────────────────────────────
function Dots({ total, current, onClick }) {
  return (
    <div style={{ display: "flex", gap: 7, justifyContent: "center", marginTop: 20 }} role="tablist" aria-label="Testimonial navigation">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to testimonial ${i + 1}`}
          onClick={() => onClick(i)}
          style={{
            width: i === current ? 22 : 7,
            height: 7,
            borderRadius: 4,
            background: i === current ? C.orange : "rgba(255,255,255,0.25)",
            transition: "all 0.25s ease",
            border: 'none',
            cursor: 'pointer',
          }}
          className="focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
        />
      ))}
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavBtn({ onClick, children, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: hovered ? `1.5px solid ${C.orange}` : "1.5px solid rgba(255,255,255,0.25)",
        background: hovered ? C.orange : "transparent",
        color: C.white,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .18s",
        outline: "none",
      }}
      className="focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
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
      style={{ backgroundColor: C.pageBg, minHeight: "100vh" }}
      className="w-full flex items-center justify-center py-20 px-4"
      aria-labelledby="testimonials-heading"
    >
      {/* Dark section → #1E4E6D */}
      <div
        style={{
          backgroundColor: C.sectionDark,
          borderRadius: 24,
          padding: "60px 24px 48px",
          width: "100%",
          maxWidth: 1080,
        }}
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
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span
            style={{
              display: "inline-block",
              background: C.orangeLight,
              color: C.orange,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: 20,
              marginBottom: 14,
            }}
          >
            ★ Testimonials
          </span>
          <h2
            id="testimonials-heading"
            style={{
              color: C.white,
              fontSize: "clamp(22px, 4vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            What <span style={{ color: C.orange }}>Schools Say</span> About ConnectSkool
          </h2>
          <p style={{ color: C.textMuted, fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            Read testimonials from principals, school administrators, and educators using
            ConnectSkool School ERP software to transform their institutions.
          </p>
        </motion.div>

        {/* Cards carousel */}
        <div
          style={{ position: "relative", height: 380, overflow: "hidden" }}
          role="region"
          aria-label="Testimonial carousel"
          aria-live="polite"
        >
          {allVisible.map(({ item, position, key }) => (
            <Card key={key} item={item} position={position} onCardClick={handleCardClick} />
          ))}
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 32 }}>
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
          style={{ textAlign: 'center', marginTop: 32 }}
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#F0970A] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F0970A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#d87f05] focus:outline-none focus:ring-2 focus:ring-[#F0970A] focus:ring-offset-2 focus:ring-offset-[#1E4E6D]"
            aria-label="Book a free demo to experience ConnectSkool"
          >
            Book Free Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p style={{ color: C.textMuted, fontSize: 12, marginTop: 8 }}>
            Join schools transforming their operations with ConnectSkool
          </p>
        </motion.div>
      </div>
    </section>
  );
}