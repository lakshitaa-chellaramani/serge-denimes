"use client"

import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Silver Wild West Ring",
    price: "Rs. 7,780.41",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Wild-West-Product-Shot-Grey.jpg?v=1744293236&width=713",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Wild-West-Product-Shot-4-Grey.jpg?v=1744293256&width=1426",
  },
  {
    id: 2,
    name: "Silver Western Ring",
    price: "Rs. 8,766.11",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Western-Ring-Product-Shot-Grey_a65d463f-0aa3-4618-9950-781af83de618.jpg?v=1748341363&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Western-Ring-Product-Shot-3-Grey.jpg?v=1748341363&width=1426",
  },
  {
    id: 3,
    name: "Silver Moonlight Ring",
    price: "Rs. 7,780.41",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Moonlight-Ring_Grey_1.jpg?v=1744293144&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Moonlight-Ring-Grey-2.jpg?v=1744293144&width=1426",
  },
  {
    id: 4,
    name: "Gold Moonlight Ring",
    price: "Rs. 8,766.11",
    image: "https://www.sergedenimes.com/cdn/shop/files/Gold-Moonlight-Ring_Grey_1.jpg?v=1745933003&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Gold-Moonlight-Ring-Grey-2.jpg?v=1745933003&width=1426",
  },
  {
    id: 5,
    name: "Silver Bull Ring",
    price: "Rs. 7,780.41",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Bull-Ring-Grey-1.jpg?v=1744293637&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Bull-Ring-Grey-2.jpg?v=1744293637&width=1426",
  },
  {
    id: 6,
    name: "Silver Sheriff Ring",
    price: "Rs. 7,780.41",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Sheriff-Ring-Product-Shot-Grey.jpg?v=1744294529&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Sheriff-Ring-Product-Shot-2-Grey.jpg?v=1744294528&width=1426",
  },
  {
    id: 7,
    name: "Silver Spur Ring",
    price: "Rs. 8,766.11",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Spur-Ring-Product-Shot-Grey.jpg?v=1744294222&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Spur-Ring-Product-Shot-2-Grey.jpg?v=1744294223&width=1426",
  },
  {
    id: 8,
    name: "Silver Rodeo Ring",
    price: "Rs. 10,341.58",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Rodeo-Ring-Product-Shot-Grey.jpg?v=1744293691&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Rodeo-Ring-Product-Shot-2-Grey.jpg?v=1744293690&width=1426"
  },
  
]

export default function ProductGridSection1() {
  return (
    <section className="pb-10 -mt-14 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-0">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
                <div className="bg-gray-100 aspect-square mb-4 overflow-hidden relative">
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
              <h3 className=" text-xs font-semibold mb-1 tracking-wide">{product.name.toUpperCase()}</h3>
              <p className="text-xs text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
