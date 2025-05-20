import { X } from "lucide-react";
import Button from "../utils/button.js";
import { useNavigate,Link } from 'react-router-dom';


export default function MobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-end">
      <div className="bg-white w-64 h-full shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-6 mt-12">
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-800 hover:text-blue-600"
          >
            Health Scan
          </a>
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-800 hover:text-blue-600"
          >
            Blog
          </a>
          <a
            href="https://devhub1.vercel.app"
            className="text-gray-800 hover:text-blue-600"
          >
            FAQ
          </a>
          <Button
            variant="secondary"
            onClick={() => {
              console.log("Button clicked");
              navigate("/auth");
            }}
            className="mt-4 px-8 py-2 text-blue-600 border border-blue-700 bg-transparent
                  hover:border-blue-600 hover:bg-blue-600 hover:text-white
                  transition duration-300 ease-in-out"
          >
            Sign In
          </Button>
        </nav>
      </div>

      <div className="flex-1" onClick={onClose} />
    </div>
  );
}
