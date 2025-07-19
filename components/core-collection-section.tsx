"use client"

import Image from "next/image"

export default function CoreCollectionSection() {
  return (
    <section className="bg-gray-50">
      <div className="w-full">
        <div className="relative w-full h-[600px]">
          <Image
            src="https://www.sergedenimes.com/cdn/shop/files/core5.jpg?v=1744287219&width=1426"
            alt="Core Collection"
            fill
            style={{ objectFit: "cover" }}
            className=""
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-[22px] font-serif mb-4 tracking-wide">Core Collection</h1>
              <button className="border border-black mb-12 px-4 py-3 text-xs tracking-wide transition-colors">
          SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}