"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    "SHOP ALL",
    "NEW IN",
    "BEST SELLERS",
    "SHOP GOLD",
    "SHOP SILVER",
    "PERLE",
    "MODERN RODEO",
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);
      setShowMenu(currentScrollY <= 100 || currentScrollY < lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Hero Background */}
      <section className="fixed top-0 left-0 h-screen w-full flex flex-col justify-end text-white overflow-hidden -z-10">
        <img
          src="https://www.sergedenimes.com/cdn/shop/files/03_811b7584-f81b-4beb-818c-873b658db84e.jpg?v=1751445580&width=1946"
          alt="Modern Rodeo"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-[22px] font-serif mb-4 tracking-wide">
              Modern Rodeo
            </h1>
            <button className="border border-white mb-12 px-4 py-3 text-xs font-medium tracking-wide hover:bg-white hover:text-black transition-colors">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <header
        className={`w-full py-4 px-4 md:px-8 flex items-center justify-between fixed  z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black top-5"
            : "bg-transparent text-white top-0"
        }`}
      >
        <button onClick={toggleSidebar} className={`text-2xl ${isScrolled ? " " : "mt-3"}`}>
          <FiMenu />
        </button>

        <div className="flex  items-center text-center">
          <h1
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white m-5 tracking-wide"
            }`}
          >
            SERGE DENIMES
          </h1>
        </div>

        <div className={`text-xl flex items-center ${isScrolled ? " " : "mt-3"} gap-4`}>
          <FiSearch className="cursor-pointer" />
          <FiShoppingBag className="cursor-pointer" />
        </div>
      </header>

      {/* Nav Links */}
      <nav
        className={`md:flex w-full py-2 mt-4 pb-6 font-normal tracking-wide px-4 md:px-8 text-xs justify-center space-x-6 fixed top-[64px] z-40 transition-all duration-300 ${
          showMenu
            ? isScrolled
              ? "opacity-100 pointer-events-auto shadow-md bg-white text-black "
              : "opacity-100 pointer-events-auto bg-transparent text-white"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <p
            key={index}
            className={`cursor-pointer transition-colors ${
              link === "PERLE" ? "text-green-700" : ""
            }`}
          >
            {link}
          </p>
        ))}
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full max-w-[450px] sm:w-[49svw] overflow-y-auto bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 pr-12 h-full flex flex-col justify-between ml-6 text-xs ">
          <div>
            <div className="flex justify-between items-center mb-6 mt-4">
              <button onClick={toggleSidebar} className="text-xs font-medium">
                CLOSE
              </button>
            </div>

            <div className="flex items-center border-b-2 border-black pb-2 mb-6">
              <span className="text-xs font-medium mr-2">SEARCH</span>
              <FiSearch className="ml-auto" size={22} />
            </div>

            <nav className="space-y-6 text-xs font-medium tracking-wider">
              {[
                "MODERN RODEO",
                "NEW IN",
                "BEST SELLERS",
                "PERLE",
                "SHOP ALL",
                "RINGS",
                "NECKLACES",
                "BRACELETS",
                "EARRINGS",
                "ACCESSORIES",
                "COLLECTIONS",
              ].map((item, i) => (
                <p
                  key={i}
                  className={` cursor-pointer ${
                    item === "PERLE" ? "text-green-800" : ""
                  }`}
                >
                  {item} <span className="float-right">+</span>
                </p>
              ))}
            </nav>
          </div>

          <div className="mt-12 space-y-3 text-xs text-gray-800">
            <p className="cursor-pointer ">View Stockists</p>
            <p className="cursor-pointer ">Help Centre</p>
            <p className="cursor-pointer ">Terms & Conditions</p>
            <p className="cursor-pointer ">Privacy Policy</p>
          </div>

          <span className="text-[10px] text-gray-900  py-10 pb-14">
            ©2025 Serge DeNimes. All Rights Reserved.
          </span>
        

        </div>
      </aside>

      {/* Spacer to push rest of content below hero */}
      <div className="h-20 w-full"></div>
    </div>
  );
}