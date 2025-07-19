"use client";

import { X, ShoppingBag, User, Gift, Ticket } from "lucide-react";

interface LoyaltyModalProps {
  onClose: () => void;
}

export default function LoyaltyModal({ onClose }: LoyaltyModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center source-sans-3 z-50 ">
      <div className="bg-white w-full max-w-3xl lg:min-h-[600px] h-screen  lg:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-black text-white text-center py-4">
          <h2 className="text-xl md:text-2xl px-8">
            <span className="hidden md:inline">Introducing Loyalty Scheme</span>
            <span className="md:hidden">Welcome to our loyalty program</span>
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Content Area with full height vertical border */}
          <div className="relative border-t border-b border-gray-300">
            {/* Vertical dashed center border */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px border-r border-dashed border-gray-300 z-10" />

            <div className="grid grid-cols-2 gap-12 px-6 py-10 relative z-20">
              {/* Earn Points */}
              <div className="flex flex-col">
                <h3 className="text-xl font-normal text-center mb-12 text-gray-700">
                  <span className="font-semibold text-black">Earn points</span> when you complete
                  <br />
                  activities
                </h3>

                <div className="space-y-8 flex-1 flex flex-col justify-center pl-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">Make a purchase</div>
                      <div className="text-base text-gray-600">1 point per £1 (₹117.86 INR)</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">Create an account</div>
                      <div className="text-base text-gray-600">5 points</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">Happy Birthday</div>
                      <div className="text-base text-gray-600">10 points</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redeem Points */}
              <div className="flex flex-col">
                <h3 className="text-xl font-normal text-center mb-12 text-gray-700">
                  <span className="font-semibold text-black">Redeem points</span> for rewards from
                  Serge DeNimes
                </h3>

                <div className="space-y-8 flex-1 flex flex-col justify-center pl-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">£5 voucher</div>
                      <div className="text-base text-gray-600">50 points</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">£10 voucher</div>
                      <div className="text-base text-gray-600">100 points</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-md text-black">£25 voucher</div>
                      <div className="text-base text-gray-600">250 points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Call to Action */}
          <div className="text-center mt-10 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Log in or sign up to Serge DeNimes to earn rewards today
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button className="bg-black text-white px-6 py-2 text-xl font-medium hover:bg-gray-800 transition-colors">
                Log in
              </button>
              <span className="text-gray-400 text-base">/</span>
              <button className="bg-black text-white px-6 py-2 text-xl font-medium hover:bg-gray-800 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="px-6 py-6">
            {/* Redeem Points Section - Mobile */}
            <div className="mb-8">
              <h3 className="text-lg font-normal text-left mb-4 text-gray-700">
                <span className="font-semibold text-black">Redeem points</span> for rewards from Serge DeNimes
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">£5 voucher</div>
                    <div className="text-sm text-gray-600">50 points</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">£10 voucher</div>
                    <div className="text-sm text-gray-600">100 points</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">£25 voucher</div>
                    <div className="text-sm text-gray-600">250 points</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Earn Points Section - Mobile */}
            <div className="mb-8">
              <h3 className="text-lg font-normal text-left mb-4 text-gray-700">
                <span className="font-semibold text-black">Earn points</span> when you complete activities
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">Make a purchase</div>
                    <div className="text-sm text-gray-600">1 point per £1 (₹117.86 INR)</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">Create an account</div>
                    <div className="text-sm text-gray-600">5 points</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-black">Happy Birthday</div>
                    <div className="text-sm text-gray-600">10 points</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Call to Action */}
            <div className="text-center pt-4">
              <p className="text-base text-gray-600 mb-6">
                Log in or sign up to Serge DeNimes to earn rewards today
              </p>
              <div className="flex justify-center items-center space-x-3">
                <button className="bg-black text-white px-6 py-2 text-base font-medium hover:bg-gray-800 transition-colors rounded">
                  Log in
                </button>
                <span className="text-gray-400 text-sm">/</span>
                <button className="bg-black text-white px-6 py-2 text-base font-medium hover:bg-gray-800 transition-colors rounded">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}