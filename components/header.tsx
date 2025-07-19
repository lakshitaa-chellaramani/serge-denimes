"use client"

import { Search, ShoppingBag, Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button onClick={onMenuClick} className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            SERGE DENIMES
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/shop-all" className="hover:text-gray-600 transition-colors">
              SHOP ALL
            </Link>
            <Link href="/new-in" className="hover:text-gray-600 transition-colors">
              NEW IN
            </Link>
            <Link href="/best-sellers" className="hover:text-gray-600 transition-colors">
              BEST SELLERS
            </Link>
            <Link href="/shop-gold" className="hover:text-gray-600 transition-colors">
              SHOP GOLD
            </Link>
            <Link href="/shop-silver" className="hover:text-gray-600 transition-colors">
              SHOP SILVER
            </Link>
            <Link href="/perle" className="hover:text-gray-600 transition-colors">
              PERLE
            </Link>
            <Link href="/modern-rodeo" className="hover:text-gray-600 transition-colors">
              MODERN RODEO
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
