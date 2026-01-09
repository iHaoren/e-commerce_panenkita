import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white">
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
                <h1 className="text-xl font-bold text-emerald-600">
                  PanenKita
                </h1>
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
              <button className="px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition shadow-2xs shadow-gray-500" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-800 transition shadow-2xs shadow-gray-500">
                Register
              </button>
            </div>

            {/* Mobile menu buttons */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-gray-200">
              <a
                href="#fitur"
                className="block text-gray-600 hover:text-emerald-600 py-2"
              >
                Fitur
              </a>
              <a
                href="#tentang"
                className="block text-gray-600 hover:text-emerald-600 py-2"
              >
                Tentang
              </a>
              <a
                href="#kontak"
                className="block text-gray-600 hover:text-emerald-600 py-2"
              >
                Kontak
              </a>
              <button className="w-full px-4 py-2 border-2 border-emerald-600 text-gray-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition shadow-2xs shadow-gray-600" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-800 shadow-2xs shadow-gray-600">
                Register
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
