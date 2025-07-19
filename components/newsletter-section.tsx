'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function Newsletter() {
  return (
    <section className="py-12 pb-28 px-4 bg-white text-center">
      <h2 className="text-lg font-semibold tracking-wide source-sans-3">JOIN THE COMMUNITY</h2>
      <p className="text-sm text-gray-800 mt-1 font-normal source-sans-3">SIGN UP TO OUR MAILING LIST FOR EXCLUSIVE ACCESS.</p>

      <form className="mt-3 flex justify-center">
        <div className="flex bg-gray-100 items-center w-[250px]">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent w-full px-5 py-1 focus:outline-none text-sm placeholder:text-gray-700 placeholder:font-thin placeholder:source-sans-3"
          />
          <button type="submit" className="p-3 text-gray-600 hover:text-black transition">
            <FaArrowRight />
          </button>
        </div>
      </form>
    </section>
  );
}
