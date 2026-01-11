import {useState } from "react";
import {
  Leaf,
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full">
      {/* this for MAIN NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-4">
          {/* This for LOGO */}
          <div className="flex items-center gap-2 min-w-fit">
            <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
              <Leaf className="text-white" />
            </div>
            <div>
              <p className="font-bold text-emerald-700 leading-none">
                PanenKita
              </p>
              <p className="text-[11px] text-gray-500 leading-none">
                by HyGroot
              </p>
            </div>
          </div>

          {/* This for MENU */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600 ml-6">
            <a href="#" className="hover:text-emerald-600">
              Beranda
            </a>
            <a href="#" className="hover:text-emerald-600">
              Keranjang
            </a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-600">
              Kategori <ChevronDown size={14} />
            </div>
            <a href="#" className="hover:text-emerald-600">
              Blog
            </a>
          </div>

          {/* This for SEARCH */}
          <div className="flex-1 relative hidden md:block">
            <input
              type="text"
              placeholder="Cari disini..."
              className="w-full border rounded-full py-2.5 pl-11 pr-4  text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          {/* this for RIGHT ACTION */}
          <div className="hidden md:flex items-center gap-5 text-sm text-gray-600">
            <div className="flex items-center gap-1 cursor-pointer">
              Wallet <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              Indonesia <ChevronDown size={14} />
            </div>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 hover:text-emerald-600"
            >
              <User size={18} /> Masuk
            </button>

            <button className="relative hover:text-emerald-600">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-2 bg-emerald-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* this for MOBILE BUTTON */}
          <button
            className="ml-auto md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* this for MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-sm">
            <a href="#" className="block">
              Beranda
            </a>
            <a href="#" className="block">
              Keranjang
            </a>
            <a href="#" className="block">
              Kategori
            </a>
            <a href="#" className="block">
              Blog
            </a>
            <button
              onClick={() => navigate("/login")}
              className="w-full border rounded-lg py-2 text-white bg-emerald-600 hover:bg-emerald-400 transition"
            >
              Masuk
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
