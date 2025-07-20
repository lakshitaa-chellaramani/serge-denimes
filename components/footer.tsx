// components/Footer.js
import { useState } from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF, FaPlus, FaMinus } from "react-icons/fa";

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    about: false,
    legal: false,
    information: false,
    customer: false,
    stockists: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-[#F3F3F3]  w-full pt-8 md:pt-16 pb-16 md:pb-28 border-t border-zinc-100 px-4 md:px-6">
      <div className="md:pl-10">
        {/* Mobile Accordion Layout */}
        <div className="block md:hidden space-y-1">
          {/* About Us Section */}
          <div className="border-b border-zinc-300">
            <button
              onClick={() => toggleSection('about')}
              className="w-full flex justify-center items-center py-4 text-sm font-medium text-black relative"
            >
              ABOUT US
              <span className="absolute right-0">
                {openSections.about ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>
            {openSections.about && (
              <div className="pb-4 text-xs">
                <ul className="space-y-3 text-center ">
                  <li><a href="#" className="cursor-pointer">About Us</a></li>
                  <li><a href="#" className="cursor-pointer">Hallmarking</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Legal Section */}
          <div className="border-b border-zinc-300">
            <button
              onClick={() => toggleSection('legal')}
              className="w-full flex justify-center items-center py-4 text-sm font-medium text-black relative"
            >
              LEGAL
              <span className="absolute right-0">
                {openSections.legal ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>
            {openSections.legal && (
              <div className="pb-4 text-xs">
                <ul className="space-y-3 text-center">
                  <li><a href="#" className="cursor-pointer">Terms & Conditions</a></li>
                  <li><a href="#" className="cursor-pointer">Privacy Policy</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="border-b border-zinc-300">
            <button
              onClick={() => toggleSection('information')}
              className="w-full flex justify-center items-center py-4 text-sm font-medium text-black relative"
            >
              INFORMATION
              <span className="absolute right-0">
                {openSections.information ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>
            {openSections.information && (
              <div className="pb-4 text-xs">
                <ul className="space-y-3 text-center">
                  <li><a href="#" className="cursor-pointer">Delivery</a></li>
                  <li><a href="#" className="cursor-pointer">Returns</a></li>
                  <li><a href="#" className="cursor-pointer">Product Search</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Customer Services Section */}
          <div className="border-b border-zinc-300">
            <button
              onClick={() => toggleSection('customer')}
              className="w-full flex justify-center items-center py-4 text-sm font-medium text-black relative"
            >
              CUSTOMER SERVICES
              <span className="absolute right-0">
                {openSections.customer ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>
            {openSections.customer && (
              <div className="pb-4 text-xs">
                <ul className="space-y-3 text-center">
                  <li><a href="#" className="cursor-pointer">Care Guide</a></li>
                  <li><a href="#" className="cursor-pointer">Size Guide</a></li>
                  <li><a href="#" className="cursor-pointer">Student Discount</a></li>
                  <li><a href="#" className="cursor-pointer">Help Centre</a></li>
                  <li><a href="#" className="cursor-pointer">Track Your Order</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Stockists Section */}
          <div className="border-b border-zinc-300">
            <button
              onClick={() => toggleSection('stockists')}
              className="w-full flex justify-center items-center py-4 text-sm font-medium text-black relative"
            >
              STOCKISTS
              <span className="absolute right-0">
                {openSections.stockists ? <FaMinus size={12} /> : <FaPlus size={12} />}
              </span>
            </button>
            {openSections.stockists && (
              <div className="pb-4 text-xs">
                <ul className="text-center">
                  <li><a href="#" className="cursor-pointer">View Stockists</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center gap-4 pt-8 pb-4">
            <a href="#" aria-label="Facebook"><FaFacebookF size={18}/></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={18}/></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={18}/></a>
            <a href="#" aria-label="TikTok"><FaTiktok size={18}/></a>
          </div>

          {/* Copyright - Mobile */}
          <div className="text-center text-xs text-black/80 pt-4">
            <span>©2025 Serge DeNimes. All Rights Reserved.</span>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden pl-6 md:grid grid-cols-6 gap-4 text-xs text-black">
          <div className="text-center lg:text-left xl:text-left">
            <h4 className="font-medium tracking-wider mb-3">ABOUT US</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wide">About Us</a></li>
              <li><a href="#" className="cursor-pointer tracking-wide">Hallmarking</a></li>
            </ul>
          </div>
         
          <div className="text-center lg:text-left xl:text-left">
            <h4 className="font-medium mb-3">LEGAL</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wide leading-5">Terms & Conditions</a></li>
              <li><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Privacy Policy</a></li>
            </ul>
          </div>
         
          <div className="text-center lg:text-left xl:text-left">
            <h4 className="font-medium mb-3">INFORMATION</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Delivery</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Returns</a></li>
              <li><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Product Search</a></li>
            </ul>
          </div>
          
          <div className="text-center lg:text-left xl:text-left">
            <h4 className="font-medium mb-3">CUSTOMER SERVICES</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Care Guide</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Size Guide</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Student Discount</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Help Centre</a></li>
              <li><a href="#" className="cursor-pointer tracking-wider text-zinc-900">Track Your Order</a></li>
            </ul>
          </div>
         
          <div className="text-center  gap-8 flex lg:text-left xl:text-left">
            <div>
               <h4 className="font-medium mb-3">STOCKISTS</h4>
            <ul>
              <li><a href="#" className="cursor-pointer tracking-wider text-zinc-900">View Stockists</a></li>
            </ul>
            </div>
           
          
          </div>
          <div className="flex -ml-36  justify-center gap-4">
            <a href="#" aria-label="Facebook"><FaFacebookF size={18}/></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={18}/></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={18}/></a>
            <a href="#" aria-label="TikTok"><FaTiktok size={18}/></a>
          </div>
            
          
        </div>

        {/* Desktop Copyright */}
        <div className="hidden md:flex  mt-24 items-center  tracking-wider justify-between text-xs text-black">
          <span>©2025 Serge DeNimes. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}