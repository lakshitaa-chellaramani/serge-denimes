"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Silver Wild West Ring",
    price: "Rs. 39,287.63",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Gold-Brushed-Diamond-Signet-Ring-Product-Shot-2-Grey_b1fc4b94-bec1-45ae-a0d5-bafa2b239541.jpg?v=1713338586&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Gold-Brushed-Diamond-Signet-Ring-Product-Shot-3-Grey_092ac106-372e-4ace-b7d3-61d67b2d7439.jpg?v=1713338586&width=1946",
  },
  {
    id: 2,
    name: "Silver Western Ring",
    price: "Rs. 35,359.22",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Brushed-Diamond-Signet-Ring-Product-Shot-2-Grey_fb8d1fee-e541-4c0d-b09c-3060510ab595.jpg?v=1713275600&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Brushed-Diamond-Signet-Ring-Product-Shot-3-Grey_50a6a3b8-d2d6-4fd3-8263-0d5a73fe070d.jpg?v=1713275600&width=1946",
  },
  {
    id: 3,
    name: "Silver Moonlight Ring",
    price: "Rs. 29,466.02",
   image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Emerald-Birthstone-Ring-Product-Shot-2-Grey_35270ded-ba78-459a-9bc5-7e8f895b9df9.jpg?v=1713340353&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Birthstone-Ring-Back-Product-Shot-Grey_68791803-c11b-435e-93f0-eefcc11658cb.jpg?v=1713340353&width=1946",
  },
  {
    id: 4,
    name: "Gold Moonlight Ring",
    price: "Rs. 24,554.62",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Opal-Birthstone-Ring-Product-Shot-2-Grey_4483733a-9c7d-4164-b639-b112d4cf9294.jpg?v=1713341137&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Birthstone-Ring-Back-Product-Shot-Grey_f5209e3d-0b66-4c6e-8b94-9895313dd926.jpg?v=1713341137&width=1946",
  },
  {
    id: 5,
    name: "Silver Bull Ring",
    price: "Rs. 30,447.82",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Mother-Of-Pearl-Ring-Product-Shot-2-Grey_1d0b95e3-d6c5-4f7e-9f47-a99789fc048d.jpg?v=1713342059&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Stone-Ring-Product-Shot-3-Grey_3715d8a2-4df2-4bf0-8253-deef05c6ad5f.jpg?v=1713342059&width=1946",
  },
  {
    id: 6,
    name: "Silver Sheriff Ring",
    price: "Rs. 30,447.82",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Tigers-Eye-Ring-Product-Shot-2-Grey_1.jpg?v=1713342130&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Stone-Ring-Product-Shot-3-Grey_1609cf20-b8c7-491d-9766-28d59ef89d06.jpg?v=1713342130&width=1946",
  },
  {
    id: 7,
    name: "Silver Spur Ring",
    price: "Rs. 30,447.82",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Malachite-Ring-Product-Shot-2-Grey_d76889d9-ebd3-40d3-bf07-d943b314866d.jpg?v=1713342716&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Stone-Ring-Product-Shot-3-Grey_cec7b775-a1ab-4d9d-bec4-c2634b4e2fe8.jpg?v=1713342716&width=1946",
  },
  {
    id: 8,
    name: "Silver Rodeo Ring",
    price: "Rs. 30,447.82",
    image:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Turquoise-Ring-Product-Shot-2-Grey_fc60162c-d461-46ab-b982-556799914d68.jpg?v=1713342799&width=1946",
    hoverImage:
      "https://www.sergedenimes.com/cdn/shop/files/Silver-Round-Stone-Ring-Product-Shot-3-Grey_51a0858f-fdf9-465a-87d1-dc7a0c2e1a80.jpg?v=1713342799&width=1946",
  },
];

export default function ProductGridSection1() {
  return (
    <section className="lg:pb-10 xl:pb-10 2xl:pb-10 pb-5 mt-10  px-4 lg:px-6 xl:px-6 2xl:px-6">
      <div className="container mx-auto">
        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-64">
                  <div className="group cursor-pointer">
                    <div className="bg-gray-100 aspect-square mb-3 overflow-hidden relative rounded-sm">
                      <span className="absolute flex justify-center px-1 py-0.5 items-center font-normal top-2 left-2 bg-black text-white text-[6px] lg:text-[10px] xl:text-[10px] 2xl:text-[10px]  rounded-sm z-10">
                  PERLE
                </span>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${product.hoverImage ? "group-hover:opacity-0" : ""}`}
                      />
                      {product.hoverImage && (
                        <Image
                          src={product.hoverImage}
                          alt={product.name + " hover"}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      )}
                    </div>
                    <h3 className="text-xs font-medium mb-1 tracking-wide text-gray-800">{product.name.toUpperCase()}</h3>
                    <p className="text-xs text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mx-0">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-100 aspect-square mb-4 overflow-hidden relative">
                <span className="absolute flex justify-center px-1 py-0.5 items-center font-normal top-2 left-2 bg-black text-white text-[10px]  rounded-sm z-10">
                  PERLE
                </span>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${product.hoverImage ? "group-hover:opacity-0" : ""}`}
                />
                {product.hoverImage && (
                  <Image
                    src={product.hoverImage}
                    alt={product.name + " hover"}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                )}
              </div>
              <h3 className="text-xs font-semibold mb-1 tracking-wide">{product.name.toUpperCase()}</h3>
              <p className="text-xs text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
