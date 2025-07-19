"use client"

import Image from "next/image"

export default function PerleBanner() {
  return (
    <section className="bg-gray-50">
      <div className="w-full">
        <div className="relative w-full h-[520px] lg:h-[610px]">
          <Image
            src="https://www.sergedenimes.com/cdn/shop/files/PERLE2.jpg?v=1744291913&width=1426"
            alt="Perle"
            fill
            style={{ objectFit: "cover" }}
            className="hidden lg:block"
            priority
          />
          <div className="block lg:hidden w-full h-full">
            <Image
              src="https://www.sergedenimes.com/cdn/shop/files/Perle1_c7c477ba-2030-4aae-878d-3198b5404104.jpg?v=1744287271&width=1100"
              alt="Perle"
              fill
              style={{ objectFit: "cover" }}
              className="w-[90%] h-[80%] mx-auto my-auto"
              priority
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-[22px] font-serif mb-3 tracking-wide text-white">Perle</h1>
              <button className="border border-white text-white mb-9 px-5 py-3 text-xs tracking-wide transition-colors">
          SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}