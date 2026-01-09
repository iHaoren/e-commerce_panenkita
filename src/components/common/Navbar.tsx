import { useState } from "react";
import {
  Leaf,
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full">
      {/* this for TOP BAR */}
      <div className="hidden md:block bg-emerald-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Sidoarjo, Jawa Timur
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14}/> Setiap hari 24/7
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14}/>
            <span>085****</span>
          </div>
        </div>
      </div>
            

            {/* this for MAIN NAVBAR */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-4">

                {/* This for LOGO */}
                <div className="flex items-center gap-2 min-w-fit">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
                    <Leaf className="text-white"/>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-700 leading-none">PanenKita</p>
                    <p className="text-[11px] text-gray-500 leading-none">by HyGroot</p>
                  </div>
                </div>

                {/* This for MENU */}
                <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600 ml-6">
                  <a href="#" className="hover:text-emerald-600">Home</a>
                  <a href="#" className="hover:text-emerald-600">Shop</a>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-600">
                    Kategori <ChevronDown size={14} />
                  </div>
                  <a href="#" className="hover:text-emerald-600">Blog</a>
                </div>

                {/* This for SEARCH */}
                <div className="flex-1 relative hidden md:block">
                  <input type="text" placeholder="Cari disini..." className="w-full border rounded-full py-2.5 pl-11 pr-4  text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                </div>

                {/* this for RIGHT ACTION */}
                <div>
                  <div></div>
                </div>

              </div>
            </nav>

  );
}

export default Navbar;
