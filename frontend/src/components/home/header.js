import { HeartPulse } from "lucide-react";
import Button from "../utils/button";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./mobilemenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-100  z-50 lg:px-36">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center">
          <motion.div
            className="h-8 w-8 text-blue-600"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <HeartPulse className="mt-1 font-bold" />
          </motion.div>

          <span className="text-blue-600 font-bold text-2xl ml-1">Medico</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-700 hover:text-gray-900"
          >
            Health Scan
          </a>
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-700 hover:text-gray-900"
          >
            Blog
          </a>
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-700 hover:text-gray-900"
          >
            FAQ
          </a>
          <Button
            variant="secondary"
            className="px-8 py-2 min-w-[140px] text-blue-800 border border-blue-700 bg-transparent
             hover:border-blue-600 hover:bg-blue-600 hover:text-white
             transition duration-300 ease-in-out"
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
