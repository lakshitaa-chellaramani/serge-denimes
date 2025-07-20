"use client"

import Image from "next/image"

const products = [
  {
    id: 1,
    name: "SILVER SKELETON HANDS RING",
    price: "Rs. 10,828.63",
    image: "https://www.sergedenimes.com/cdn/shop/products/Silver-Skeleton-Hands-Ring-product-Shot-grey_3ce2325c-8639-4618-a322-86bd992b565d.jpg?v=1654770588&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/products/Silver-Skeleton-Hands-Ring-product-Shot-2-grey_1cf2b874-feee-4ef5-82cc-073fce3b2e4d.jpg?v=1654770588&width=1426",
  },
  {
    id: 2,
    name: "SILVER ZEUS RING",
    price: "Rs. 7,776.25",
    image: "https://www.sergedenimes.com/cdn/shop/products/Silver-Zeus-Ring-Grey-1.jpg?v=1681816393&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/products/Silver-Zeus-Ring-Grey-2.jpg?v=1681816393&width=1426",
  },
  {
    id: 3,
    name: "SILVER ENVY SIGNET RING",
    price: "Rs. 7,776.25",
    image: "https://www.sergedenimes.com/cdn/shop/products/Silver-Envy-Ring-Product-Shot-Grey_06a5e008-7fc1-4cb3-812c-7d3ed12f8dbb.jpg?v=1675962098&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/products/Silver-Envy-Ring-Product-Shot-2-Grey_be9957e0-6eac-496c-bde3-d117309c737a.jpg?v=1675962098&width=1426",
  },
  {
    id: 4,
    name: "SILVER PATRIOT RING",
    price: "Rs. 6,398.90",
    image: "https://www.sergedenimes.com/cdn/shop/products/Silver-Patriot-Ring-Product-Shot-grey.jpg?v=1625225931&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/products/Silver-Patriot-Ring-Product-Shot-2-grey.jpg?v=1625225931&width=1426",
  },
  {
    id: 5,
    name: "SILVER SIGNET RING",
    price: "Rs. 8,366.88",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Signet-Ring-Product-Shot-Grey-NEW.jpg?v=1698313573&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Signet-Ring-Product-Shot-2-Grey-NEW.jpg?v=1698313573&width=1426",
  },
  {
    id: 6,
    name: "Gold Royal Envy Ring",
    price: "Rs. 8,766.11",
    image: "https://www.sergedenimes.com/cdn/shop/files/Gold-Royal-Envy-Ring-White-1jpg_f83235fb-529e-4ee3-9541-227ef4c70b63.jpg?v=1731927160&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Gold-Royal-Envy-Ring-White-3.jpg?v=1731927044&width=1426",
  },
  {
    id: 7,
    name: "Silver Kabuto Ring",
    price: "Rs. 7,780.41",
    image: "https://www.sergedenimes.com/cdn/shop/products/Silver-Kabuto-Ring-Product-Shot-Grey.jpg?v=1651763689&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Kabuto-Ring-Product-Shot-2-Grey.jpg?v=1708433660&width=1426"
  },
  {
    id: 8,
    name: "Silver Traditional Hallmark Ring",
    price: "Rs. 8,371.36",
    image: "https://www.sergedenimes.com/cdn/shop/files/Silver-Traditional-Hallmark-Ring-Product-Shot-Grey-NEW.jpg?v=1698315459&width=1426",
    hoverImage: "https://www.sergedenimes.com/cdn/shop/files/Silver-Traditional-Hallmark-Ring-Product-Shot-2-Grey-NEW.jpg?v=1698315459&width=1426",
  }
]

export default function ProductGridSection2() {
  return (
    <section className="pb-10 mt-9 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mx-0">
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
              <h3 className="font-semibold text-xs mb-2 tracking-wide">{product.name.toUpperCase()}</h3>
              <p className="text-xs text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
