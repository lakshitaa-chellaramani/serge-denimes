"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const testimonials = [
  {
    quote: `"Serge DeNimes has blended the traditionally clear line between fine jewelry and the fast-paced environment of the trend-dominated fashion industry"`,
    author: "Culted",
    logo: "https://www.sergedenimes.com/cdn/shop/files/Logoform-TM_1.svg?v=1696417772&width=600",
  },
  {
    quote: `"London-based jewellery label Serge DeNimes creates animated signet rings every time"`,
    author: "Esquire",
    logo: "https://www.sergedenimes.com/cdn/shop/files/serge-denimes-brand-logo-esquire.svg?v=1696417772&width=600",
  },
  {
    quote: `"Delivering goods straight out of London, Serge has maintained a strong presence through its frequent themed collections"`,
    author: "Highsnobiety",
    logo: "https://www.sergedenimes.com/cdn/shop/files/serge-denimes-brand-logo-highsnobiety.svg?v=1696417772&width=600",
  },
  {
    quote: `"Serge DeNimes is the trend-centric brand that's revolutionising the landscape of affordable jewellry"`,
    author: "GQ",
    logo: "https://www.sergedenimes.com/cdn/shop/files/serge-denimes-brand-logo-gq.svg?v=1696349667&width=600",
  },
   {
    quote: `"Dive into a world where fashion meets emotion and every piece is a journey towards self-expression"`,
    author: "Fault",
    logo: "https://www.sergedenimes.com/cdn/shop/files/LOGO1.svg?v=1736887331&width=600",
  },
  {
    quote: `"The quality never wanes. Continuing to offer 925 silver and high-end, quality jewellery at an alarmingly accessible price point"`,
    author: "Clash",
    logo: "https://www.sergedenimes.com/cdn/shop/files/ud5rE97b_400x400_e421dfb4-4dfe-4e39-814c-0e601c729dbd.svg?v=1736887318&width=600",
  },
];

// Duplicate testimonials for seamless looping (3x to ensure enough logos)
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const logoSliderRef = useRef(null);

  // GSAP animation for quote slider and logo slider
  useEffect(() => {
    if (sliderRef.current && logoSliderRef.current) {
      // Quote slider animation
      gsap.to(sliderRef.current, {
        xPercent: -current * 100,
        duration: 3, // Very slow animation (3 seconds)
        ease: "power2.inOut",
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
      });

      // Logo slider animation
      const logoWidth = 384 + 128; // w-96 (384px) + gap-32 (128px) for large screens
      const mobileLogoWidth = 128 + 32; // w-32 (128px) + gap-8 (32px) for mobile
      const isLargeScreen = window.innerWidth >= 1024;
      const currentLogoWidth = isLargeScreen ? logoWidth : mobileLogoWidth;
      const totalWidth = currentLogoWidth * extendedTestimonials.length;
      const centerIndex = testimonials.length + current; // Use middle set of logos for centering
      const centerOffset = ((centerIndex * currentLogoWidth) / totalWidth) * 100 - (currentLogoWidth * 2 / totalWidth * 100); // Center the current logo
      
      gsap.to(logoSliderRef.current, {
        xPercent: -centerOffset,
        duration: 3, // Match quote slider duration
        ease: "power2.inOut",
      });

      // Logo opacity animation
      const logos = (logoSliderRef.current as HTMLElement).querySelectorAll(".logo-img");
      logos.forEach((logo, index) => {
        const isActive = index % testimonials.length === current; // Match current index in extended array
        gsap.to(logo, {
          opacity: isActive ? 1 : 0.4, // Center logo full opacity, others 40%
          duration: 2, // Slightly faster for smooth opacity transition
          ease: "power2.inOut",
        });
      });
    }
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  type LogoComponentProps = {
    logo: string;
  };

  const LogoComponent = ({ logo }: LogoComponentProps) => {
    return (
      <img
        src={logo}
        alt="Brand logo"
        className="h-6 md:h-12 logo-img opacity-40"
        onError={(e) => (e.currentTarget.src = "/fallback-logo.png")} // Fallback image
      />
    );
  };

  return (
    <section className="bg-gray-100 py-10 relative">
      <div className="mx-auto px-4 md:px-24">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-72 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 z-10"
          aria-label="Previous testimonial"
          disabled={isAnimating}
        >
          <ChevronLeft size={32} className="md:w-12 md:h-12" strokeWidth={0.5} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-72 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 z-10"
          aria-label="Next testimonial"
          disabled={isAnimating}
        >
          <ChevronRight size={32} className="md:w-12 md:h-12" strokeWidth={0.5} />
        </button>

        {/* Content Container */}
        <div className="text-center px-4 md:px-20">
          {/* Quote Section */}
          <div className="mb-8 md:mb-16 min-h-[160px] md:min-h-[200px] flex items-center justify-center">
            <div className="overflow-hidden relative w-full">
              <div ref={sliderRef} className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full flex flex-col items-center justify-center"
                  >
                    <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-none mb-3 px-4 md:px-52 font-thin font-serif italic text-black max-w-4xl">
                      {testimonial.quote}
                    </blockquote>
                    <cite className="not-italic font-medium source-sans-3 text-sm tracking-wide text-black">
                      {testimonial.author}
                    </cite>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="flex items-center justify-center overflow-hidden">
            <div
              ref={logoSliderRef}
              className="flex gap-8 md:gap-32"
              style={{ minWidth: `${(160) * extendedTestimonials.length}px` }} // Mobile: w-32 (128px) + gap-8 (32px), Large: w-96 (384px) + gap-32 (128px)
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className="flex w-32 md:w-96 items-center justify-center">
                  <LogoComponent logo={testimonial.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}