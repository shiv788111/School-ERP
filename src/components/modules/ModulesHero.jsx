"use client";

import Image from "next/image";
import Link from "next/link";
import DemoPopModal from "../../views/demo/DemoPopModal";
import { useState, useCallback, useEffect } from "react";

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ModulesHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  // Don't render during SSR to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Smart ERP for Modern Schools | ConnectSkool Modules",
                "description": "Explore ConnectSkool's complete ERP modules with 200+ features for admissions, fees, academics, transport, and more.",
                "url": "https://www.connectskool.com/modules",
                "about": {
                  "@type": "SoftwareApplication",
                  "name": "ConnectSkool ERP",
                  "applicationCategory": "Education Management Software",
                  "operatingSystem": "Web, Android, iOS",
                  "features": "200+ features including admissions, fees, academics, transport, and communication",
                  "offers": {
                    "@type": "Offer",
                    "description": "Free demo available",
                    "availability": "https://schema.org/InStock"
                  }
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.connectskool.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Modules",
                    "item": "https://www.connectskool.com/modules"
                  }
                ]
              }
            ]
          })
        }}
      />

      <section 
        className="relative w-full bg-gradient-to-br from-[#295168] via-[#1E3D52] to-[#162E3F] overflow-hidden pt-20 pb-0"
        aria-labelledby="modules-hero-heading"
      >
        {/* Background Glows */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F0A80A]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F0A80A]/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div 
            className="inline-block mb-6 px-4 py-1.5 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
            aria-hidden="true"
          >
            200+ Features • All-in-One ERP
          </div>

          {/* Heading */}
          <h1 
            id="modules-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Smart ERP for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0A80A] to-[#f5c24a]">
              Modern Schools
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Manage admissions, fees, academics, transport & more —
            all in one powerful and easy-to-use platform.
          </p>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              99.78% Uptime
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              256-Bit Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Cloud-Based
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenModal}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F0A80A] to-[#d89608] text-white font-semibold shadow-lg shadow-[#F0A80A]/30 hover:scale-105 hover:shadow-xl hover:shadow-[#F0A80A]/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F0A80A] focus:ring-offset-2 focus:ring-offset-[#295168]"
              aria-label="Request a demo of ConnectSkool ERP"
            >
              Request Demo
            </button>

            <Link
              href="/features"
              className="px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#295168]"
              aria-label="Explore all ConnectSkool features"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-16 flex justify-center">
          {/* Glow */}
          <div 
            className="absolute bottom-0 w-[500px] h-[200px] bg-[#F0A80A]/20 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* Image */}
          <div className="relative w-[90%] md:w-[75%] lg:w-[65%] -mb-20">
            <Image
              src="/assets/moduleheroo.webp"
              alt="ConnectSkool ERP Dashboard showing modules and features for school management including attendance, fees, exams, and transport"
              width={1200}
              height={700}
              className="rounded-2xl shadow-2xl border border-white/10"
              priority
              quality={90}
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 75vw, 65vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
            />
          </div>
        </div>

        {/* Demo Modal */}
        <DemoPopModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </section>
    </>
  );
}