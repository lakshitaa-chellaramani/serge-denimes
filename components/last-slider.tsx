"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const hallmarks = [
  {
    title: "ASSAY OFFICE MARK",
    description: "of the London Assay Office.",
    image: "https://www.sergedenimes.com/cdn/shop/files/H6.svg?v=1698664674",
  },
  {
    title: "YEAR MARK",
    description: "The year that the article was marked.",
    image: "https://www.sergedenimes.com/cdn/shop/files/H5.svg?v=1698095446",
  },
  {
    title: "SPONSORS MARK",
    description: "Shows the company that made the product.",
    image: "https://www.sergedenimes.com/cdn/shop/files/H1.svg?v=1698095447",
  },
  {
    title: "FINENESS MARK",
    description: "The product is made from sterling silver.",
    image: "https://www.sergedenimes.com/cdn/shop/files/H2.svg?v=1698095447",
  },
  {
    title: "Millesimal Finess Mark",
    description: "This shows the silver standard.",
    image: "https://www.sergedenimes.com/cdn/shop/files/H3.svg?v=1698095447",
  },
];

// Duplicate the array to create an infinite loop effect
const infiniteHallmarks = [...hallmarks, ...hallmarks, ...hallmarks];

export default function HallmarkIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Center the middle of the original set on initial load
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const singleSetWidth = container.scrollWidth / 3; // Divide by 3 since we tripled the array
      const centerPosition = singleSetWidth - container.clientWidth / 2;
      container.scrollLeft = centerPosition;
      setScrollLeft(centerPosition);
    }
  }, []);

  // Handle infinite scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const singleSetWidth = container.scrollWidth / 3; // Width of one set of hallmarks
      const scrollPosition = container.scrollLeft;

      // If scrolled past the last set, jump to the first set
      if (scrollPosition >= singleSetWidth * 2) {
        container.scrollLeft = scrollPosition - singleSetWidth;
        setScrollLeft(container.scrollLeft);
      }
      // If scrolled before the first set, jump to the last set
      else if (scrollPosition <= 0) {
        container.scrollLeft = singleSetWidth;
        setScrollLeft(container.scrollLeft);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle momentum animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    interface MomentumEvent {
      timestamp: number;
    }

    const applyMomentum = (timestamp: number) => {
      if (!lastTime) setLastTime(timestamp);
      const deltaTime: number = (timestamp - lastTime) / 16.67; // Normalize to 60fps
      setLastTime(timestamp);

      if (!isDragging && Math.abs(velocity) > 0.5) {
      if (container) {
        container.scrollLeft += velocity * deltaTime;
        setScrollLeft(container.scrollLeft);
      }
      setVelocity(velocity * 0.95); // Decay factor for smooth slowdown
      animationFrameRef.current = requestAnimationFrame(applyMomentum);
      } else {
      cancelAnimationFrame(animationFrameRef.current as number);
      setVelocity(0);
      setLastTime(0);
      }
    };

    if (!isDragging && Math.abs(velocity) > 0.5) {
      animationFrameRef.current = requestAnimationFrame(applyMomentum);
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, velocity, lastTime]);

  // Handle drag start
  interface DragEventWithPageX extends React.MouseEvent<HTMLDivElement> {
    pageX: number;
  }

  const handleDragStart = (e: DragEventWithPageX) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0));
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
    setVelocity(0); // Reset velocity
    setLastTime(0);
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // Handle drag move
  interface DragMoveEvent extends React.MouseEvent<HTMLDivElement> {
    pageX: number;
  }

  const handleDragMove = (e: DragMoveEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x: number = e.pageX - (containerRef.current?.offsetLeft ?? 0);
    const walk: number = (x - startX) * 1.2; // Adjusted drag speed
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }

    // Calculate velocity
    const newVelocity: number = (x - startX) / 10; // Smoother velocity calculation
    setVelocity(newVelocity);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    if (containerRef.current) {
      
                  setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setVelocity(0); // Reset velocity
    setLastTime(0);
    cancelAnimationFrame(animationFrameRef.current as number); // Stop momentum
  };

  // Handle touch move
  interface TouchMoveEvent extends React.TouchEvent<HTMLDivElement> {
    touches: React.TouchList;
  }

  const handleTouchMove = (e: TouchMoveEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x: number = e.touches[0].pageX - (containerRef.current?.offsetLeft ?? 0);
    const walk: number = (x - startX) * 1.2; // Adjusted drag speed
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }

    // Calculate velocity
    const newVelocity: number = (x - startX) / 10; // Smoother velocity calculation
    setVelocity(newVelocity);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsDragging(false);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <section className="bg-white border-t border-b px-4 md:px-14 py-12 md:py-20 border-zinc-300 overflow-hidden">
      <div
        ref={containerRef}
        className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hidden relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollBehavior: "smooth",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-8 md:gap-16 px-4 md:px-12">
          {infiniteHallmarks.map((mark, index) => (
            <div
              key={`${mark.title}-${index}`} // Unique key for duplicated items
              className="flex items-start gap-3 md:gap-4 snap-center min-w-[240px] md:min-w-[300px] transition-opacity duration-300"
            >
              {/* Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0">
                <Image
                  src={mark.image}
                  alt={mark.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xs font-medium tracking-wide">{mark.title.toUpperCase()}</h3>
                <p className="text-xs text-gray-900 mt-1 tracking-wide">{mark.description}</p>
                <a
                  href="#"
                  className="text-xs text-zinc-900 underline inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}