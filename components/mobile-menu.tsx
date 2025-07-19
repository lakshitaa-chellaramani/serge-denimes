"use client"

import { Search, Plus } from "lucide-react"
import Link from "next/link"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose} className="text-sm font-medium">
            CLOSE
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="SEARCH"
              className="flex-1 text-sm font-medium placeholder-black border-none outline-none"
            />
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between py-2">
              <Link href="/modern-rodeo" className="text-sm font-medium">
                MODERN RODEO
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="py-2">
              <Link href="/new-in" className="text-sm font-medium">
                NEW IN
              </Link>
            </div>

            <div className="py-2">
              <Link href="/best-sellers" className="text-sm font-medium">
                BEST SELLERS
              </Link>
            </div>

            <div className="py-2">
              <Link href="/perle" className="text-sm font-medium">
                PERLE
              </Link>
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/shop-all" className="text-sm font-medium">
                SHOP ALL
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/rings" className="text-sm font-medium">
                RINGS
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/necklaces" className="text-sm font-medium">
                NECKLACES
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/bracelets" className="text-sm font-medium">
                BRACELETS
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/earrings" className="text-sm font-medium">
                EARRINGS
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/accessories" className="text-sm font-medium">
                ACCESSORIES
              </Link>
              <Plus className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Link href="/collections" className="text-sm font-medium">
                COLLECTIONS
              </Link>
              <Plus className="w-4 h-4" />
            </div>
          </div>

          <div className="border-t p-4 space-y-4">
            <Link href="/stockists" className="block text-sm font-medium">
              View Stockists
            </Link>
            <Link href="/help" className="block text-sm font-medium">
              Help Centre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
