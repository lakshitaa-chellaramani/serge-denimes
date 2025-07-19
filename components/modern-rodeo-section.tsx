"use client"

import Image from "next/image"

export default function ModernRodeoSection() {
  return (
    <section className="h-screen overflow-hidden">
      <Image src="https://www.sergedenimes.com/cdn/shop/files/03_811b7584-f81b-4beb-818c-873b658db84e.jpg?v=1751445580&width=1426" alt="Modern Rodeo Collection" fill className="object-cover lg:block hidden" priority />
      <Image src="https://www.sergedenimes.com/cdn/shop/files/01_0d6e8f02-7735-48a4-bc30-205107671dbb.jpg?v=1751362357&width=823" alt="Modern Rodeo Collection" fill className="  object-cover block lg:hidden" priority />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-[22px] font-serif mb-4 tracking-wide">Modern Rodeo</h1>
          <button className="border border-white mb-12 px-4 py-3 text-xs font-medium tracking-wide transition-colors">
            SHOP THE COLLECTION
          </button>
        </div>
      </div>
    </section>
  )
}
