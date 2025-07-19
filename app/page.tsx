"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero-section"
import LoyaltyModal from "@/components/loyalty-modal"
import TestimonialSection from "@/components/testimonial-section"
import NewsletterSection from "@/components/newsletter-section"
import ModernRodeoSection from "@/components/modern-rodeo-section"
import CoreCollectionSection from "@/components/core-collection-section"
import ProductGridSection2 from "@/components/product-grid-section-2"
import Footer from "@/components/footer"
import MobileMenu from "@/components/mobile-menu"
import ProductGridSection1 from "@/components/product-grid-section-1"
import ProductGridSection3 from "@/components/product-grid-section-3"
import PerleBanner from "@/components/perle-banner"
import LastSlider from "@/components/last-slider"
import HallMarkSection from "@/components/hallmark-section"

export default function HomePage() {
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-1 text-[10px] font-sans tracking-wide sticky top-0 z-10">
        AW25 MODERN RODEO - NOW LIVE
      </div>

      {/* <Header onMenuClick={() => setShowMobileMenu(true)} /> */} 

      <main>
        <Hero/>
        <ModernRodeoSection />
        <ProductGridSection1 />
        <CoreCollectionSection />
        <ProductGridSection2 />
        <PerleBanner />
        <ProductGridSection3/>
        {/* <TestimonialSection /> */}
        <HallMarkSection />
        <NewsletterSection />
        <TestimonialSection />
        <LastSlider/>
      </main>

      <Footer />

      {showLoyaltyModal && <LoyaltyModal onClose={() => setShowLoyaltyModal(false)} />}
      {showMobileMenu && <MobileMenu onClose={() => setShowMobileMenu(false)} />}

      {/* Loyalty Scheme Button - Fixed Bottom Right */}
      <button
        onClick={() => setShowLoyaltyModal(true)}
        className="fixed bottom-0 rounded-t-sm right-4 bg-black text-white px-4 py-2 text-sm font-normal text-md z-40"
      >
        Loyalty Scheme
      </button>
    </div>
  )
}