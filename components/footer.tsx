// components/Footer.js
import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] w-full pt-16 pb-28 border-t border-zinc-300 px-6">
      <div className="px-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-xs text-black">
          <div>
            <h4 className="font-medium mb-3">ABOUT US</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer">About Us</a></li>
              <li><a href="#" className="cursor-pointer">Hallmarking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">LEGAL</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer">Terms & Conditions</a></li>
              <li><a href="#" className="cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">INFORMATION</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer">Delivery</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer">Returns</a></li>
              <li><a href="#" className="cursor-pointer">Product Search</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">CUSTOMER SERVICES</h4>
            <ul>
              <li className="mb-3"><a href="#" className="cursor-pointer">Care Guide</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer">Size Guide</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer">Student Discount</a></li>
              <li className="mb-3"><a href="#" className="cursor-pointer">Help Centre</a></li>
              <li><a href="#" className="cursor-pointer">Track Your Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">STOCKISTS</h4>
            <ul>
              <li><a href="#" className="cursor-pointer">View Stockists</a></li>
            </ul>
            
          </div>
          <div className="flex gap-4 ">
              <a href="#" aria-label="Facebook"><FaFacebookF size={18}/></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={18}/></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={18}/></a>
              <a href="#" aria-label="TikTok"><FaTiktok size={18}/></a>
            </div>
        </div>

        <div className="mt-24 flex items-center justify-between text-xs text-black/80">
          <span>©2025 Serge DeNimes. All Rights Reserved.</span>
        </div>
      </div>

      {/* Floating Loyalty Scheme Button */}
      {/* <button
        className="fixed bottom-4 right-4 bg-black text-white px-5 py-2 rounded z-50 shadow-lg hover:bg-gray-900 transition"
      >
        Loyalty Scheme
      </button> */}
    </footer>
  );
}
