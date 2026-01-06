import { useState } from "react";
import { Leaf } from "lucide-react";
import { Menu } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-poppins bg-white">
      {/* this for navbar */}
      <nav className="bg-emerald-50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* this for logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-600 to-amber-800 rounded-lg items-center justify-center shadow-2xs shadow-gray-500">
                <Leaf className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-600">PanenKita</h1>
                <p className="text-xs text-amber-800">
                  <i>by HyGroot</i>
                </p>
              </div>
            </div>

            {/* this for menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#fitur"
                className="text-gray-600 hover:text-emerald-600 transition font-medium"
              >
                Fitur
              </a>
              <a
                href="#tentang"
                className="text-gray-600 hover:text-emerald-600 transition font-medium"
              >
                Tentang
              </a>
              <a
                href="#kontak"
                className="text-gray-600 hover:text-emerald-600 transition font-medium"
              >
                Kontak
              </a>
            </div>

            {/* auth buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition shadow-2xs shadow-gray-500">
                Login
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition shadow-2xs shadow-gray-500">Register</button>
            </div>

            {/* Mobile menu buttons */}
            <button>
                <Menu className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"/>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
